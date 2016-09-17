package com.tamaar.model;

import com.tamaar.vo.ProductVo;

import java.util.List;

/**
 * Created by door3 on 08/11/2015.
 */
public class ProductListVO {

    private int pagesCount;
    private long totalContacts;
    private String actionMessage;
    private String searchMessage;

    private List<ProductVo> products;

    public ProductListVO() {
    }

    public ProductListVO(int pagesCount,  long totalProducts, List<ProductVo> products) {
        this.pagesCount = pagesCount;
        this.totalContacts = totalContacts;
        this.products = products;
    }

    public int getPagesCount() {
        return pagesCount;
    }

    public void setPagesCount(int pagesCount) {
        this.pagesCount = pagesCount;
    }

    public long getTotalContacts() {
        return totalContacts;
    }

    public void setTotalContacts(long totalContacts) {
        this.totalContacts = totalContacts;
    }

    public String getActionMessage() {
        return actionMessage;
    }

    public void setActionMessage(String actionMessage) {
        this.actionMessage = actionMessage;
    }

    public String getSearchMessage() {
        return searchMessage;
    }

    public void setSearchMessage(String searchMessage) {
        this.searchMessage = searchMessage;
    }

    public List<ProductVo> getProducts() {
        return products;
    }

    public void setProducts(List<ProductVo> products) {
        this.products = products;
    }
}
