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

                <div ng-controller="AppCtrl" layout="column" flex layout-fill ng-cloak>

                  <md-toolbar md-scroll-shrink>
                    <div class="md-toolbar-tools">My Messages</div>
                  </md-toolbar>

                  <md-content style="height: 600px;" md-theme="altTheme">

                    <section>
                      <md-subheader class="md-primary">Unread Messages</md-subheader>
                      <md-list layout-padding>
                        <md-list-item class="md-3-line" ng-repeat="message in messages">
                            <img ng-src="{{message.face}}" class="md-avatar" alt="{{message.who}}">
                            <div class="md-list-item-text">
                              <h3>{{message.what}}</h3>
                              <h4>{{message.who}}</h4>
                              <p>
                                {{message.notes}}
                              </p>
                            </div>
                        </md-list-item>
                      </md-list>
                    </section>

                    <section>
                      <md-subheader class="md-warn">Late Messages</md-subheader>
                      <md-list layout="column" layout-padding>
                        <md-list-item class="md-3-line" ng-repeat="message in messages">
                          <img ng-src="{{message.face}}" class="md-avatar" alt="{{message.who}}">
                          <div class="md-list-item-text">
                            <h3>{{message.what}}</h3>
                            <h4>{{message.who}}</h4>
                            <p>
                              {{message.notes}}
                            </p>
                          </div>
                        </md-list-item>
                      </md-list>
                    </section>

                    <section>
                      <md-subheader>Read Messages</md-subheader>
                      <md-list layout="column" layout-padding>
                        <md-list-item class="md-3-line" ng-repeat="message in messages">
                          <img ng-src="{{message.face}}" class="md-avatar" alt="{{message.who}}">
                          <div class="md-list-item-text">
                            <h3>{{message.what}}</h3>
                            <h4>{{message.who}}</h4>
                            <p>
                              {{message.notes}}
                            </p>
                          </div>
                        </md-list-item>
                      </md-list>
                    </section>

                    <section>
                      <md-subheader class="md-accent">Archived messages</md-subheader>
                      <md-list layout="column" layout-padding>
                        <md-list-item class="md-3-line" ng-repeat="message in messages">
                          <img ng-src="{{message.face}}" class="md-avatar" alt="{{message.who}}">
                          <div class="md-list-item-text">
                            <h3>{{message.what}}</h3>
                            <h4>{{message.who}}</h4>
                            <p>
                              {{message.notes}}
                            </p>
                          </div>
                        </md-list-item>
                      </md-list>
                    </section>

                  </md-content>
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