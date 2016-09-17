package com.tamaar.vo;

import com.tamaar.shoppingcart.parser.OrderVo;

import java.util.HashSet;
import java.util.Set;

/**
 * Created by deokishore on 27/01/2016.
 */
public class PaymentDetailsVo {

    private Integer paymentDetailsId;
    private String nameOnCard;
    private String cardType;
    private String cardNumber;
    private String expiryYear;
    private String expiryMonth;
    private String securityNumber;
    private Set<OrderVo> orders = new HashSet(0);

    public Integer getPaymentDetailsId() {
        return paymentDetailsId;
    }

    public void setPaymentDetailsId(Integer paymentDetailsId) {
        this.paymentDetailsId = paymentDetailsId;
    }

    public String getNameOnCard() {
        return nameOnCard;
    }

    public void setNameOnCard(String nameOnCard) {
        this.nameOnCard = nameOnCard;
    }

    public String getCardType() {
        return cardType;
    }

    public void setCardType(String cardType) {
        this.cardType = cardType;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getExpiryYear() {
        return expiryYear;
    }

    public void setExpiryYear(String expiryYear) {
        this.expiryYear = expiryYear;
    }

    public String getExpiryMonth() {
        return expiryMonth;
    }

    public void setExpiryMonth(String expiryMonth) {
        this.expiryMonth = expiryMonth;
    }

    public String getSecurityNumber() {
        return securityNumber;
    }

    public void setSecurityNumber(String securityNumber) {
        this.securityNumber = securityNumber;
    }

    public Set<OrderVo> getOrders() {
        return orders;
    }

    public void setOrders(Set<OrderVo> orders) {
        this.orders = orders;
    }
}
