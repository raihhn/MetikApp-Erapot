// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controllers','starter.siswa','starter.mapel','starter.nilai'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($ionicConfigProvider){
  $ionicConfigProvider.tabs.position('bottom');
})

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider

  .state('login',{
    url:'/login',
    cache:false,
        templateUrl:'templates/login.html',
        controller:'Loginctrl'
  })

  .state('app', {
    url: '/app',
    abstract: true,
    cache:false,
    templateUrl:function(){
      if(sessionStorage.getItem('login_status') && sessionStorage.getItem('login_level') == 0 ){
        return 'templates/menu.html'
      }else if(sessionStorage.getItem('login_status') && sessionStorage.getItem('login_level') == 1 ){
        return 'templates/menu-user.html'

      }else{
        return 'templates/login.html'
      }
    }
  })



  .state('app.siswa', {
    url: '/siswa',
    views: {
      'menuContent': {
        templateUrl: 'templates/siswa.html',
        controller:'SiswaCtrl'
      }
    }
  })

  .state('app.siswa-create',{
    url:'/siswa-create',
    views:{
    'menuContent': {
        templateUrl:'templates/siswa-create.html',
        controller:'SiswaCtrl'
      }
    }
  })

  .state('app.siswa-update',{
    url:'/siswa-update/:Nis',
    cache:false,
    views:{
      'menuContent':{
        templateUrl:'templates/siswa-update.html',
        controller:'SiswaCtrl'
      }
    }
  })

  .state('app.mapel', {
    url: '/mapel',
    views: {
      'menuContent': {
        templateUrl: 'templates/mapel.html',
        controller:'MapelCtrl'
       
      }
    }
  })

  .state('app.mapel-create',{
    url:'/mapel-create',
    views:{
    'menuContent': {
        templateUrl:'templates/mapel-create.html',
        controller:'MapelCtrl'
      }
    }
  })

  .state('app.mapel-update',{
    url:'/mapel-update/:Kdmapel',
    cache:false,
    views:{
      'menuContent':{
        templateUrl:'templates/mapel-update.html',
        controller:'MapelCtrl'
      }
    }
  })

  .state('app.nilai', {
    url: '/nilai',
    views: {
      'menuContent': {
        templateUrl: 'templates/nilai.html',
        controller:'NilaiCtrl'
       
      }
    }
  })

  .state('app.nilai-next', {
    url: '/nilai/:Nis',
    views: {
      'menuContent': {
        templateUrl: 'templates/nilai-next.html',
        controller:'NilaiCtrl'
       
      }
    }
  })

  .state('app.nilai-create', {
    url: '/nilai-create',
    views: {
      'menuContent': {
        templateUrl: 'templates/nilai-create.html',
        controller:'NilaiCtrl'
       
      }
    }
  })


  .state('app.nilai-update', {
    url: '/nilai-update/:nilaiNis/:kdMapel',
    views: {
      'menuContent': {
        templateUrl: 'templates/nilai-update.html',
        controller:'NilaiCtrl'
       
      }
    }
  })

  .state('app.dashboard', {
    url: '/dashboard',
    cache:false,
    views:{
      'menuContent': {
        templateUrl:function(){
          if(sessionStorage.getItem('login_status') && sessionStorage.getItem('login_level') == 0 ){
            return 'templates/main.html'
           
          }else if(sessionStorage.getItem('login_status') && sessionStorage.getItem('login_level') == 1 ){
            return 'templates/main-user.html'
    
          }
        },
        controller: 'MainCtrl'
      }
    }
   
  })

  .state('app.siswa-edit',{
    url:'/siswa-edit',
    views:{
      'menuContent':{
        templateUrl:'templates/siswa-edit.html',
        controller:'SiswaCtrl'
      }
    }
  })

  .state('app.siswa-nilai',{
    url:'/siswa-nilai',
    views:{
      'menuContent':{
        templateUrl:'templates/siswa-nilai.html',
        controller:'SiswaCtrl'
      }
    }
  })


  
  .state('news',{
    url:'/news/:id',
    templateUrl:'templates/news.html',
    controller: 'NewsCtrl'
  })
  .state('location',{
    url: '/location',
    templateUrl:'templates/location.html',
    controller:'MapCtrl'
  })
  .state('contact',{
    url:'/contact',
    templateUrl:'templates/contact.html'
  })
  .state('detailnews',{
    url:'/detailnews/:id',
    templateUrl:'templates/detailnews.html',
    controller: 'DetailNewsCtrl'
  })
  .state('history',{
    url:'/history',
    templateUrl:'templates/history.html',
    controller: 'Profile'
  })
  .state('front',{
    url:'/front',
    templateUrl:'templates/front.html'
  })
  .state('visim',{
    url:'/visim',
    templateUrl:'templates/visim.html',
    controller:'Visim'
  })
  .state('rpl',{
    url:'/rpl',
    templateUrl:'templates/rpl.html'
  })
  .state('tkj',{
    url:'/tkj',
    templateUrl:'templates/tkj.html'
  })
  .state('mm',{
    url:'/mm',
    templateUrl:'templates/mm.html'
  })
  
  .state('brodcast',{
    url:'/brodcast',
    templateUrl:'templates/brodcast.html'
  })

  .state('prodi',{
    url:'/prodi',
    templateUrl:'templates/prodi.html'
  });

  $urlRouterProvider.otherwise('/front');
})
