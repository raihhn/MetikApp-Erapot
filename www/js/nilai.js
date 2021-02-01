angular.module('starter.nilai', [])

.controller('NilaiCtrl', function($scope, $rootScope, $stateParams, $http, $state, $ionicPopup, $ionicHistory){
    $scope.doClick = function(){
        $ionicHistory.nextViewOptions({
            disableBack: true
        })
    }

    var url = "http://localhost/api/";

    $http.get(url+"nilai_retrieve.php?nis="+$stateParams.Nis).success(function(response){
        $scope.showNilai = response.records;
        
    })
    


    $http.get(url+"nilai_retrieveSiswa.php").success(function(response){
        $scope.showSiswaNilai = response.records;
    })

    $scope.nilaiData = {};

    $scope.createNilai = function(){
        var kdmapel = $scope.nilaiData.kdmapel;
        var nis = $scope.nilaiData.nis;
        var absen = $scope.nilaiData.absen;
        var tugas = $scope.nilaiData.tugas;
        var uts = $scope.nilaiData.uts;
        var uas = $scope.nilaiData.uas;

        if(kdmapel!=undefined && nis!=undefined && absen!=undefined && tugas!=undefined && uts!=undefined && uas!=undefined){
            $str = url + "nilai_create.php?kdmapel="+kdmapel+"&nis="+nis+"&absen="+absen+"&tugas="+tugas+"&uts="+uts+"&uas="+uas;
            $http.get($str).success(function(response){
                if(response==true){
                    $state.go('app.nilai', [], {location: "replace", reload: true});
                    $ionicPopup.alert({
                        title: 'Sukses',
                        template: 'Data berhasil disimpan'
                    })
                }else{
                    $ionicPopup.alert({
                        title: 'Error',
                        template: 'Data gagal disimpan'
                    })
                }
            }).error(function(){
                $ionicPopup.alert({
                    title: 'Error',
                    template: 'Ada Kesalahan'
                })
            })
        }else{
            $ionicPopup.alert({
                title: 'Error',
                template: 'Mohon form diisi seluruhnya'
            })
        }
    }

    $scope.delNilai = function(nis, kdmapel){
        if(kdmapel!="" && nis!=""){
            $str = url+"nilai_delete.php?nis="+nis+"&kdmapel="+kdmapel;
            $http.get($str).success(function(response){
                if(response==true){
                    $ionicPopup.alert({
                        title: 'Sukses',
                        template: 'Data berhasil dihapus'
                    })
                }else{
                    $ionicPopup.alert({
                        title: 'Error',
                        template: 'Data gagal dihapus'
                    })
                }
                $state.go('app.nilai-next', [], {location: "replace", reload: true});
            }).error(function(){
                $ionicPopup.alert({
                    title: 'Error',
                    template: 'Ada Kesalahan'
                })
            })
        }else{
            $ionicPopup.alert({
                title: 'Error',
                template: 'Id tidak terbaca'
            })
        }
    }

    $http.get(url+"nilai_getupdate.php?nis="+$stateParams.nilaiNis+"&kdmapel="+$stateParams.kdMapel)
        .success(function(response){
            $scope.nilaiDataUpdate = response.records;
            console.log($scope.nilaiDataUpdate);
    })

    $scope.updateNilai = function(){
        var nis = $scope.nilaiDataUpdate.nis;
        var kdmapel = $scope.nilaiDataUpdate.kdmapel;
        var tugas = $scope.nilaiDataUpdate.tugas;
        var absen = $scope.nilaiDataUpdate.absen;
        var uts = $scope.nilaiDataUpdate.uts;
        var uas = $scope.nilaiDataUpdate.uas;

        if(kdmapel!=undefined && nis!=undefined && absen!=undefined && tugas!=undefined && uts!=undefined && uas!=undefined){
            $str = url + "nilai_update.php?kdmapel="+kdmapel+"&nis="+nis+"&absen="+absen+"&tugas="+tugas+"&uts="+uts+"&uas="+uas;
            $http.get($str).success(function(response){
                if(response==true){
                    
                    $ionicPopup.alert({
                        title: 'Sukses',
                        template: 'Data berhasil diupdate'
                    })
                    $state.go('app.nilai', [], {location: "replace", reload: "true"});
                }else{
                    $ionicPopup.alert({
                        title: 'Error',
                        template: 'Data gagal diupdate'
                    })
                }
            }).error(function(){
                $ionicPopup.alert({
                    title: 'Error',
                    template: 'Ada sedikit kesalahan'
                })
            })
        }else{
            $ionicPopup.alert({
                title: 'Error',
                template: 'Mohon diisi Username/Password'
            })
        }
    }


})

