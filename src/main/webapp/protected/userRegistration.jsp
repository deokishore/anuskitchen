<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<script src="<c:url value='/resources/js/form.js' />"></script>
<link href="<c:url value='/resources/css/style_html5.css'/>" rel="stylesheet" />



<!-- Page Title -->
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


<div id="wrapper" class="clearfix" ng-app="MyApp">
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

            <div class="clear"></div>
            <div class="divider divider-center"><i class="icon-circle"></i> </div>

            <!-- Main Content area -->
            <section id="content">

                <div ng-controller="AppCtrl" layout="column" ng-cloak="" class="inputdemoErrors">
                    <form name="projectForm" action="/checkout/personalDetails" method="post">

                        <md-input-container class="md-block">
                            <label>Client Email</label>
                            <input required="" type="email" name="clientEmail" ng-model="project.clientEmail" minlength="10" maxlength="100" ng-pattern="/^.+@.+\..+$/">

                            <div ng-messages="projectForm.clientEmail.$error" role="alert">
                                <div ng-message-exp="['required', 'minlength', 'maxlength', 'pattern']">
                                    Your email must be between 10 and 100 characters long and look like an e-mail address.
                                </div>
                            </div>
                        </md-input-container>

                        <div layout-gt-sm="row">
                            <md-input-container class="md-block" flex-gt-sm>
                                <label>Password</label>
                                <input required="" name="password" type="password" ng-model="project.password" md-maxlength="30" />

                                <div ng-messages="projectForm.password.$error">
                                    <div ng-message="required">Password is required.</div>
                                </div>
                            </md-input-container>

                            <div flex="5" hide-xs hide-sm>
                                <!-- Spacer //-->
                            </div>

                            <md-input-container class="md-block" flex-gt-sm>
                                <label>Confirm Password</label>
                                <input required="" name="confirmPpassword" type="password" ng-model="project.confirmPpassword" md-maxlength="30" />

                                <div ng-messages="projectForm.confirmPpassword.$error">
                                    <div ng-message="required">Confirm Password is required.</div>
                                </div>
                            </md-input-container>
                        </div>



                        <div layout-gt-sm="row">

                            <md-input-container class="md-block" flex-gt-sm="">
                                <label>Security Question</label>
                                <md-select ng-model="project.state" required>
                                    <md-option ng-repeat="state in states" value="{{state.abbrev}}">
                                        {{state.abbrev}}
                                    </md-option>
                                </md-select>
                            </md-input-container>

                            <div flex="5" hide-xs hide-sm>
                                <!-- Spacer //-->
                            </div>

                            <md-input-container class="md-block" flex-gt-sm>
                                <label>Security Answer</label>
                                <input name="securityAnswer" ng-model="project.securityAnswer" required="" md-maxlength="30" />
                                <div ng-messages="projectForm.securityAnswer.$error">
                                    <div ng-message="required">Security answer is required.</div>
                                </div>
                            </md-input-container>
                        </div>


                        <div layout-gt-sm="row">
                            <md-input-container class="md-block" flex-gt-sm>
                                <md-button type="button" name="submit" onclick="location.href='/login'" class="md-raised md-primary fleft">Previous Step</md-button>
                                <md-button type="submit" name="submit" class="md-raised md-primary fright">Next Step</md-button>
                            </md-input-container>
                        </div>

                    </form>
                </div>

            </section>
            <!-- #content end -->

            <!-- Sidebar Start -->

               <aside id="sidebar">
                   <h4> Cart Items</h4>
                   <md-list ng-controller="AppCtrl" ng-cloak>


                   <md-list-item ng-repeat="person in people" ng-click="goToPerson(person.name, $event)" class="noright">
                         <img alt="{{ person.name }}" ng-src="{{ person.img }}" class="md-avatar" />
                         <p>{{ person.name }}</p>

                         <md-icon md-svg-icon="communication:email"  ng-click="doSecondaryAction($event)" aria-label="Send Email" class="md-secondary md-hue-3" ></md-icon>
                         <md-icon class="md-secondary" ng-click="doSecondaryAction($event)" aria-label="Chat" md-svg-icon="communication:message"></md-icon>
                       </md-list-item>

                   </md-list>

                   <md-divider></md-divider>

               </aside>
               <!-- Sidebar End -->

        </div>
    </div>

    <div class="clear"></div>
    <div class="divider divider-center"><i class="icon-circle"></i> </div>

    <!-- Go To Top  -->
    <div id="gotoTop" class="icon-angle-up"></div>


    <script type="text/javascript" src="/resources/js/functions.js"></script>