package com.tamaar.shoppingcart;

import com.tamaar.vo.ProductVo;
import org.codehaus.jackson.annotate.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown=true)
public class InvoiceFileLineItem extends FileLineItem {

	private static final long serialVersionUID = -849452122196249067L;
	private int quantity;
	private boolean imported;
	private String productDescription;
	private double amount;

	public InvoiceFileLineItem(int quantity, boolean imported, String productDescription, double amount) {
		super();
		this.quantity = quantity;
		this.imported = imported;
		this.productDescription = productDescription;
		this.amount = amount;
	}

	public int getQuantity() {
		return quantity;
	}

	public boolean isImported() {
		return imported;
	}


	public String getProductDescription() {
		return productDescription;
	}

	public double getAmount() {
		return amount;
	}

	public ShoppingCartLineItem toShoppingCartLineItem() {
		return new ShoppingCartLineItemAdapter().convert(this);
	}

	public class ShoppingCartLineItemAdapter {

		public ShoppingCartLineItem convert(InvoiceFileLineItem invoiceFileLineItem) {
			ShoppingCartLineItem shoppingCartLineItem = new ShoppingCartLineItem();


			ProductVo productVo = new ProductVo();
			productVo.setDescription(invoiceFileLineItem.getProductDescription());
			//product.setPrice(priceVo);

			shoppingCartLineItem.setProductVo(productVo);
			shoppingCartLineItem.setQuantity(invoiceFileLineItem.getQuantity());
			return shoppingCartLineItem;
		}

	}

}
