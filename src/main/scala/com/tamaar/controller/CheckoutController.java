package com.tamaar.controller;

import com.tamaar.service.CheckoutService;
import com.tamaar.service.CustomerService;
import com.tamaar.service.EmailService;
import com.tamaar.service.ShipperService;
import com.tamaar.shoppingcart.ShoppingCart;
import com.tamaar.shoppingcart.parser.OrderVo;
import com.tamaar.vo.CustomerVo;
import com.tamaar.vo.ShipperVo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.mail.MessagingException;
import javax.servlet.http.HttpSession;
import java.util.List;

/**
 * Created by deokishore on 06/12/2015.
 */
@Controller
@Scope("session")
@RequestMapping(value = "/checkout")
public class CheckoutController {

    Logger logger = LoggerFactory.getLogger(CheckoutController.class);

    @Autowired
    private CheckoutService checkoutService;

    @Autowired
    ShipperService shipperService;

    @Autowired
    CustomerService customerService;

    @Autowired
    EmailService emailService;

    private ShoppingCart shoppingCart;

    @RequestMapping(value = "userRegistration", method = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
    public ModelAndView userRegistration(@RequestParam(value = "isGuest", required = false) String isGuest,  HttpSession session){
        //ShoppingCart shoppingCart = (ShoppingCart)session.getAttribute("shoppingCart");
        //shoppingCart.getLoginResponse().setIsGuest(Boolean.valueOf(isGuest));
        return new ModelAndView("userRegistration");
    }

    @RequestMapping(value = "personalDetails", method = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
    public ModelAndView personalDetails(@RequestParam(value = "isGuest", required = false) String isGuest,  HttpSession session){
        //ShoppingCart shoppingCart = (ShoppingCart)session.getAttribute("shoppingCart");
        //shoppingCart.getLoginResponse().setIsGuest(Boolean.valueOf(isGuest));
        return new ModelAndView("personalDetails");
    }

    @RequestMapping(value = "paymentOption", method = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
    public ModelAndView paymentOption(@RequestParam(value = "isGuest", required = false) String isGuest,  HttpSession session){
        //ShoppingCart shoppingCart = (ShoppingCart)session.getAttribute("shoppingCart");
        //shoppingCart.getLoginResponse().setIsGuest(Boolean.valueOf(isGuest));
        return new ModelAndView("paymentOption");
    }

    @RequestMapping(value = "customerRegistration", method = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
    public ModelAndView customerRegistration(@RequestParam("isGuest") String isGuest, HttpSession session){
        ShoppingCart shoppingCart = (ShoppingCart)session.getAttribute("shoppingCart");
        shoppingCart.getLoginResponse().setIsGuest(Boolean.valueOf(isGuest));
        return new ModelAndView("customerRegistration");
    }

    @RequestMapping(value="clearOutShoppingCart", method = RequestMethod.GET, produces = "application/json")
    public  ResponseEntity<?>  clearOutShoppingCart(HttpSession session) {
        shoppingCart = new ShoppingCart();
        session.setAttribute("shoppingCart", shoppingCart);
        return new ResponseEntity<ShoppingCart>(shoppingCart, HttpStatus.OK);
    }

    @RequestMapping(value="createNewOrderForExistingCustomer", method = RequestMethod.POST, produces = "application/json")
    public  ResponseEntity<?>  createNewOrderForExistingCustomer(@RequestBody ShoppingCart shoppingCart, HttpSession session) {

        if(shoppingCart.getOrderVo().getCustomerByCustomerIdVo().getEmail() != null) {
            CustomerVo validUser = customerService.isValidUser(shoppingCart.getOrderVo().getCustomerByCustomerIdVo().getEmail());
            if (validUser != null){
                shoppingCart.getLoginResponse().setEmailExist(true);
                OrderVo orderVo = checkoutService.saveNewOrder(shoppingCart);
                if(orderVo.getCustomerByDeliveryCustomerIdVo() == null) {
                    shoppingCart.getOrderVo().setCustomerByDeliveryCustomerIdVo(orderVo.getCustomerByCustomerIdVo());
                }

                if(orderVo.getCustomerByBillingCustomerIdVo() == null) {
                    shoppingCart.getOrderVo().setCustomerByBillingCustomerIdVo(orderVo.getCustomerByCustomerIdVo());
                }

                shoppingCart.setOrderVo(orderVo);
                shoppingCart.getLoginResponse().setStatus("OK");

                session.setAttribute("shoppingCart", shoppingCart);

                return new ResponseEntity<ShoppingCart>(shoppingCart, HttpStatus.OK);
            }
        }
        return null;
    }

    @RequestMapping(value="createNewOrder", method = RequestMethod.POST, produces = "application/json")
    public  ResponseEntity<?>  createNewOrder(@RequestBody ShoppingCart shoppingCart, HttpSession session) {

        if(shoppingCart.getOrderVo().getCustomerByCustomerIdVo().getEmail() != null) {
            CustomerVo validUser = customerService.isValidUser(shoppingCart.getOrderVo().getCustomerByCustomerIdVo().getEmail());
            if (validUser != null){
                shoppingCart.getLoginResponse().setEmailExist(true);
                return new ResponseEntity<ShoppingCart>(shoppingCart, HttpStatus.OK);
            }
        }

        OrderVo orderVo = checkoutService.saveNewOrder(shoppingCart);

        if(orderVo.getCustomerByDeliveryCustomerIdVo() == null) {
            shoppingCart.getOrderVo().setCustomerByDeliveryCustomerIdVo(orderVo.getCustomerByCustomerIdVo());
        }

        if(orderVo.getCustomerByBillingCustomerIdVo() == null) {
            shoppingCart.getOrderVo().setCustomerByBillingCustomerIdVo(orderVo.getCustomerByCustomerIdVo());
        }

        shoppingCart.setOrderVo(orderVo);
        shoppingCart.getLoginResponse().setStatus("OK");

        session.setAttribute("shoppingCart", shoppingCart);
        return new ResponseEntity<ShoppingCart>(shoppingCart, HttpStatus.OK);
    }

    @RequestMapping(value="createDeliveryAddress", method = RequestMethod.POST, produces = "application/json")
    public  ResponseEntity<?>  createDeliveryAddress(@RequestBody ShoppingCart shoppingCart, HttpSession session) {
        checkoutService.saveCustomer(shoppingCart.getOrderVo().getCustomerByDeliveryCustomerIdVo());
        session.setAttribute("shoppingCart", shoppingCart);
        return new ResponseEntity<ShoppingCart>(HttpStatus.OK);
    }

    @RequestMapping(value = "updateDeliveryCustomer", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<?> updateDeliveryCustomer(@RequestBody ShoppingCart shoppingCart, HttpSession session) {
        OrderVo orderVo = checkoutService.updateDeliveryCustomer(shoppingCart.getOrderVo());
        shoppingCart.setOrderVo(orderVo);
        session.setAttribute("shoppingCart", shoppingCart);
        return new ResponseEntity<ShoppingCart>(shoppingCart, HttpStatus.OK);
    }

    @RequestMapping(value="updateBillingCustomer", method = RequestMethod.POST, produces = "application/json")
    public  ResponseEntity<?>  updateBillingAddress(@RequestBody ShoppingCart shoppingCart, HttpSession session) {
        OrderVo orderVo = checkoutService.updateBillingCustomer(shoppingCart.getOrderVo());
        shoppingCart.setOrderVo(orderVo);
        session.setAttribute("shoppingCart", shoppingCart);
        return new ResponseEntity<ShoppingCart>(shoppingCart, HttpStatus.OK);
    }

    @RequestMapping(value="createDeliveryToBillingAddress", method = RequestMethod.POST, produces = "application/json")
    public  ResponseEntity<?>  createDeliveryToBillingAddress(@RequestBody ShoppingCart shoppingCart, HttpSession session) {
        OrderVo orderVo = checkoutService.makeDeliveryToBillingAddress(shoppingCart.getOrderVo());
        shoppingCart.setOrderVo(orderVo);
        session.setAttribute("shoppingCart", shoppingCart);
        return new ResponseEntity<ShoppingCart>(shoppingCart, HttpStatus.OK);
    }

    @RequestMapping(value = "deleteBillingCustomer", method = RequestMethod.DELETE, produces = "application/json")
    public ResponseEntity<?> deleteBillingCustomer(HttpSession session) {
        shoppingCart = (ShoppingCart) session.getAttribute("shoppingCart");
        OrderVo orderVo = checkoutService.delete(shoppingCart.getOrderVo());
        shoppingCart.setOrderVo(orderVo);
        session.setAttribute("shoppingCart", shoppingCart);
        return new ResponseEntity<ShoppingCart>(shoppingCart, HttpStatus.OK);
    }

    @RequestMapping(value = "checkoutPostage", method = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
    public ModelAndView checkoutPostage(HttpSession session){
        shoppingCart = (ShoppingCart) session.getAttribute("shoppingCart");

        if(shoppingCart.getOrderVo().getOrderId() == null &&  shoppingCart.getOrderVo().getCustomerByCustomerIdVo().getEmail() != null) {
            CustomerVo validUser = customerService.isValidUser(shoppingCart.getOrderVo().getCustomerByCustomerIdVo().getEmail());
            if (validUser != null){
                shoppingCart.getLoginResponse().setEmailExist(true);
                OrderVo orderVo = checkoutService.saveNewOrder(shoppingCart);
                if(orderVo.getCustomerByDeliveryCustomerIdVo() == null) {
                    shoppingCart.getOrderVo().setCustomerByDeliveryCustomerIdVo(orderVo.getCustomerByCustomerIdVo());
                }

                if(orderVo.getCustomerByBillingCustomerIdVo() == null) {
                    shoppingCart.getOrderVo().setCustomerByBillingCustomerIdVo(orderVo.getCustomerByCustomerIdVo());
                }

                shoppingCart.setOrderVo(orderVo);
                shoppingCart.getLoginResponse().setStatus("OK");

                session.setAttribute("shoppingCart", shoppingCart);

            }
        }

        return new ModelAndView("checkoutPostage");
    }

    @RequestMapping(value = "getShipperList", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity<List<ShipperVo>> getShipperList() {
        List<ShipperVo> shipperVoList = shipperService.findAll();
        return new ResponseEntity<List<ShipperVo>>(shipperVoList, HttpStatus.OK);
    }

    @RequestMapping(value="setShipper", method = RequestMethod.POST)
    public  ResponseEntity<?>  setShipper(@RequestBody ShoppingCart shoppingCart, HttpSession session) {
        OrderVo orderVo = checkoutService.saveShipper(shoppingCart.getOrderVo());
        shoppingCart.setOrderVo(orderVo);
        session.setAttribute("shoppingCart", shoppingCart);
        return new ResponseEntity<ShoppingCart>(shoppingCart, HttpStatus.OK);
    }

    @RequestMapping(value = "paymentMethod", method = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
    public ModelAndView paymentMethod(){
        return new ModelAndView("paymentMethod");
    }

    @RequestMapping(value="validatePaymentMethod", method = RequestMethod.POST)
    public  ResponseEntity<?> validatePaymentMethod(@RequestBody ShoppingCart shoppingCart, HttpSession session) {
        OrderVo orderVo = checkoutService.savePaymentDetails(shoppingCart);
        shoppingCart.setOrderVo(orderVo);
        session.setAttribute("shoppingCart", shoppingCart);
        return new ResponseEntity<ShoppingCart>(shoppingCart, HttpStatus.OK);
    }

    @RequestMapping(value = "reviewAndOrder", method = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
    public ModelAndView reviewAndOrder(){
        return new ModelAndView("reviewAndOrder");
    }

    @RequestMapping(value = "checkoutStatus", method = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
    public ModelAndView checkoutStatus(HttpSession session){
        shoppingCart = (ShoppingCart) session.getAttribute("shoppingCart");
        try {
            if(shoppingCart.getOrderVo() != null && shoppingCart.getOrderVo().getOrderId() != null) {
                OrderVo orderVo = checkoutService.getOrdeFromDB(shoppingCart.getOrderVo().getOrderId());
                emailService.sendClientEMail(orderVo);
            }
        } catch (MessagingException ex) {
            logger.error(" Error while sending email : " + ex);
        }
        return new ModelAndView("checkoutStatus");
    }

    @RequestMapping(value = "billingDeliveryInfo", method = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
    public ModelAndView billingDeliveryInfo(){
        return new ModelAndView("billingDeliveryInfo");
    }
}
