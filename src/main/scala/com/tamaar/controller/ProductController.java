package com.tamaar.controller;

import com.tamaar.model.ProductListVO;
import com.tamaar.service.ProductService;
import com.tamaar.shoppingcart.ShoppingCartLineItem;
import com.tamaar.vo.ProductVo;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import java.util.Locale;

@Controller
@RequestMapping(value = "/product")
public class ProductController {

    @Autowired
    ProductService productService;

	@RequestMapping(method = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
    public ModelAndView products(@RequestParam String productId, ModelMap model){
        model.addAttribute("productId", productId);
        return new ModelAndView("product");
    }

    @RequestMapping(method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity<?> findProduct(@RequestParam String productId) {
        return new ResponseEntity<ShoppingCartLineItem>(productService.find(productId), HttpStatus.OK);
    }


}
