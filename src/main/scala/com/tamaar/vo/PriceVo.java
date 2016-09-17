package com.tamaar.vo;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by door3 on 22/11/2015.
 */
public class PriceVo {

    private int priceId;
    private BigDecimal amount;
    private BigDecimal discount;


    public int getPriceId() {
        return priceId;
    }

    public void setPriceId(int priceId) {
        this.priceId = priceId;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public BigDecimal getDiscount() {
        return discount;
    }

    public void setDiscount(BigDecimal discount) {
        this.discount = discount;
    }
}
