package com.tamaar.model;// default package
// Generated Jan 17, 2016 1:12:59 PM by Hibernate Tools 3.4.0.CR1

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * Howtouse generated by hbm2java
 */
@Entity
@Table(name = "howtouse", catalog = "ozuygqof_tamaar")
public class Howtouse implements java.io.Serializable {

	private int howtouseId;
	private Product product;
	private String key;
	private String value;

	public Howtouse() {
	}

	public Howtouse(int howtouseId) {
		this.howtouseId = howtouseId;
	}

	public Howtouse(int howtouseId, Product product, String key, String value) {
		this.howtouseId = howtouseId;
		this.product = product;
		this.key = key;
		this.value = value;
	}

	@Id
	@Column(name = "howtouse_id", unique = true, nullable = false)
	public int getHowtouseId() {
		return this.howtouseId;
	}

	public void setHowtouseId(int howtouseId) {
		this.howtouseId = howtouseId;
	}

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "product_id")
	public Product getProduct() {
		return this.product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	@Column(name = "key", length = 45)
	public String getKey() {
		return this.key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	@Column(name = "value", length = 100)
	public String getValue() {
		return this.value;
	}

	public void setValue(String value) {
		this.value = value;
	}

}
