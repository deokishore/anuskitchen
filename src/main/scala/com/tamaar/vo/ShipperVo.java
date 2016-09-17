package com.tamaar.vo;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.tamaar.model.Order;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Created by door3 on 22/11/2015.
 */
public class ShipperVo {

    private String shipperId;
    private String name;
    private BigDecimal price;

    public String getShipperId() {
        return shipperId;
    }

    public void setShipperId(String shipperId) {
        this.shipperId = shipperId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }


}
