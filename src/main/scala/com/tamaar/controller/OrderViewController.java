package com.tamaar.controller;

import com.tamaar.service.OrderService;
import com.tamaar.shoppingcart.parser.OrderVo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
import java.util.Locale;

/**
 * Created by deokishore on 22/01/2016.
 */
@Controller
@RequestMapping("/")
public class OrderViewController {

    Logger logger = LoggerFactory.getLogger(OrderViewController.class);

    @Autowired
    OrderService orderService;

    @RequestMapping(value = "orderView", method = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
    public ModelAndView orderView(){
        return new ModelAndView("orderView");
    }

    /**
     * Returns line items from current shopping cart
     * @return list of ShoppingCartLineItem
     */
    @RequestMapping(value = "getOrderList", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity<?> getOrderList() {
        logger.debug("Retrieving Orders");
        List<OrderVo> orderVoList = orderService.findAll();
        return new ResponseEntity<List<OrderVo>>(orderVoList, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity<?> listAll(@RequestParam int page, Locale locale) {
        List<OrderVo> orderVoList = orderService.findAll();
        return new ResponseEntity<List<OrderVo>>(orderVoList, HttpStatus.OK);
    }
}
