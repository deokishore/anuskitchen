package com.tamaar.shoppingcart.parser;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.Assert;

import java.util.List;

public abstract class AbstractDataParser<T> {
	Logger logger = LoggerFactory.getLogger(AbstractDataParser.class);
	protected List<String> lines;

	public AbstractDataParser(List<String> lines) {
		Assert.notEmpty(lines, "File should contain valid data and must be not-null");
		this.lines = lines;
	}

	public List<T> parseData() {
		logger.info("Parsing "+lines.size() +" lines");
		return parse();
	}

	protected abstract List<T> parse();
}
