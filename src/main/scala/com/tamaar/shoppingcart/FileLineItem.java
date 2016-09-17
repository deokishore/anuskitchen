package com.tamaar.shoppingcart;

import org.apache.commons.lang.builder.ToStringBuilder;
import org.codehaus.jackson.annotate.JsonIgnoreProperties;

import java.io.Serializable;

@JsonIgnoreProperties(ignoreUnknown=true)
public class FileLineItem implements Serializable {

	private static final long serialVersionUID = 5104980509918667304L;

	@Override
	public String toString() {
		return ToStringBuilder.reflectionToString(this);
	}
}
