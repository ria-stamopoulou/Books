myBooks.controller('MainCtrl', ['$scope', function ($scope) {
    var vm = this;

    vm.gridOptions = {};

    vm.reset = reset;

    function reset() {
        vm.gridOptions.data = [];
        vm.gridOptions.columnDefs = [];
    }

    function highlightFilteredHeader (row, rowRenderIndex, col, colRenderIndex) {
        if (col.filters[0].term) {
            return 'header-filtered';
        } else {
            return '';
        }
    };

    function testRia() {
        console.log('hi there');
    };
}]);