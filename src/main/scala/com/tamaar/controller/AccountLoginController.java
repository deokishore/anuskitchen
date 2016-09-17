package com.tamaar.controller;

import com.tamaar.service.CheckoutService;
import com.tamaar.service.CustomerService;
import com.tamaar.service.OrderService;
import com.tamaar.shoppingcart.ShoppingCart;
import com.tamaar.shoppingcart.parser.OrderVo;
import com.tamaar.util.Constant;
import com.tamaar.vo.AddressVo;
import com.tamaar.vo.CustomerVo;
import com.tamaar.vo.LoginResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
@RequestMapping(value = "/accountLogin")
public class AccountLoginController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AccountLoginController.class);

    @Autowired
    OrderService orderService;

    @Autowired
    CustomerService customerService;

    @Autowired
    private CheckoutService checkoutService;

	@RequestMapping(method = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
    public ModelAndView accountLogin(){
        return new ModelAndView("accountLogin");
    }

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public @ResponseBody
    LoginResponse login(@RequestBody CustomerVo customerVo, HttpSession session) {
        ShoppingCart shoppingCart = (ShoppingCart)session.getAttribute(Constant.SHOPPING_CART);
        LoginResponse response = shoppingCart.getLoginResponse();
        try {
            customerVo.setAddressVo(new AddressVo());
            List<CustomerVo> cvoList = customerService.isValidUser(customerVo);
            if(cvoList != null && cvoList.size() > 0) {
                    CustomerVo custVo = cvoList.get(0);

                    if(custVo.getRole() != null && custVo.getRole().equals("Admin")) {
                        if(shoppingCart.getLineItems().size() > 0) {
                            OrderVo orderVoNew = checkoutService.saveNewOrder(shoppingCart);
                            shoppingCart.setOrderVo(orderVoNew);
                        }
                        shoppingCart.getOrderVo().setCustomerByCustomerIdVo(custVo);
                        response.setPageToForward("accountLogin/admin");
                    } else if(custVo.getRole() != null && custVo.getRole().equals("Customer")) {
                        if(shoppingCart.getLineItems().size() > 0) {
                            OrderVo orderVoNew = checkoutService.saveNewOrder(shoppingCart);
                            shoppingCart.setOrderVo(orderVoNew);
                        }
                        shoppingCart.getOrderVo().setCustomerByCustomerIdVo(custVo);
                        response.setPageToForward("checkout/billingDeliveryInfo");
                    }
                response.setSessionId("Unique Generated Session ID");
                response.setStatus("OK");
            } else {
                response.setSessionId(null);
                response.setStatus("Invalid user/password combination");
            }
        } catch(Exception ex) {
            ex.printStackTrace();
            LOGGER.error(" Error while login ", ex);
        }
        return response;
    }

    @RequestMapping(value = "/logout", method = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
    public ModelAndView logout(HttpSession session){
        ShoppingCart shoppingCart = (ShoppingCart)session.getAttribute(Constant.SHOPPING_CART);
        LoginResponse response = shoppingCart.getLoginResponse();
        shoppingCart.getOrderVo().setCustomerByCustomerIdVo(null);
        response.setSessionId(null);
        response.setStatus("");
        return new ModelAndView("/");
    }

    @RequestMapping(value = "/admin", method = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
    public ModelAndView products(){
        return new ModelAndView("admin");
    }

}
