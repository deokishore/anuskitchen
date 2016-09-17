package com.tamaar.service;

import com.tamaar.shoppingcart.parser.OrderVo;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;


@Service
public class EmailService {

	private Logger logger = Logger.getLogger(EmailService.class);

	@Autowired
	private JavaMailSender mailSender;

	@Autowired
	private TemplateEngine templateEngine;

	private static List<String> clientInfoList = Arrays.asList("deokishore@yahoo.com");

	private static int counter = 1;

	/*
	 * Send HTML mail (simple)
	 */
	public void sendClientEMail(final OrderVo orderVo) throws MessagingException {

		logger.info("Sending sendClientEMail ");

		// Prepare the evaluation context
		if(orderVo != null && orderVo.getOrderId() != null) {
			final String firstName = orderVo.getCustomerByCustomerIdVo().getFirstName() == null ? " No FirstName " : orderVo.getCustomerByCustomerIdVo().getFirstName();
			final String lastName = orderVo.getCustomerByCustomerIdVo().getLastName() == null ? " No LastName " : orderVo.getCustomerByCustomerIdVo().getLastName();
			final String orderId = orderVo.getOrderId().toString() == null ? " No Order Id " : orderVo.getOrderId().toString();

			Locale cLocale = new Locale.Builder().setLanguage("en").setRegion("GB").build();
			Context ctx = new Context(cLocale);
			ctx.setVariable("name", firstName + " " + lastName);
			ctx.setVariable("orderId", orderId);
			ctx.setVariable("orderDetailsVO", orderVo.getOrderDetailsVO());

			sendEmailToTamaarTeam(ctx);

			sendEmailToClient(orderVo, ctx);
		}
	}

	private void sendEmailToTamaarTeam(Context ctx) {
		// Create the HTML body using Thymeleaf
		logger.info("Creating the HTML body using Thymeleaf ");
		final String htmlContent = templateEngine.process("email-for-tamaarteam.html", ctx);
		MimeMessagePreparator[] preparators = new MimeMessagePreparator[clientInfoList.size()];
		int i = 0;
		for (final String tamaarUserEmail : clientInfoList) {
			preparators[i++] = new MimeMessagePreparator() {
				public void prepare(MimeMessage mimeMessage) throws Exception {
					try {
						final MimeMessageHelper message = new MimeMessageHelper(mimeMessage, true, "UTF-8");
						message.setSubject(" New order ");
						message.setTo(tamaarUserEmail);
						message.setFrom("customer.care@bestnest.in", "Tamaar Customer Email");
						message.setText(htmlContent, true /* isHtml */);
					}catch (Exception e) {
						System.out.println("Error while configuring email" + e);
					}
				}
			};
		}

		logger.info("Sending Email to Tamaar team... ");
		try {
			this.mailSender.send(preparators);
		} catch(Exception ex) {
			logger.error("Error while sending mails ", ex);
		}
	}

	private void sendEmailToClient(OrderVo orderVo, Context ctx) throws MessagingException {
		// Send to Client if he has provided the email..
		if(orderVo.getCustomerByCustomerIdVo().getEmail() != null) {
			// Prepare message using a Spring helper
			final MimeMessage mimeMessage = this.mailSender.createMimeMessage();
			final MimeMessageHelper message = new MimeMessageHelper(mimeMessage, "UTF-8");
			message.setSubject(" Tamaar -  Customer Care");
			try {
				message.setFrom("customer.care@bestnest.com", " Tamaar -  Customer Care");
			} catch (UnsupportedEncodingException ex) {
				logger.error(" Error while sending email to cient: ", ex);
			}
			message.setTo(orderVo.getCustomerByCustomerIdVo().getEmail());
			// Create the HTML body using Thymeleaf
			String htmlTemplate = this.templateEngine.process("email-for-client.html", ctx);
			message.setText(htmlTemplate, true /* isHtml */);

			// Send email
			this.mailSender.send(mimeMessage);
		}
	}


}
