package com.tamaar.model;// default package
// Generated Jan 17, 2016 1:12:59 PM by Hibernate Tools 3.4.0.CR1

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import static javax.persistence.GenerationType.IDENTITY;

/**
 * OrderDetail generated by hbm2java
 */
@Entity
@Table(name = "order_detail", catalog = "ozuygqof_tamaar")
public class OrderDetail implements java.io.Serializable {

	private int orderDetailId;
	private Product product;
	private Order order;
	private String quantity;
	private String discount;
	private String unitPrice;
	private String totalPrice;

	public OrderDetail() {
	}

	public OrderDetail(int orderDetailId) {
		this.orderDetailId = orderDetailId;
	}

	public OrderDetail(int orderDetailId, Product product, Order order,
			String quantity, String discount, String unitPrice,
			String totalPrice) {
		this.orderDetailId = orderDetailId;
		this.product = product;
		this.order = order;
		this.quantity = quantity;
		this.discount = discount;
		this.unitPrice = unitPrice;
		this.totalPrice = totalPrice;
	}

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "order_detail_id", unique = true, nullable = false)
	public int getOrderDetailId() {
		return this.orderDetailId;
	}

	public void setOrderDetailId(int orderDetailId) {
		this.orderDetailId = orderDetailId;
	}

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "product_id")
	public Product getProduct() {
		return this.product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "order_id")
	public Order getOrder() {
		return this.order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	@Column(name = "quantity", length = 45)
	public String getQuantity() {
		return this.quantity;
	}

	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}

	@Column(name = "discount", length = 45)
	public String getDiscount() {
		return this.discount;
	}

	public void setDiscount(String discount) {
		this.discount = discount;
	}

	@Column(name = "unit_price", length = 45)
	public String getUnitPrice() {
		return this.unitPrice;
	}

	public void setUnitPrice(String unitPrice) {
		this.unitPrice = unitPrice;
	}

	@Column(name = "total_price", length = 45)
	public String getTotalPrice() {
		return this.totalPrice;
	}

	public void setTotalPrice(String totalPrice) {
		this.totalPrice = totalPrice;
	}

}
