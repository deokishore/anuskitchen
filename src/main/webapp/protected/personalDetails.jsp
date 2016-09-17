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
               <md-divider></md-divider>
               <md-subheader class="md-no-sticky"> </md-subheader>
              <div ng-controller="AppCtrl" layout="column" ng-cloak="" class="inputdemoErrors">

                  <div ng-cloak>
                    <md-content>
                      <md-tabs md-dynamic-height md-border-bottom>

                        <md-tab label="Delivery Address">
                          <md-content class="md-padding">

                            <div>
                                <form name="userForm">

                                   <div layout-gt-sm="row">
                                      <md-input-container class="md-block" flex-gt-sm="">
                                         <label>Title</label>
                                         <input ng-model="user.title" required="">
                                      </md-input-container>

                                      <md-input-container class="md-block" flex-gt-sm="">
                                         <label>First name</label>
                                         <md-icon md-svg-src="img/icons/ic_person_24px.svg" class="name"></md-icon>
                                         <input ng-model="user.firstName" required="">
                                      </md-input-container>

                                      <md-input-container class="md-block" flex-gt-sm="">
                                         <label>Last Name</label>
                                         <md-icon md-svg-src="img/icons/ic_person_24px.svg" class="name"></md-icon>
                                         <input ng-model="theMax" required="">
                                      </md-input-container>
                                   </div>

                                   <md-input-container class="md-block">
                                      <label>Address</label>
                                      <input ng-model="user.address" required="">
                                      <md-icon md-svg-src="img/icons/ic_place_24px.svg" style="display:inline-block;"></md-icon>
                                   </md-input-container>

                                   <md-input-container class="md-block">
                                      <label>Address 2</label>
                                      <input ng-model="user.address2" required="">
                                   </md-input-container>


                                   <div layout-gt-sm="row">

                                      <md-input-container class="md-block" flex-gt-sm="">
                                         <label>City</label>
                                         <input ng-model="user.city" required="">
                                      </md-input-container>


                                      <md-input-container class="md-block" flex-gt-sm="">
                                         <label>Zip Code</label>
                                         <input name="postalCode" ng-model="user.postalCode" required="" md-maxlength="6">

                                         <div ng-messages="userForm.postalCode.$error" role="alert" multiple="">
                                            <div ng-message="required" class="my-message">You must supply a postal code.</div>
                                            <div ng-message="pattern" class="my-message">That doesn't look like a valid postal
                                               code.
                                            </div>
                                            <div ng-message="md-maxlength" class="my-message">
                                               Don't use the long version silly...we don't need to be that specific...
                                            </div>
                                         </div>
                                      </md-input-container>
                                   </div>


                                   <div layout-gt-sm="row">

                                     <md-input-container class="md-block" flex-gt-sm="">
                                        <label>Mobile Number</label>
                                        <md-icon md-svg-src="img/icons/ic_phone_24px.svg"></md-icon>
                                        <input name="postalCode" ng-model="user.phoneNumber" required="" ng-pattern="/^[0-9]{5}$/" md-maxlength="10">


                                        <div ng-messages="userForm.postalCode.$error" role="alert" multiple="">
                                           <div ng-message="required" class="my-message">You must supply a postal code.</div>
                                           <div ng-message="pattern" class="my-message">That doesn't look like a valid postal
                                              code.
                                           </div>
                                           <div ng-message="md-maxlength" class="my-message">
                                              Don't use the long version silly...we don't need to be that specific...
                                           </div>
                                        </div>
                                     </md-input-container>

                                      <md-input-container class="md-block" flex-gt-sm="">
                                          <label>Home Number</label>
                                          <md-icon md-svg-src="img/icons/ic_phone_24px.svg"></md-icon>
                                          <input name="postalCode" ng-model="user.phoneNumber" required="" ng-pattern="/^[0-9]{5}$/" md-maxlength="10">


                                          <div ng-messages="userForm.postalCode.$error" role="alert" multiple="">
                                             <div ng-message="required" class="my-message">You must supply a postal code.</div>
                                             <div ng-message="pattern" class="my-message">That doesn't look like a valid postal
                                                code.
                                             </div>
                                             <div ng-message="md-maxlength" class="my-message">
                                                Don't use the long version silly...we don't need to be that specific...
                                             </div>
                                          </div>
                                       </md-input-container>


                                   </div>

                                   <div layout-gt-sm="row">
                                      <md-input-container class="md-block" flex-gt-sm>



                                         <md-button type="submit" name="submit" class="md-raised md-primary fright">Save</md-button>

                                      </md-input-container>
                                   </div>


                                </form>
                             </div>

                          </md-content>
                        </md-tab>

                        <md-tab label="Billing Address">

                          <md-content class="md-padding">
                            <div>
                                 <form name="userForm">

                                    <div>
                                      <md-checkbox ng-model="data.cb1" aria-label="Checkbox 1">
                                        Same As Delivery 1: {{ data.cb1 }}
                                      </md-checkbox>
                                    </div>


                                    <div layout-gt-sm="row">
                                       <md-input-container class="md-block" flex-gt-sm="">
                                          <label>Title</label>
                                          <md-icon md-svg-src="img/icons/ic_person_24px.svg" class="name"></md-icon>
                                          <input ng-model="user.title" required="">
                                       </md-input-container>

                                       <md-input-container class="md-block" flex-gt-sm="">
                                          <label>First name</label>
                                          <input ng-model="user.firstName" required="">
                                       </md-input-container>

                                       <md-input-container class="md-block" flex-gt-sm="">
                                          <label>Last Name</label>
                                          <input ng-model="theMax" required="">
                                       </md-input-container>
                                    </div>

                                    <md-input-container class="md-block">
                                       <label>Address</label>
                                       <input ng-model="user.address" required="">
                                       <md-icon md-svg-src="img/icons/ic_place_24px.svg" style="display:inline-block;"></md-icon>
                                    </md-input-container>

                                    <md-input-container class="md-block">
                                       <label>Address 2</label>
                                       <input ng-model="user.address2" required="">
                                    </md-input-container>


                                    <div layout-gt-sm="row">

                                       <md-input-container class="md-block" flex-gt-sm="">
                                          <label>City</label>
                                          <input ng-model="user.city" required="">
                                       </md-input-container>


                                       <md-input-container class="md-block" flex-gt-sm="">
                                          <label>Zip Code</label>
                                          <input name="postalCode" ng-model="user.postalCode" required="" md-maxlength="6">

                                          <div ng-messages="userForm.postalCode.$error" role="alert" multiple="">
                                             <div ng-message="required" class="my-message">You must supply a postal code.</div>
                                             <div ng-message="pattern" class="my-message">That doesn't look like a valid postal
                                                code.
                                             </div>
                                             <div ng-message="md-maxlength" class="my-message">
                                                Don't use the long version silly...we don't need to be that specific...
                                             </div>
                                          </div>
                                       </md-input-container>
                                    </div>


                                    <div layout-gt-sm="row">

                                      <md-input-container class="md-block" flex-gt-sm="">
                                         <label>Mobile Number</label>
                                         <md-icon md-svg-src="img/icons/ic_phone_24px.svg"></md-icon>
                                         <input name="postalCode" ng-model="user.phoneNumber" required="" ng-pattern="/^[0-9]{5}$/" md-maxlength="10">


                                         <div ng-messages="userForm.postalCode.$error" role="alert" multiple="">
                                            <div ng-message="required" class="my-message">You must supply a postal code.</div>
                                            <div ng-message="pattern" class="my-message">That doesn't look like a valid postal
                                               code.
                                            </div>
                                            <div ng-message="md-maxlength" class="my-message">
                                               Don't use the long version silly...we don't need to be that specific...
                                            </div>
                                         </div>
                                      </md-input-container>

                                       <md-input-container class="md-block" flex-gt-sm="">
                                           <label>Home Number</label>
                                           <md-icon md-svg-src="img/icons/ic_phone_24px.svg"></md-icon>
                                           <input name="postalCode" ng-model="user.phoneNumber" required="" ng-pattern="/^[0-9]{5}$/" md-maxlength="10">


                                           <div ng-messages="userForm.postalCode.$error" role="alert" multiple="">
                                              <div ng-message="required" class="my-message">You must supply a postal code.</div>
                                              <div ng-message="pattern" class="my-message">That doesn't look like a valid postal
                                                 code.
                                              </div>
                                              <div ng-message="md-maxlength" class="my-message">
                                                 Don't use the long version silly...we don't need to be that specific...
                                              </div>
                                           </div>
                                        </md-input-container>


                                    </div>

                                    <div layout-gt-sm="row">
                                       <md-input-container class="md-block" flex-gt-sm>
                                          <md-button type="submit" name="submit" class="md-raised md-primary fright">Save</md-button>
                                       </md-input-container>
                                    </div>


                                 </form>
                              </div>

                          </md-content>
                        </md-tab>

                      </md-tabs>
                    </md-content>
                  </div>
               </div>

               <div layout-gt-sm="row">
                     <md-input-container class="md-block" flex-gt-sm>
                        <md-button type="button" name="submit" class="md-raised md-primary fleft" onclick="location.href='/checkout/userRegistration'">Previous Step</md-button>
                        <md-button type="submit" name="submit" class="md-raised md-primary fright" onclick="location.href='/checkout/paymentOption'">Next Step</md-button>
                     </md-input-container>
                  </div>

            </section>
            <!-- #content end -->



            <!-- Sidebar -->
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

        </div>
    </div>

    <div class="clear"></div>
    <div class="divider divider-center"><i class="icon-circle"></i> </div>

    <!-- Go To Top  -->
    <div id="gotoTop" class="icon-angle-up"></div>


    <script type="text/javascript" src="/resources/js/functions.js"></script>