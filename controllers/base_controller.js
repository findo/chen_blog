angular.module('baseapp',[]).controller('baseController', function($scope){

}).controller('registerController', function($scope){
    $scope.email = '';
    $scope.password = '';
    $scope.passwordrepeat= '';
    $scope.name = '';
    $scope.stat = '';
    $scope.userRegister = function(){
        if($scope.password != $scope.passwordrepeat){
            $scope.stat = 'password different';
        }else{
            $.post('/register',{email:$scope.email, name:$scope.name, password:$scope.password}, function(rest){
               if(rest.status=='register_ok'){
                   window.location.href = '/'
               }else{
                   $scope.stat = rest.status;
                   $scope.$apply()        //传播model的变化
               }
            });
        }

    }

}).controller('loginController', function($scope){
    $scope.account = '';
    $scope.password = '';
    $scope.stat = '';
    $scope.userLogin = function(){
        $.post('/login', {account:$scope.account, password:$scope.password}, function(rest){
            if(rest.status == 'success'){
                window.location = '/'
            }else{
                $scope.stat = rest.status;
                $scope.$apply()
            }
        })
    }

})
