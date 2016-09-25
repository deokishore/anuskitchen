<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

    <script src="<c:url value='/resources/js/pages/header.js' />"></script>


    <!-- Home Page Diamond CSS Start -->
    <link href="<c:url value='/resources/css/style2.css'/>" rel="stylesheet"/>
    <!-- Home Page Diamond CSS End -->
    <script src="<c:url value='/resources/js/ys/pageInitialise.js' />"></script>


<!-- Begin Header -->
<header id="header" class="full-header">



    <div id="header-wrap">
        <div class="container clearfix">

            <!-- Logo
            ============================================= -->
            <div id="logo">
                <a href="/" class="standard-logo" data-dark-logo="/resources/images/logo.png"><img src="/resources/images/logo-dark.png" alt="Tamaar Skin Care">
                </a>
                <a href="/" class="retina-logo" data-dark-logo="/resources/images/logo@2x.png"><img src="/resources/images/logo-dark@2x.png" alt="Tamaar Skin Care">
                </a>
            </div>
            <!-- #logo end -->



            <!-- Primary Navigation
            ============================================= -->
            <nav id="primary-menu">

                <ul>
                    <li>
                        <a href="/">
                            <div>Home</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div>About Us</div>
                        </a>
                        <ul>
                            <li>
                                <a href="#">
                                    <div>Tamaar London</div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div>Our Story</div>
                                </a>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <div>Company History & Ethics</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                    <div>Certifications</div>
                                </a>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <div>Company & Products</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                    <div>Awards</div>
                                </a>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <div>Press / Happenings / Media </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                    <div>Natural Skin Care</div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div>Made In Europe</div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div>Whats in</div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div>Whats not</div>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="#">
                            <div>Information</div>
                        </a>
                        <ul>
                            <li>
                                <a href="#">
                                    <div>Ingredients Encyclopedia</div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div>Gift Vouchers</div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div>Gift Guide</div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div>Work with us</div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div>Trade Enquiries</div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div>Affiliate Program</div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div>Where to buy</div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div>Shipping / Delivery</div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div>Customer Care</div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div>Terms & Conditions</div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div>Privacy Policy</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <div>Our Blog</div>
                        </a>
                        <ul>
                            <li>
                                <a href="#">
                                    <div>News & Press</div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div>Social Network Feeds</div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div>Industry News</div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div>Blog Articles</div>
                                </a>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <div>Natural Skin</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div>Diet</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div>Lifestyle</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div>Offers</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div>Email Newsletters</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div>Promos</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div>Competitions</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div>FAQs</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <div>Contact</div>
                        </a>
                    </li>
                </ul>

                <!-- Top Cart
                ============================================= -->
                <div id="top-cart">
                    <a href="#" id="top-cart-trigger"><i class="icon-shopping-cart"></i><span>5</span></a>
                    <div class="top-cart-content">
                        <div class="top-cart-title">
                            <h4>Shopping Cart</h4>
                        </div>
                        <div class="top-cart-items">
                            <div class="top-cart-item clearfix">
                                <div class="top-cart-item-image">
                                    <a href="#"><img src="/resources/images/slider/slide2.jpg" alt="Anti Wrinkle Cream" />
                                    </a>
                                </div>
                                <div class="top-cart-item-desc">
                                    <a href="#">Anti Wrinkle Cream</a>
                                    <span class="top-cart-item-price">$19.99</span>
                                    <span class="top-cart-item-quantity">x 2</span>
                                </div>
                            </div>
                            <div class="top-cart-item clearfix">
                                <div class="top-cart-item-image">
                                    <a href="#"><img src="/resources/images/slider/slide3.jpg" alt="Anti Acne Cream" />
                                    </a>
                                </div>
                                <div class="top-cart-item-desc">
                                    <a href="#">Anti Acne Cream</a>
                                    <span class="top-cart-item-price">$24.99</span>
                                    <span class="top-cart-item-quantity">x 3</span>
                                </div>
                            </div>
                        </div>
                        <div class="top-cart-action clearfix">
                            <span class="fleft top-checkout-price">$114.95</span>
                            <button class="button button-3d button-small nomargin fright" onclick="window.location.href='/cartItems'">View Cart</button>
                        </div>
                    </div>
                </div>
                <!-- #top-cart end -->

                <!-- Top Search
                ============================================= -->
                <div id="top-search">
                    <a href="#" id="top-search-trigger"><i class="icon-search3"></i><i class="icon-line-cross"></i></a>
                    <form action="search.html" method="get">
                        <input type="text" name="q" class="form-control" value="" placeholder="Type &amp; Hit Enter..">
                    </form>
                </div>
                <!-- #top-search end -->

            </nav>
            <!-- #primary-menu end -->

        </div>

    </div>

</header>
<!-- End Header -->

