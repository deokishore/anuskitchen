package com.tamaar.service;


import com.tamaar.shoppingcart.ShoppingCart;
import com.tamaar.shoppingcart.ShoppingCartLineItem;

public interface ShoppingCartService {

    ShoppingCart addShoppingCartLineItem(ShoppingCartLineItem shoppingCartLineItem);

    ShoppingCart getShoppingCart();
}

