angular.module('starter.mapel',[])

.controller('MapelCtrl', function($scope,$stateParams,$http,$state,$ionicPopup){
    var url="http://localhost/api/";

    $scope.mapelData = {};

    $scope.createMapel = function(){
        
        var mapel_kd = $scope.mapelData.mapel_kd_create;
        var mapel_nama = $scope.mapelData.mapel_nama_create;
       
        if(mapel_kd !=undefined && mapel_nama !=undefined ){
            $str = url + "mapel_create.php?kdmapel="+mapel_kd+"&namamapel="+mapel_nama;
            $http.get($str)
            .success(function(response){
                if(response==true){
                    $ionicPopup.alert({
                        title:'Sukses',
                        template: 'Data berhasil diinput'
                    })
                    $state.go('app.mapel',[],{location:"replace", reload:true});
                }else{
                    $ionicPopup.alert({
                        title:'Error',
                        template:'Data Gagal diinput'
                    })
                    $state.go('app.mapel-create',[],{location:"replace", reload:true});
                }
            }).error(function(){
                $ionicPopup.alert({
                    title:'Error',
                    template: 'Ada kesalahan'
                })
            })
        
        }
        
    }

    $scope.delMapel = function(mapel_kd){
        
        if(mapel_kd){
            $str = url + "mapel_delete.php?kdmapel="+mapel_kd;
            $http.get($str)
            .success(function(response){
                if(response==true){
                    $ionicPopup.alert({
                        title:'Sukses',
                        template:'Data berhasil di delete'
                    })
                }else{
                    $ionicPopup.alert({
                        title:'Error',
                        template:'Data Gagal Dihapus'
                    })
                }
                $state.go('app.mapel',[],{location:"replace", reload:true});
            }).error(function(){
                $ionicPopup.alert({
                    title:'Error',
                    template:'Data belum terhapus!'
                })
            })
        }else{
            $ionicPopup.alert({
                title:'Error',
                template:'Ada Kesalahan'
            })
        }
    }

    $http.get(url+"mapel_getupdate.php?kdmapel="+$stateParams.Kdmapel)
    .success(function(response){
        $scope.mapelDataUpdate = response.records;
    });

    $scope.updateMapel = function() {
        var mapel_kd = $scope.mapelDataUpdate.mapel_kd_update;
        var mapel_nama = $scope.mapelDataUpdate.mapel_nama_update;
        

        if(mapel_kd !=undefined && mapel_nama !=undefined ){
            str = url + "mapel_update.php?kdmapel="+mapel_kd+"&namamapel="+mapel_nama;;
            $http.get(str)
            .success(function (response) {
                if (response==true) {
                    $ionicPopup.alert({
                        title: 'Sukses',
                        template: 'Data Berhasil Diupdate'
                    })
                    $state.go('app.mapel', [], { location: 'replace', reload: true });
                }
                else{
                    $ionicPopup.alert({
                        title: 'Error',
                        template: 'Data Gagal Diupdate'
                    }) 
                    $state.go('app.mapel-update', [], { location: 'replace', reload: true });
                }
            })
            .error(function(){
                $ionicPopup.alert({
                    title: 'Error',
                    template: 'Ada Kesalahan Data'
                })
        })

        }
        else{
            $ionicPopup.alert({
                title: 'Error',
                template: 'Ada Kesalahan'
            })
        }
    }
  



    $http.get(url+"mapel_retrieve.php").success(function(response){
        $scope.showMapel = response.records;
    });
    
})