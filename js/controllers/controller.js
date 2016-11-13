var di = angular.module('diControllers', []);

//Home controller
di.controller('homeCtrl', function($scope, $firebaseArray) {
    var ref = new Firebase("https://dynamicidaho-5f46c.firebaseio.com/");
    //firebase array for grabbing images in homecarousel
    // $scope.homeCarouselPics = $firebaseArray(ref.child('homecarousel'));
    
    $scope.name = "HOME";
});

//newsletter controller
di.controller('newsLetter', function($scope) {
    $scope.newsLetterGo = function() {
        var ref = new Firebase("https://dynamicidaho-5f46c.firebaseio.com/newsLetterContacts");
        var newRef = ref.push();
        var emailEntered = $scope.email;
        newRef.set({ 'email': emailEntered });
        alert("You have signed up for our newsletter with the email: " + emailEntered + " Thank-you!");
    }
});


//About controller
di.controller('aboutCtrl', function($scope) {
    $scope.name = "ABOUT";
});

//Contact controller
di.controller('contactCtrl', function($scope) {
    $scope.name = "CONTACT";
});

//Portfolio controller
di.controller('portfolioCtrl', function($scope) {
    $scope.name = "PORTFOLIO";
});

//Services controller
di.controller('servicesCtrl', function($scope) {
    $scope.name = "SERVICES";
});