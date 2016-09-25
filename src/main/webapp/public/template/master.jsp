<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<!doctype html>
<html >

<head>

    <!-- Stylesheets
    ============================================= -->

    <link href="<c:url value='/resources/css/bootstrap.css'/>" rel="stylesheet"/>
    <link href="<c:url value='/resources/css/style.css'/>" rel="stylesheet"/>

    <link href="<c:url value='/resources/css/font-icons.css'/>" rel="stylesheet"/>
    <link href="<c:url value='/resources/css/animate.css'/>" rel="stylesheet"/>
    <link href="<c:url value='/resources/css/magnific-popup.css'/>" rel="stylesheet"/>
    <link href="<c:url value='/resources/css/immersive-slider.css'/>" rel="stylesheet"/>
    <link href="<c:url value='/resources/css/responsive.css'/>" rel="stylesheet"/>


    <!-- External JavaScripts
    ============================================= -->
    <script src="<c:url value='/resources/js/jquery.js' />"></script>
    <script src="<c:url value='/resources/js/plugins.js' />"></script>
    <script src="<c:url value='/resources/js/jquery.immersive-slider.js' />"></script>


    <!-- For Angular Material Start -->
    <script src='https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.js'></script>
    <script src='https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-animate.min.js'></script>
    <script src='https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-aria.min.js'></script>
    <script src='https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-messages.min.js'></script>
    <script src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-114/svg-assets-cache.js'></script>
    <script src='https://cdn.gitcdn.link/cdn/angular/bower-material/v1.1.0-rc.5/angular-material.js'></script>
    <link rel='stylesheet prefetch' href='https://cdn.gitcdn.link/cdn/angular/bower-material/v1.1.0-rc.5/angular-material.css'>
    <!-- For Angular Material End -->




    <!-- Document Title
    ============================================= -->
    <title>Home - Tamaar Skin Care</title>
</head>

<body class="stretched">
    <!-- Toolbar Wrapper -->
     <!-- Begin wrapper -->
    <div>
        <div>
            <tiles:insertAttribute name="header" />
            <tiles:insertAttribute name="body" />
        </div>
    </div>
    <tiles:insertAttribute name="footer" />
</body>

</html