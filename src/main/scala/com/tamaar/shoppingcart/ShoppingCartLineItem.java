package com.tamaar.shoppingcart;

import com.tamaar.vo.ProductVo;
import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.ToStringBuilder;
import org.codehaus.jackson.annotate.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown=true)
public class ShoppingCartLineItem {

	private ProductVo productVo;
	private int quantity;
	private double totalCost;

	public ProductVo getProductVo() {
		return productVo;
	}

	public void setProductVo(ProductVo productVo) {
		this.productVo = productVo;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public double getTotalCost() {
		return totalCost;
	}

	public void setTotalCost(double totalCost) {
		this.totalCost = totalCost;
	}

    public double calculateTotalPrice() {
        return this.getQuantity() * this.getProductVo().getPriceVo().getAmount().doubleValue();
    }

	public double calculateTaxRate() {
		return 0;
	}

	@Override
	public boolean equals(Object obj) {
		return this.productVo.getProductId().equals(((ShoppingCartLineItem) obj).getProductVo().getProductId());
	}

	@Override
	public String toString() {
		return ToStringBuilder.reflectionToString(this);
	}
}
