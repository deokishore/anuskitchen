package com.tamaar.controller;

import com.tamaar.model.ProductListVO;
import com.tamaar.service.ProductService;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import java.util.Locale;

@Controller
@RequestMapping(value = "/products")
public class ProductsController {

    @Autowired
    ProductService productService;

    @Value("5")
    private int maxResults;

    @Autowired
    private MessageSource messageSource;

	@RequestMapping(method = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
    public ModelAndView products(){
        return new ModelAndView("products");
    }

    @RequestMapping(method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity<?> listAll(Locale locale) {
        int page = 0;
        return createListAllResponse(page, locale);
    }

    private ResponseEntity<?> createListAllResponse(int page, Locale locale) {
        return createListAllResponse(page, locale, null);
    }

    private ResponseEntity<?> createListAllResponse(int page, Locale locale, String messageKey) {
        ProductListVO productListVO = listAll(page);

        addActionMessageToVO(productListVO, locale, messageKey, null);

        return returnListToUser(productListVO);
    }

    private ResponseEntity<ProductListVO> returnListToUser(ProductListVO contactList) {
        return new ResponseEntity<ProductListVO>(contactList, HttpStatus.OK);
    }

    private ProductListVO addActionMessageToVO(ProductListVO contactListVO, Locale locale, String actionMessageKey, Object[] args) {
        if (StringUtils.isEmpty(actionMessageKey)) {
            return contactListVO;
        }

        contactListVO.setActionMessage(messageSource.getMessage(actionMessageKey, args, null, locale));

        return contactListVO;
    }

    private ProductListVO listAll(int page) {
        //return new ProductListVO();
        return productService.findAll(page, maxResults);
    }

//    @RequestMapping(value = "/product", method = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
//    public ModelAndView product(){
//        return new ModelAndView("product");
//    }





}
