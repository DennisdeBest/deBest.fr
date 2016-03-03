var app1 = angular.module("app1", ['ngRoute', 'ngAnimate']);


var pagecount = 1;
var CVcount = 1;

app1.config(function($routeProvider){
    $routeProvider.when('/Acceuil', {
        templateUrl : 'pages/Accueil.php',
        controller : 'AccueilCtrl',
        activePage: 'Accueil',
    }).
    when('/CV', {
        templateUrl : 'pages/CV.php',
        controller : 'CvCtrl',
        activePage: 'CV'
    }).
    when('/Contact', {
        templateUrl : 'pages/Contact.php',
        controller : 'ContactCtrl',
        activePage: 'Contact'
    }).
    when('/Liens', {
        templateUrl : 'pages/Liens.php',
        controller : 'LiensCtrl',
        activePage: 'Liens'
    }).
    when('/Projets', {
        templateUrl : 'pages/Projets.php',
        controller : 'ProjetsCtrl',
        activePage: 'Projets'
    }).
    when('/Cours', {
        templateUrl : 'pages/Cours.php',
        controller : 'CoursCtrl',
        activePage: 'Cours'
    }).
    otherwise({
        redirectTo : '/Acceuil'
    });

});

function checkPage($location){
    if (pagecount == 1)
        $location.url('/Acceuil')
    else if (pagecount == 2)
        $location.url('/Contact')
    else if (pagecount == 3)
        $location.url('/CV')
    else if (pagecount == 4)
        $location.url('/Liens')
    else if (pagecount == 5)
        $location.url('/Projets')
    else if (pagecount == 6)
        $location.url('/Cours')
}

app1.run(function ($rootScope, $location) {
    $rootScope.CVfocus = CVcount;

    $rootScope.nextPage = function() {
        if(pagecount<6)
            pagecount += 1;
        checkPage($location);
    }
    $rootScope.previousPage = function() {
        if(pagecount>0)
            pagecount -= 1;
        checkPage($location);
    }
    $rootScope.upSection = function($event) {
        if (CVcount == 1)
            angular.element($event.currentTarget).addClass('active');
        else
            angular.element($event.currentTarget).removeClass('disableButton');
        if(pagecount==3 && CVcount > 1)
            CVcount -= 1;

        checkPage($location);
        $rootScope.CVfocus = CVcount
    }
    $rootScope.downSection = function() {
        if(pagecount==3 && CVcount < 4)
            CVcount += 1;
        else
            angular.element.addClass("active");
        checkPage($location);
        $rootScope.CVfocus = CVcount
    }


    $rootScope.KeyPress = function(KeyEvent){
        if (pagecount == 3)
        {
            if(KeyEvent.keyCode == 40 && CVcount < 4){
                CVcount += 1;
                console.log("pageCount : "+ CVcount);
            }
            else if(KeyEvent.keyCode == 38 && CVcount > 1){
                CVcount -= 1;
            }
        }
        if(KeyEvent.keyCode == 39 && pagecount < 6){
            pagecount += 1;
        }
        else if(KeyEvent.keyCode == 37 && pagecount > 1){
            pagecount -= 1;
        }

        checkPage($location);


        $rootScope.CVfocus = CVcount;
    };

});

app1.controller('AccueilCtrl', function($scope){
    $scope.pageClass='Accueil';
    pagecount = 1;
});

app1.controller('ContactCtrl', function($scope, $http){
    pagecount = 2;
    $scope.formData = {};
    $scope.submission = false;
    var param = function(data) {
        var returnString = '';
        for (d in data){
            if (data.hasOwnProperty(d))
                returnString += d + '=' + data[d] + '&';
        }
        // Remove last ampersand and return
        return returnString.slice( 0, returnString.length - 1 );
    };
    $scope.submitForm = function() {
        $http({
            method : 'POST',
            url : 'processEmail.php',
            data : param($scope.formData), // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' } // set the headers so angular passing info as form data (not request payload)
        })
            .success(function(data) {
                if (!data.success) {
                    // if not successful, bind errors to error variables
                    $scope.errorName = data.errors.name;
                    $scope.errorEmail = data.errors.email;
                    $scope.errorTextarea = data.errors.message;
                    $scope.submissionMessage = data.messageError;
                    $scope.submission = true; //shows the error message
                } else {
                    // if successful, bind success message to message
                    $scope.submissionMessage = data.messageSuccess;
                    $scope.formData = {}; // form fields are emptied with this line
                    $scope.submission = true; //shows the success message
                }
            });
    };
});

app1.controller('CvCtrl', function($scope){
    $scope.pageClass='CV';
    pagecount = 3;
});



app1.controller('LiensCtrl', function($scope){
    $scope.pageClass='Liens';
    pagecount = 4;
});
app1.controller('ProjetsCtrl', function($scope){
    $scope.pageClass='Projets';
    pagecount = 5;
});
app1.controller('CoursCtrl', function($scope){
    $scope.pageClass='Projets';
    pagecount = 6;
});

app1.controller('NavCtrl', function($scope, $location){


    $scope.getClass = function (path) {

        if (pagecount != 3)
            CVcount = 1;

        console.log( "CV count : "+ CVcount)
        console.log( "page count : "+ pagecount)
        if ($location.path().substr(0, path.length) === path) {
            return 'activePage';
        } else {
            return '';
        }
    }
});
