<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!-- Footer section -->



        <!-- Footer
        ============================================= -->
        <footer id="footer" class="dark">

            <div class="container">

                <!-- Footer Widgets
                ============================================= -->
                <div class="footer-widgets-wrap clearfix" style="padding:40px 0;">
                    <div class="footer-logo">
                        <img src="/resources/images/logo.png" alt="Tamaar Skin Care London" class="footer-logo" width="125" height="100">
                    </div>
                    <div class="col_two_third">
                        <div class="col_one_third">
                            <div class="widget widget_links clearfix">
                                <h4>About Us</h4>
                                <ul>
                                    <li><a href="#">Tamaar London</a>
                                    </li>
                                    <li><a href="#">Our Story</a>
                                    </li>
                                    <li><a href="#">Certifications</a>
                                    </li>
                                    <li><a href="#">Awards</a>
                                    </li>
                                    <li><a href="#">Natural Skin Care</a>
                                    </li>
                                    <li><a href="#">Whats In</a>
                                    </li>
                                    <li><a href="#">Whats Not</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="col_one_third">
                            <div class="widget widget_links clearfix">
                                <h4>Customer Service</h4>
                                <ul>
                                    <li><a href="#">Delivery Information</a>
                                    </li>
                                    <li><a href="#">Returns & Refunds</a>
                                    </li>
                                    <li><a href="#">Terms & Conditions</a>
                                    </li>
                                    <li><a href="#">Privacy Policy</a>
                                    </li>
                                    <li><a href="#">Gift Vouchers</a>
                                    </li>
                                    <li><a href="#">Work With Us</a>
                                    </li>
                                    <li><a href="#">Trade Enquiries</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="col_one_third col_last">

                            <div class="widget widget_links clearfix">
                                <h4>Contact Us</h4>
                                <div style="background: url('/resources/images/world-map.png') no-repeat center center; background-size: 100%;">
                                    <address>
                                        <strong>Headquarters:</strong><br>
                                        45 Lake Avenue, <br>
                                        London, UK (T6X012)<br>
                                    </address>
                                    <abbr title="Phone Number"><strong>Phone:</strong></abbr> (44) 1234 56789
                                    <br>
                                    <abbr title="Email Address"><strong>Email:</strong></abbr> info@tamaar.co.uk
                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="col_one_third col_last">

                        <div class="widget subscribe-widget clearfix">
                            <h4>Subscribe</h4>
                            <h5><strong>Subscribe</strong> to Our Newsletter to get Important News, Amazing Offers &amp; Inside Scoops:</h5>
                            <div id="widget-subscribe-form-result" data-notify-type="success" data-notify-msg=""></div>
                            <form id="widget-subscribe-form" action="include/subscribe.php" role="form" method="post" class="nobottommargin">
                                <div class="input-group divcenter">
                                    <span class="input-group-addon"><i class="icon-email2"></i></span>
                                    <input type="email" id="widget-subscribe-form-email" name="widget-subscribe-form-email" class="form-control required email" placeholder="Enter your Email">
                                    <span class="input-group-btn">
                                        <button class="btn btn-success" type="submit">Subscribe</button>
                                    </span>
                                </div>
                            </form>
                            <script type="text/javascript">
                                jQuery("#widget-subscribe-form").validate({
                                    submitHandler: function(form) {
                                        jQuery(form).find('.input-group-addon').find('.icon-email2').removeClass('icon-email2').addClass('icon-line-loader icon-spin');
                                        jQuery(form).ajaxSubmit({
                                            target: '#widget-subscribe-form-result',
                                            success: function() {
                                                jQuery(form).find('.input-group-addon').find('.icon-line-loader').removeClass('icon-line-loader icon-spin').addClass('icon-email2');
                                                jQuery('#widget-subscribe-form').find('.form-control').val('');
                                                jQuery('#widget-subscribe-form-result').attr('data-notify-msg', jQuery('#widget-subscribe-form-result').html()).html('');
                                                SEMICOLON.widget.notifications(jQuery('#widget-subscribe-form-result'));
                                            }
                                        });
                                    }
                                });
                            </script>
                        </div>
                    </div>

                </div>
                <!-- .footer-widgets-wrap end -->

            </div>

            <!-- Copyrights
            ============================================= -->
            <div id="copyrights">

                <div class="container clearfix">

                    <div class="col_half">
                        Copyrights &copy; 2016 Tamaar Skin Care London.
                        <br>
                    </div>

                    <div class="col_half col_last tright">
                        <div class="fright clearfix">
                            <a href="#" class="social-icon si-small si-borderless si-facebook">
                                <i class="icon-facebook"></i>
                                <i class="icon-facebook"></i>
                            </a>

                            <a href="#" class="social-icon si-small si-borderless si-twitter">
                                <i class="icon-twitter"></i>
                                <i class="icon-twitter"></i>
                            </a>

                            <a href="#" class="social-icon si-small si-borderless si-instagram">
                                <i class="icon-instagram"></i>
                                <i class="icon-instagram"></i>
                            </a>
                        </div>

                        <div class="clear"></div>
                    </div>

                </div>

            </div>
            <!-- #copyrights end -->

        </footer>
        <!-- #footer end -->

<!-- End footer section -->

