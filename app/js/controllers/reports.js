'use strict';

formsAngular.controller('ReportsCtrl', ['$scope', '$http', '$location',
	function($scope, $http, $location) {

		//won't auto-instantiate without this.
		$scope.contextMenu = '';

		$scope.reportData =
			[{
			id: "1",
			region: "North",
			careworkers: 36,
			careworkersLink: "LinkToTheCareWorkersPipeAggregationDefinition",
			regionLink: "LinkToTheRegionPipeAggregationDefinition",
			org: 'organisation'
		}, {
			id: "2",
			region: "South",
			careworkers: 24,
			careworkersLink: "LinkToTheCareWorkersPipeAggregationDefinition",
			regionLink: "LinkToTheRegionPipeAggregationDefinition",
			org: 'organisation'
		}, {
			id: "3",
			region: "East",
			careworkers: 13,
			careworkersLink: "LinkToTheCareWorkersPipeAggregationDefinition",
			regionLink: "LinkToTheRegionPipeAggregationDefinition",
			org: 'organisation'
		}, {
			id: "4",
			region: "West",
			careworkers: 65,
			careworkersLink: "LinkToTheCareWorkersPipeAggregationDefinition",
			regionLink: "LinkToTheRegionPipeAggregationDefinition",
			org: 'organisation'
		}];



		$scope.gridOptions = {
			data: 'reportData',
			// showGroupPanel: true,
			// jqueryUIDraggable: true,
			columnDefs: [{
				field: 'org',
				displayName: 'Organisation',	
				// width: 100
				
			},{
				field: 'id',
				width: 0
			}, {
				field: 'region',
				displayName: 'Region',
				cellTemplate: '<div class="ngCellText"><a href="{{row.entity[col.field + \'Link\']}}">{{row.entity[col.field]}}</a></div>'
			}, {
				field: 'careworkers',
				displayName: 'Carers',
				cellTemplate: '<div class="ngCellText"><a href="{{row.entity[col.field + \'Link\']}}">{{row.entity[col.field]}}</a></div>'
			}],
			plugins: [new ngGridCsvExportPlugin(), new ngGridFlexibleHeightPlugin()],
			footerRowHeight: 100
		};


	}
]);