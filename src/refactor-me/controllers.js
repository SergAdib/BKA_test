var productsList = angular.module('Products', []);
var list = new ProductDataConsolidator();        
    list.fillAll();
    var dataList = list.get();

function ListCtrl ($scope) {
    $scope.items = dataList;
    $scope.cur = 'nzd';
    $scope.setCur = function (mark) { $scope.cur = mark.toLowerCase();};
    $scope.sort = 'name';
    $scope.setSort = function (type) { $scope.sort = type.toLowerCase();};
};

productsList.controller('ListCtrl', ListCtrl);