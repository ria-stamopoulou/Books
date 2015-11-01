myBooks.directive("fileread", [function () {
    return {
        scope: {
            opts: '=',
            addFilters: '&'
        },
        link: function ($scope, $elm, $attrs) {
            $scope.$apply(attrs.testRia);
            $elm.on('change', function (changeEvent) {
                var reader = new FileReader();

                reader.onload = function (evt) {
                    $scope.$apply(function () {
                        var data = evt.target.result;

                        var workbook = XLSX.read(data, { type: 'binary' });

                        var headerNames = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], { header: 1 })[0];

                        var data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);

                        /*$scope.opts.columnDefs = [];
                        headerNames.forEach(function (h) {
                            $scope.opts.columnDefs.push({ field: h });
                        });*/
                        $scope.gridOptions = {
                            enableFiltering: true,
                            columnDefs: [
                                { field: 'author', headerCellClass: $scope.highlightFilteredHeader }

                                /*{ field: 'price', filters: [
                                    { condition: uiGridConstants.filter.GREATER_THAN, placeholder: 'greater than' },
                                    { condition: uiGridConstants.filter.LESS_THAN, placeholder: 'less than' }
                                ], headerCellClass: $scope.highlightFilteredHeader }*/
                            ]
                        };

                        $scope.opts.data = data;

                        $elm.val(null);
                    });
                };

                reader.readAsBinaryString(changeEvent.target.files[0]);
            });
        }
    }
}]);