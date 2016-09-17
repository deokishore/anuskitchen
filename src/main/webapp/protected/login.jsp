<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>


<link href="<c:url value='/resources/css/floating/pricing/pricing-overview.min.css'/>" rel="stylesheet"/>
<script src="<c:url value='/resources/js/form.js' />"></script>

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

    <!-- Content Start  -->
    <section id="content">
        <div class="content-wrap">
            <div class="container clearfix">

               <div ng-controller="AppCtrl" layout="column" ng-cloak=""  ng-app="MyApp">


                        <div class="section-number-wrapper">
                           <h3>Login</h3>
                        </div>

                        <div class="row">
                           <div class="large-11 columns small-centered">

                              <div class="quote-details-wrapper">
                                 <form name="contact-form" method="post">

                                    <div layout-gt-sm="row">
                                       <md-input-container class="md-block" flex-gt-sm>
                                          <label>user Id</label>
                                          <input required="" name="password" ng-model="project.password"/>

                                          <div ng-messages="projectForm.password.$error">
                                             <div ng-message="required">Password is required.</div>
                                          </div>
                                       </md-input-container>
                                    </div>


                                    <div layout-gt-sm="row">
                                       <md-input-container class="md-block" flex-gt-sm>
                                          <label>Password</label>
                                          <input name="password" type="password" ng-model="project.password" required/>

                                          <div ng-messages="projectForm.password.$error">
                                             <div ng-message="required">Password is required.</div>
                                          </div>
                                       </md-input-container>
                                    </div>

                                    <div class="form-group">
                                       <button type="submit" name="submit" class="button button-3d notopmargin fright" required="required">Login</button>
                                       <button type="reset" name="reset" class="button button-3d notopmargin fright" required="required">Reset</button>
                                    </div>
                                 </form>
                              </div>

                              <div class="quote-form-wrapper">
                                    <div class="row contact-wrap">
                                          <form id="main-contact-form" class="contact-form" name="contact-form" method="post">
                                            <div class="col-md-8 col-xs-8 nopadding">
                                                <H4>New User, Please Register</H4>
                                                <a href="/checkout/userRegistration" class="button button-3d notopmargin fright">Register</a>
                                            </div>
                                          </form>
                                    </div>
                                    <div class="row contact-wrap">
                                          <form id="main-contact-form" class="contact-form" name="contact-form" method="post">
                                            <div class="col-md-8 col-xs-8 nopadding">
                                                <H4>Continue as guest</H4>
                                                <a href="/checkout/userRegistration" class="button button-3d notopmargin fright">Guest</a>
                                            </div>
                                          </form>
                                    </div>
                              </div>

                           </div>
                        </div>


               </div>
            </div>
        </div>

    </section><!-- #content end -->
 </div>
</div>

    <!-- Home Page Diamond Content End -->

        <!--main page how it works Start-->
        <section id="homepage">
            <div class="container">
            </div>
        </section>
        <!--main page how it works End-->

</div>
<!-- Wrapper end -->


<!-- Go To Top  -->
<div id="gotoTop" class="icon-angle-up"></div>


<script type="text/javascript" src="/resources/js/functions.js"></script>