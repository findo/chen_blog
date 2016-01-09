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
                   window.location.href = '/u/' + $scope.name;
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
        console.log("tetwetwef");
        $.post('/login', {account:$scope.account, password:$scope.password}, function(rest){
            if(rest.status == 'success'){
                window.location = '/u/' + rest.name;
            }else{
                $scope.stat = rest.status;
                $scope.$apply()
            }
        })
    }

}).controller('postController', function($scope){
    $scope.title = '';
    $scope.summary = '';
    $scope.content = '';
    $scope.userPost = function(){
        $.post('/post', {title: $scope.title, summary: $scope.summary, content: $scope.content}, function(rest){});
    }

})
