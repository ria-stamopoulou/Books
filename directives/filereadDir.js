myBooks.directive("fileread", [function () {
    return {
        scope: {
            opts: '='
        },
        link: function ($scope, $elm, $attrs) {
            $elm.on('change', function (changeEvent) {
                var reader = new FileReader();

                reader.onload = function (evt) {
                    $scope.$apply(function () {
                        var data = evt.target.result;

                        var workbook = XLSX.read(data, { type: 'binary' });

                        var headerNames = XLSX.utils.sheet_to_json(
                            workbook.Sheets[workbook.SheetNames[0]],
                            { header: 1 }
                            )[0];

                        var data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);

                        /*$scope.opts.gridOptions = {
                            enableGridMenu: true,
                            enableSelectAll: true,
                            exporterCsvFilename: 'myFile.csv'
                        };*/

                        $scope.opts.data = data;

                        $elm.val(null);
                    });
                };

                reader.readAsBinaryString(changeEvent.target.files[0]);
            });
        }
    }
}]);