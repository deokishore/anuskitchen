package com.tamaar.shoppingcart;

import com.tamaar.shoppingcart.parser.OrderVo;
import com.tamaar.util.NumberUtils;
import com.tamaar.vo.LoginResponse;
import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@Component
@JsonIgnoreProperties(ignoreUnknown=true)
public class ShoppingCart {

    private List<ShoppingCartLineItem> lineItems;

    private OrderVo orderVo = new OrderVo();

    private LoginResponse loginResponse = new LoginResponse();


    private double subTotalCost;

    public ShoppingCart() {
        lineItems = new CopyOnWriteArrayList<ShoppingCartLineItem>();
    }

    public void addLineItem(ShoppingCartLineItem lineItem) {
        if(!lineItems.contains(lineItem)) {
            lineItems.add(lineItem);
            subTotalCost = NumberUtils.round(subTotalCost + lineItem.calculateTotalPrice());
        }
    }

    public void removeLineItem(String productId) {
        ShoppingCartLineItem shoppingCartLineItem = null;
        for (ShoppingCartLineItem scli : lineItems) {
            if(scli.getProductVo().getProductId().equals(productId)){
                shoppingCartLineItem = scli;
                break;
            }
        }
        lineItems.remove(shoppingCartLineItem);
    }

    public List<ShoppingCartLineItem> getLineItems() {
        return lineItems;
    }

    public void setLineItems(List<ShoppingCartLineItem> lineItems) {
        this.lineItems = lineItems;
    }

    public void clear() {
        subTotalCost = 0.0;
        lineItems.clear();
    }

    public OrderVo getOrderVo() {
        return orderVo;
    }

    public void setOrderVo(OrderVo orderVo) {
        this.orderVo = orderVo;
    }

    public LoginResponse getLoginResponse() {
        return loginResponse;
    }

    public void setLoginResponse(LoginResponse loginResponse) {
        this.loginResponse = loginResponse;
    }

    public double getSubTotalCost() {
        return subTotalCost;
    }

    public void setSubTotalCost(double subTotalCost) {
        this.subTotalCost = subTotalCost;
    }
}
