angular.module('starter.siswa',[])

.controller('SiswaCtrl', function($scope,$stateParams,$http,$state,$ionicPopup){
    var url="http://localhost/api/";

    $scope.siswaData = {};
    

    $scope.createSiswa = function(){
        


        var siswa_nis = $scope.siswaData.siswa_nis_create;
        var siswa_nama = $scope.siswaData.siswa_nama_create;
        var siswa_alamat = $scope.siswaData.siswa_alamat_create;
        var siswa_jenkel = $scope.siswaData.siswa_jenkel_create;

        if(siswa_nis !=undefined && siswa_nama !=undefined && siswa_alamat !=undefined && siswa_jenkel !=undefined){
            $str = url + "siswa_create.php?nis="+siswa_nis+"&nama="+siswa_nama+"&alamat="+siswa_alamat+"&jenkel="+siswa_jenkel;
            $http.get($str)
            .success(function(response){
                if(response==true){
                    $ionicPopup.alert({
                        title:'Sukses',
                        template: 'Data berhasil diinput'
                    })
                    $state.go('app.siswa',[],{location:"replace", reload:true});
                }else{
                    $ionicPopup.alert({
                        title:'Error',
                        template:'Data Gagal diinput'
                    })  
                }
            }).error(function(){
                $ionicPopup.alert({
                    title:'Error',
                    template: 'Ada kesalahan'
                })
            })
        }else{
            $ionicPopup.alert({
                title:'Error',
                template: 'Mohon diisi Data secara lengkap!'
            })
        }
       

    }

    $scope.delSiswa = function(siswa_nis){
        if(siswa_nis){
            $str = url + "siswa_delete.php?nis="+siswa_nis;
            $http.get($str)
            .success(function(response){
                if(response==true){
                    $ionicPopup.alert({
                        title:'Sukses',
                        template:'Data berrhasil di delete'
                    })
                }else{
                    $ionicPopup.alert({
                        title:'Error',
                        template:'Data Gagal Dihapus'
                    })
                }
                $state.go('app.siswa',[],{location:"replace", reload:true});
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

    $http.get(url+"siswa_getupdate.php?nis="+$stateParams.Nis)
    .success(function(response){
        $scope.siswaDataUpdate = response.records;
        
    });

    $scope.updateSiswa = function() {
        var siswa_nis = $scope.siswaDataUpdate.siswa_nis_update;
        var siswa_nama = $scope.siswaDataUpdate.siswa_nama_update;
        var siswa_alamat = $scope.siswaDataUpdate.siswa_alamat_update;
        var siswa_jenkel = $scope.siswaDataUpdate.siswa_jenkel_update;

        if(siswa_nis !=undefined && siswa_nama !=undefined && siswa_alamat !=undefined && siswa_jenkel !=undefined){
            str = url+"siswa_update.php?nis="+siswa_nis+"&nama="+siswa_nama+"&alamat="+siswa_alamat+"&jenkel="+siswa_jenkel;
            $http.get(str)
            .success(function (response) {
                if (response==true) {
                    $ionicPopup.alert({
                        title: 'Sukses',
                        template: 'Data Berhasil Diupdate'
                    })
                    $state.go('app.siswa', [], { location: 'replace', reload: true });
                }
                else{
                    $ionicPopup.alert({
                        title: 'Error',
                        template: 'Data Gagal Diupdate'
                    }) 
                    $state.go('app.siswa-update', [], { location: 'replace', reload: true });
                }
            })
            .error(function(){
                $ionicPopup.alert({
                    title: 'Error',
                    template: 'Ada Kesalahan'
                })
        })

        }
        else{
            $ionicPopup.alert({
                title: 'Error',
                template: 'Mohon Diisi datanya secara lengkap!'
            })
        }
    }

    var nis = sessionStorage.getItem('login_name');

    $scope.isi={};
    if(nis!=undefined){
      $http.get(url+"siswa_profile.php?nis="+nis).success(function (response) {
      $scope.isi = response.records;
      $scope.isi.pass = sessionStorage.getItem('login_pass');
      
    })
    $http.get(url+"nilai_retrieve.php?nis="+nis).success(function(response){
        $scope.showGrade = response.records;
        
    })
    }

     $scope.editSiswa = function() {
        var siswa_user = $scope.isi.nis;
        var siswa_pass = $scope.isi.pass;
        if(siswa_user !=undefined && siswa_pass!=undefined ){
            
            str = url+"edit_siswa.php?name="+siswa_user+"&pass="+siswa_pass;
            $http.get(str)
            .success(function (response) {
                if (response==true) {
                    $ionicPopup.alert({
                        title: 'Sukses',
                        template: 'Data Berhasil Diupdate'
                    })
                    sessionStorage.setItem('login_pass',siswa_pass)
                    $state.go('app.siswa-edit', [], { location: 'replace', reload: true });
                }
                else{
                    $ionicPopup.alert({
                        title: 'Error',
                        template: 'Data Gagal Diupdate'
                    }) 
                    $state.go('app.siswa-update', [], { location: 'replace', reload: true });
                }
            })
            .error(function(){
                $ionicPopup.alert({
                    title: 'Error',
                    template: 'Ada Kesalahan'
                })
        })

        }
        else{
            $ionicPopup.alert({
                title: 'Error',
                template: 'Mohon Diisi datanya secara lengkap!'
            })
        }
    }
    
    
 


    $http.get(url+"siswa_retrieve.php").success(function(response){
        $scope.showSiswa = response.records;
    });

    

})