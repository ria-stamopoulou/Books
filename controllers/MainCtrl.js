myBooks.controller('MainCtrl', function ($scope) {
    $scope.gridOptions = {};
    $scope.gridOptions.data = [];
    $scope.gridOptions.columnDefs = [];

    $scope.reset = reset;

    function reset() {
        $scope.gridOptions.data = [];
        $scope.gridOptions.columnDefs = [];
    }
});