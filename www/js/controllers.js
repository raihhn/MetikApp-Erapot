angular.module('starter.controllers', [])

.controller('Loginctrl', function($scope, $ionicPopup, $http, $state, $ionicHistory){

  var url="http://localhost/api/";

  $scope.loginData={};
  $scope.doLogin=function(){

      var adm_user= $scope.loginData.username;
      var adm_pass = $scope.loginData.userpass;

      if(adm_user && adm_pass){
          str = url+"login.php?name="+adm_user+"&pass="+adm_pass;
          $http.get(str)
              .success(function(response){
                  if(response != ''){
                      $scope.u = response.records;

                      sessionStorage.setItem('login_status', true);
                      sessionStorage.setItem('login_id', $scope.u.userid);
                      sessionStorage.setItem('login_name', $scope.u.username);
                      sessionStorage.setItem('login_level', $scope.u.level);
                      sessionStorage.setItem('login_pass', $scope.u.userpass);

                      $ionicHistory.nextViewOptions({
                          disableAnimate:true,
                          disableBack: true
                      })

                      $ionicPopup.alert({
                          title:'Sukses',
                          template:'Login Sukses'
                      })
                     
                        $state.go('app.dashboard', {id:$scope.u.userid},{location:"replace", reload:true});
                      
                  }else{
                      $ionicPopup.alert({
                          title:'Eror',
                          template:"Username / Password Salah"
                      })
                  }
              })
      }else{
          $ionicPopup.alert({
              title:'Error',
              template:'Username / Password salah'
          })
      }
  }
  $scope.doLogout = function(){
      sessionStorage.removeItem('login_status');
      sessionStorage.removeItem('login_id');
      sessionStorage.removeItem('login_name');
      sessionStorage.removeItem('login_pass');

      $ionicHistory.nextViewOptions({
          disableAnimate: true,
          disableBack: true
      })

      $ionicPopup.alert({
          title: 'Sukses',
          template: 'Logout dari sistem'
      })
      $state.go('login', {}, {location:"replace", reload:true});
  }

})

.controller('MainCtrl', function($scope, $http){
  if(sessionStorage.getItem('login_level') == 0) {
    $scope.id = sessionStorage.getItem('login_id');
    $scope.name = sessionStorage.getItem('login_name');

    var url="http://localhost/api/";
      $http.get(url+"count.php").success(function (response) {
      $scope.data = response.records;
    })
  }
  else {
    $scope.pass = sessionStorage.getItem('login_pass');
    var nis = sessionStorage.getItem('login_name');
    var url="http://localhost/api/";

    $scope.isi={};
    if(nis!=undefined){
      $http.get(url+"siswa_profile.php?nis="+nis).success(function (response) {
        response.records.pass = sessionStorage.getItem('login_pass');
          $scope.isi = response.records;
      })
    }
  }
})

.controller('Visim', function($scope, $http, $state, $window){
  $http.get("http://metik.atwebpages.com/wp-json/wp/v2/pages/34")
  .then(function (response) {
      $scope.posts = response.data;
  });
  $scope.doAbout = function(){
      $window.history.back();
  };
})

.controller('Profile', function($scope, $http, $state, $window){
  $http.get("http://metik.atwebpages.com/wp-json/wp/v2/pages/32")
  .then(function (response) {
      $scope.posts = response.data;
  });
  $scope.doAbout = function(){
      $window.history.back();
  };
})


.controller('NewsCtrl', function($scope, $http, $state, $window){
    $http.get("http://metik.atwebpages.com/wp-json/wp/v2/posts/")
    .then(function (response) {
        $scope.posts = response.data;
    });
    $scope.doAbout = function(){
        $window.history.back();
    };
})
.controller('DetailNewsCtrl', function($scope, $http, $stateParams, $state, $window){
    $http.get("http://metik.atwebpages.com/wp-json/wp/v2/posts/"+$stateParams.id)
    .then(function (response) {
        $scope.posts = response.data;
    });
    $scope.doAbout = function(){
        $window.history.back();
    };
})

.controller('MapCtrl', function ($scope, $ionicLoading, $compile, $state, $window) {
    $window.initMap = function () {
      var myLatlng = new google.maps.LatLng(-6.245389, 106.746972);
  
      var mapOptions = {
        center: myLatlng,
        zoom: 18,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
  
      var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  
      var contentString = "<div><a ng-click='clickTest()'>SMK Media Informatika</div>";
  
      var compiled = $compile(contentString)($scope);
  
      var infowindow = new google.maps.InfoWindow({
        content: compiled[0]
      });
  
      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'SMK Media Informatika'
      });
  
      google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
      });
  
      $scope.map = map;
    }
  
    google.maps.event.addDomListener(window, 'load', initMap);
    initMap();
  
    $scope.doAbout = function () {
      $window.history.back();
    };

  
})

.controller('MyCtrl', function($scope, $ionicPopup) {
  // When button is clicked, the popup will be shown...
  $scope.showPopup = function() {
     $scope.data = {}
   
     // Custom popup
     var myPopup = $ionicPopup.show({
        template: '<input type = "text" ng-model = "data.model">',
        title: 'Title',
        subTitle: 'Subtitle',
        scope: $scope,
     
        buttons: [
           { text: 'Cancel' }, {
              text: '<b>Save</b>',
              type: 'button-positive',
              onTap: function(e) {
           
                 if (!$scope.data.model) {
                    //don't allow the user to close unless he enters model...
                    e.preventDefault();
                 } else {
                    return $scope.data.model;
                 }
              }
           }
        ]
     });

     myPopup.then(function(res) {
        console.log('Tapped!', res);
     });    
  };
})


