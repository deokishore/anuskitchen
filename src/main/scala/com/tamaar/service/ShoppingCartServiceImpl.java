package com.tamaar.service;



import com.tamaar.shoppingcart.ShoppingCart;
import com.tamaar.shoppingcart.ShoppingCartLineItem;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Service class exposes methods to perform Shopping cart activites
 * @author ddakshna
 *
 */
@Service
public class ShoppingCartServiceImpl implements ShoppingCartService {
	Logger logger = LoggerFactory.getLogger(ShoppingCartServiceImpl.class);

	@Autowired
	ShoppingCart shoppingCart;

	/**
	 * Adds line item to shopping cart
	 */
	@Override
	public ShoppingCart addShoppingCartLineItem(ShoppingCartLineItem shoppingCartLineItem) {
		shoppingCart.addLineItem(shoppingCartLineItem);
		return shoppingCart;
	}

	/**
	 * Returns current shopping cart
	 */
	@Override
	public ShoppingCart getShoppingCart() {
		return shoppingCart;
	}

}
