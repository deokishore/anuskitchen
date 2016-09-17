package com.tamaar.controller;


import com.tamaar.service.CheckoutService;
import com.tamaar.service.ProductService;
import com.tamaar.service.ShoppingCartService;
import com.tamaar.shoppingcart.ShoppingCart;
import com.tamaar.shoppingcart.ShoppingCartLineItem;
import com.tamaar.vo.ProductVo;
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

import javax.servlet.http.HttpSession;

/**
 * Controller class exposes services for shopping cart
 *
 * @author ddakshna
 *
 */
@Controller
@Scope("session")
@RequestMapping("/")
public class ShoppingCartController {

    Logger logger = LoggerFactory.getLogger(ShoppingCartController.class);

    @Autowired
    ShoppingCartService shoppingCartService;

    @Autowired
    ProductService productService;

    @Autowired
    CheckoutService checkoutService;

    private ShoppingCart shoppingCart = new ShoppingCart();

    /**
     * Returns line items from current shopping cart
     * @return list of ShoppingCartLineItem
     */
    @RequestMapping("viewCart")
    public ResponseEntity<?> viewShoppingCart(HttpSession session) {
        logger.debug("Retrieving cart");
        if(session.getAttribute("shoppingCart") ==null) {
            session.setAttribute("shoppingCart", shoppingCart);
        } else  {
            shoppingCart = (ShoppingCart) session.getAttribute("shoppingCart");
        }
        return new ResponseEntity<ShoppingCart>(shoppingCart, HttpStatus.OK);
    }


    @RequestMapping(value = "addProductToCart", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<?> addProductToCart(@RequestBody ShoppingCartLineItem shoppingCartLineItem, HttpSession session) {
        shoppingCart = (ShoppingCart) session.getAttribute("shoppingCart");
        shoppingCart.addLineItem(shoppingCartLineItem);
        return new ResponseEntity<ShoppingCart>(shoppingCart, HttpStatus.OK);
    }

    @RequestMapping(value = "addProductQuantity", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<?> addProductQuantity(@RequestBody ShoppingCartLineItem shoppingCartLineItem, HttpSession session) {
        shoppingCart = (ShoppingCart) session.getAttribute("shoppingCart");

        for (ShoppingCartLineItem scli : shoppingCart.getLineItems()) {
            if(scli.getProductVo().getProductId().equals(shoppingCartLineItem.getProductVo().getProductId())){
                scli.setQuantity(shoppingCartLineItem.getQuantity());
                scli.setTotalCost(scli.getQuantity() * scli.getProductVo().getPriceVo().getAmount().doubleValue());
                shoppingCart.setSubTotalCost(shoppingCart.getSubTotalCost() + scli.getTotalCost());
                break;
            }
        }
        return new ResponseEntity<ShoppingCart>(shoppingCart, HttpStatus.OK);
    }


    @RequestMapping(value = "removeProductFromCart", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<?> removeProductFromCart(@RequestBody ShoppingCartLineItem shoppingCartLineItem, HttpSession session) {
        shoppingCart = (ShoppingCart) session.getAttribute("shoppingCart");
        shoppingCart.removeLineItem(shoppingCartLineItem.getProductVo().getProductId());
        return new ResponseEntity<ShoppingCart>(shoppingCart, HttpStatus.OK);
    }


}

