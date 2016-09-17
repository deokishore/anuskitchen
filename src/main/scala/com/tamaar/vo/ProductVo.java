package com.tamaar.vo;

import com.tamaar.model.Howtouse;
import com.tamaar.model.Ingredient;
import com.tamaar.model.OrderDetail;
import com.tamaar.model.Price;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Created by door3 on 22/11/2015.
 */
public class ProductVo {

    private String productId;
    private PriceVo priceVo;
    private String description;
    private String available;
    private String imagePath;
    private BigDecimal size;

    private Set<OrderDetailVo> orderDetails = new HashSet(0);
    private Set<IngredientVo> ingredients = new HashSet(0);
    private Set<HowtouseVo> howtouses = new HashSet(0);

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public PriceVo getPriceVo() {
        return priceVo;
    }

    public void setPriceVo(PriceVo priceVo) {
        this.priceVo = priceVo;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAvailable() {
        return available;
    }

    public void setAvailable(String available) {
        this.available = available;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    public Set<OrderDetailVo> getOrderDetails() {
        return orderDetails;
    }

    public void setOrderDetails(Set<OrderDetailVo> orderDetails) {
        this.orderDetails = orderDetails;
    }

    public Set<IngredientVo> getIngredients() {
        return ingredients;
    }

    public void setIngredients(Set<IngredientVo> ingredients) {
        this.ingredients = ingredients;
    }

    public Set<HowtouseVo> getHowtouses() {
        return howtouses;
    }

    public void setHowtouses(Set<HowtouseVo> howtouses) {
        this.howtouses = howtouses;
    }

    public BigDecimal getSize() {
        return size;
    }

    public void setSize(BigDecimal size) {
        this.size = size;
    }
}
