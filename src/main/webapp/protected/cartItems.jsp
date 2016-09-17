<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<!-- Page Title
============================================= -->
<section id="page-title">
    <div class="container clearfix">
        <h1>CART</h1>
        <ol class="breadcrumb">
            <li><a href="index.html">Home</a>
            </li>
            <li><a href="products.html">Products</a>
            </li>
            <li class="active">Cart</li>
        </ol>
    </div>
</section>
<!-- #page-title end -->

<md-divider></md-divider>
<md-divider></md-divider>

<!-- Wrapper Start -->
<div id="wrapper" class="clearfix">
	<div class="container clearfix">
		<div id="container">

			<div id="processTabs">
				<ul class="process-steps process-5 clearfix">
					<li>
						<a href="#ptab1" class="i-bordered i-circled divcenter icon-shopping-cart"></a>
						<h5>Review Cart</h5>
					</li>
					<li>
						<a href="#ptab2" class="i-bordered i-circled divcenter icon-pencil2"></a>
						<h5>Enter Shipping Info</h5>
					</li>
					<li>
						<a href="#ptab3" class="i-bordered i-circled divcenter icon-pencil2"></a>
						<h5>Enter Billing Info</h5>
					</li>
					<li>
						<a href="#ptab4" class="i-bordered i-circled divcenter icon-money"></a>
						<h5>Payment Method</h5>
					</li>
					<li>
						<a href="#ptab5" class="i-bordered i-circled divcenter icon-like"></a>
						<h5>Order Complete</h5>
					</li>
				</ul>
			</div>
			<!-- Content Start  -->

			<section id="content">
				<div class="content-wrap">
					<div class="container clearfix">
						<div class="table-responsive bottommargin">
							<table class="table cart">
								<thead>
									<tr>
										<th class="cart-product-remove">&nbsp;</th>
										<th class="cart-product-thumbnail">&nbsp;</th>
										<th class="cart-product-name">Product</th>
										<th class="cart-product-price">Unit Price</th>
										<th class="cart-product-quantity">Quantity</th>
										<th class="cart-product-subtotal">Total</th>
									</tr>
								</thead>
								<tbody>
									<tr class="cart_item">
										<td class="cart-product-remove">
											<a href="#" class="remove" title="Remove this item">
												<i class="icon-trash2"></i>
											</a>
										</td>
										<td class="cart-product-thumbnail">
											<a href="#">
												<img width="64" height="64" src="/resources/images/gh/uploads/xNV150.jpg.pagespeed.ic.9ZcY10TY1d.jpg" alt="Anti Acne Cream">
												</a>
											</td>
											<td class="cart-product-name">
												<a href="#">Anti Acne Cream</a>
											</td>
											<td class="cart-product-price">
												<span class="amount">$19.99</span>
											</td>
											<td class="cart-product-quantity">
												<div class="quantity clearfix">
													<input type="button" value="-" class="minus">
														<input type="text" name="quantity" value="2" class="qty" />
														<input type="button" value="+" class="plus">
														</div>
													</td>
													<td class="cart-product-subtotal">
														<span class="amount">$39.98</span>
													</td>
												</tr>
												<tr class="cart_item">
													<td class="cart-product-remove">
														<a href="#" class="remove" title="Remove this item">
															<i class="icon-trash2"></i>
														</a>
													</td>
													<td class="cart-product-thumbnail">
														<a href="#">
															<img width="64" height="64" src="/resources/images/gh/uploads/xV144.gif.pagespeed.ic.e1Y4oHxRPo.jpg" alt="Anti Wrinkle Cream">
															</a>
														</td>
														<td class="cart-product-name">
															<a href="#">Anti Wrinkle Cream</a>
														</td>
														<td class="cart-product-price">
															<span class="amount">$24.99</span>
														</td>
														<td class="cart-product-quantity">
															<div class="quantity clearfix">
																<input type="button" value="-" class="minus">
																	<input type="text" name="quantity" value="1" class="qty" />
																	<input type="button" value="+" class="plus">
																	</div>
																</td>
																<td class="cart-product-subtotal">
																	<span class="amount">$24.99</span>
																</td>
															</tr>
															<tr class="cart_item">
																<td class="cart-product-remove">
																	<a href="#" class="remove" title="Remove this item">
																		<i class="icon-trash2"></i>
																	</a>
																</td>
																<td class="cart-product-thumbnail">
																	<a href="#">
																		<img width="64" height="64" src="/resources/images/gh/uploads/xV140.jpg.pagespeed.ic.-__3E2S3-8.jpg" alt="Skin Lightening Cream">
																		</a>
																	</td>
																	<td class="cart-product-name">
																		<a href="#">Skin Lightening Cream</a>
																	</td>
																	<td class="cart-product-price">
																		<span class="amount">$13.99</span>
																	</td>
																	<td class="cart-product-quantity">
																		<div class="quantity clearfix">
																			<input type="button" value="-" class="minus">
																				<input type="text" name="quantity" value="3" class="qty" />
																				<input type="button" value="+" class="plus">
																				</div>
																			</td>
																			<td class="cart-product-subtotal">
																				<span class="amount">$41.97</span>
																			</td>
																		</tr>
																		<tr class="cart_item">
																			<td colspan="6">
																				<div class="row clearfix">
																					<div class="col-md-4 col-xs-4 nopadding">
																						<div class="col-md-8 col-xs-7 nopadding">
																							<input type="text" value="" class="sm-form-control" placeholder="Enter Coupon Code.." />
																						</div>
																						<div class="col-md-4 col-xs-5">
																							<a href="#" class="button button-3d button-black nomargin">Apply Coupon</a>
																						</div>
																					</div>
																					<div class="col-md-8 col-xs-8 nopadding">
																						<a href="#" class="button button-3d nomargin fright">Update Cart</a>
																						<a href="/login" class="button button-3d notopmargin fright">Proceed to Checkout</a>
																					</div>
																				</div>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</div>
															<div class="row clearfix">
																<div class="col-md-6 clearfix">
																	<h4>Calculate Shipping</h4>
																	<form>
																		<div class="col_full">
																			<select class="sm-form-control">
																				<option value="AX">&#197;land Islands</option>
																				<option value="AF">Afghanistan</option>
																				<option value="AL">Albania</option>
																				<option value="DZ">Algeria</option>
																				<option value="AD">Andorra</option>
																				<option value="AO">Angola</option>
																				<option value="AI">Anguilla</option>
																			</select>
																		</div>
																		<div class="col_half">
																			<input type="text" class="sm-form-control" placeholder="State / Country" />
																		</div>
																		<div class="col_half col_last">
																			<input type="text" class="sm-form-control" placeholder="PostCode / Zip" />
																		</div>
																		<a href="#" class="button button-3d nomargin button-black">Update Totals</a>
																	</form>
																</div>
																<div class="col-md-6 clearfix">
																	<div class="table-responsive">
																		<h4>Cart Totals</h4>
																		<table class="table cart">
																			<tbody>
																				<tr class="cart_item">
																					<td class="cart-product-name">
																						<strong>Cart Subtotal</strong>
																					</td>
																					<td class="cart-product-name">
																						<span class="amount">$106.94</span>
																					</td>
																				</tr>
																				<tr class="cart_item">
																					<td class="cart-product-name">
																						<strong>Shipping</strong>
																					</td>
																					<td class="cart-product-name">
																						<span class="amount">Free Delivery</span>
																					</td>
																				</tr>
																				<tr class="cart_item">
																					<td class="cart-product-name">
																						<strong>Total</strong>
																					</td>
																					<td class="cart-product-name">
																						<span class="amount color lead">
																							<strong>$106.94</strong>
																						</span>
																					</td>
																				</tr>
																			</tbody>
																		</table>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</section>
												<!-- #content end -->
											</div>
										</div>
										<!-- Home Page Diamond Content End -->
										<!--main page how it works Start-->
										<section id="homepage">
											<div class="container"></div>
										</section>
										<!--main page how it works End-->
</div>
<!-- Wrapper end -->


<!-- Go To Top  -->
<div id="gotoTop" class="icon-angle-up"></div>


<script type="text/javascript" src="/resources/js/functions.js"></script>