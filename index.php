<!DOCTYPE html>
<html ng-app="app1" ng-keydown="KeyPress($event)" >
<head>
    <meta charset="UTF-8">
    <script type="application/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js"></script>
    <script type="application/javascript" src="https://code.angularjs.org/1.5.0/angular-animate.js"></script>
    <script type="application/javascript" src="https://code.angularjs.org/1.5.0/angular-route.js"></script>
    <script type="application/javascript" src="app.js"></script>
    <link rel="stylesheet" href="css/small.css" media="screen and (max-width:46.4rem)">
    <link rel="stylesheet" href="css/large.css" media="screen and (min-width:46.5rem)">
    <link rel="stylesheet" href="css/cv.css">
    <link rel="stylesheet" href="css/main.css">
    <link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>

    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<nav >
    <input type="hidden" ng-model="hideMenu" value="true"/>
    <div id="MobileNavBar"><input id = "menuBtn" type="button" ng-click="hideMenu=!hideMenu"></div>
    <div id = "links"  ng-show="hideMenu">
    <ul ng-controller="NavCtrl">
        <li id="firstLink"><a ng-class="getClass('/Acceuil')" href="#Accueil">Accueil</a></li>
        <li id="secondLink"><a ng-class="getClass('/Contact')"href="#Contact">Contact</a></li>
        <li id="thirdLink"><a ng-class="getClass('/CV')" href="#CV">CV</a></li>
        <li id="fourthLink"><a ng-class="getClass('/Liens')" href="#Liens">Liens</a></li>
        <li id="fifthLink"><a ng-class="getClass('/Projets')" href="#Projets">Projets</a></li>
        <li id="sixtLink"><a ng-class="getClass('/Cours')" href="#Cours">Cours</a></li>
    </ul>


    </div>
    <!--<img src="inc/images/Logo.png"  id="Logo"/>-->

</nav>
<div class="MainContent">
    <div class="page {{pageClass}}" ng-view>
    </div>


</div>
<div id="navButtons" >
    <button ng-click="upSection($event)"id="upButton">U</button><br>

    <button ng-click="previousPage()"id="leftButton"><</button>
    <button ng-click="nextPage()"id="rightButton">></button><br>

    <button ng-click="downSection()" id="downButton">D</button></div>
</body>

</html>