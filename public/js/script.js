(function () {
	"use strict";
	angular.lowercase = text => text.toLowerCase(); //Resolve angular 1.7 lowercase deprecation. 
	angular.module("FarmjuanLibraries", [
		'ngMaterial',
		'ngAnimate',
		'ngCookies',
		'ngTouch',
		'ngSanitize',
		'ngMessages',
		'ngAria',
		'ui.router',
		'ui.bootstrap',
		'toastr',
		'dx',
		'ngStorage',
		'ngFileUpload'])

	angular.module("FarmjuanDashboard", [
		'FarmjuanLibraries',
	])

	angular.module("FarmjuanPlatform", [
		'FarmjuanLibraries',
		'FarmjuanDashboard'
	])
		.config(['$urlRouterProvider', '$locationProvider', '$stateProvider', '$mdThemingProvider', function ($urlRouterProvider, $locationProvider, $stateProvider, $mdThemingProvider) {
			$mdThemingProvider.theme('default')
				.primaryPalette('green')
				.accentPalette('orange');
				
			$urlRouterProvider.otherwise('login');
			$stateProvider
				.state("login", {
					url: "/login",
					controller: "loginController",
					controllerAs: "lc",
					templateUrl: "/farmjuan-platform/login/view.html"
				})
				.state("forgot-password", {
					url: "/forgot-password",
					template: "<farmjuan-forgot></farmjuan-forgot>"
				})
				.state("register", {
					url: "/register",
					template: "<farmjuan-register></farmjuan-register>"
				})

		}])


})();
(function () {
    'use strict';

    angular
        .module('FarmjuanPlatform')
        .controller('dashboardController', dashboardController)

    dashboardController.$inject = ["$state", "User", "Dashboard", "HttpService", "$scope"];

    function dashboardController($state, User, Dashboard, HttpService, $scope) {

        var dc = this;
        dc.isViewLoading = false

        $scope
            .$on('$stateChangeStart',
                function (event, toState, toParams, fromState, fromParams) {
                    dc.isViewLoading = true

                });
        $scope
            .$on('$stateChangeSuccess',
                function (event, toState, toParams, fromState, fromParams) {
                    dc.isViewLoading = false
                });

        dc.$onInit = function () {
            HttpService
                .get("dashboard")
                .then(
                    function (res) {
                        dc.dashboardData = res.data
                        if ($state.current.url == "/dashboard") {
                            $state.go(dc.dashboardData.policies[0].service_path) // Go to first page that user has access in
                        }

                    },
                    function (err) {
                        console.log(err)
                    }
                )
        }

        dc.logout = function () {
            User.set_token(0)
            $state.go("login")
        }


    }
})();
(function () {
	"use strict";
	angular
		.module("FarmjuanDashboard")
		.config(['$stateProvider', '$locationProvider', function ($stateProvider, $locationProvider) {
			$locationProvider.hashPrefix('');
			$stateProvider
				.state("dashboard", {
					url: "/dashboard",
					controller: "dashboardController",
					controllerAs: "dc",
					templateUrl: "/farmjuan-dashboard/view.html"
				})
				.state("dashboard.home", {
					url: "/home",
					template: "<dashboard-home home=$resolve.home></dashboard-home>",
					resolve:{
		            	home: function( HttpService ){
		            		return HttpService.get("home");
		            	}
					}
				})
				.state("dashboard.insights", {
					url: "/insights",
					template: "<dashboard-insights insight=$resolve.insight></dashboard-insights>",
					resolve:{
		            	insight: function( HttpService ){
		            		return HttpService.get("insight");
		            	}
					}
				})
				.state("dashboard.devices", {
					url: "/devices",
					template: "<dashboard-devices device=$resolve.device></dashboard-devices>",
					resolve:{
		            	device: function( HttpService ){
		            		return HttpService.get("device");
		            	}
					}
				})
				.state("dashboard.settings", {
					url: "/settings",
					template: "<dashboard-settings></dashboard-settings>"
				})
				.state("dashboard.user", {
					url: "/user",
					template: "<dashboard-user user=$resolve.user></dashboard-user>",
					resolve:{
		            	user: function( HttpService ){
		            		return HttpService.get("user");
		            	}
					}
				})
				.state("dashboard.manage", {
					url: "/manage",
					template: "<dashboard-manage manage=$resolve.manage></dashboard-manage>",
					resolve:{
		            	manage: function( HttpService ){
		            		return HttpService.get("manage");
		            	}
					}
				})


		}])
})();
( function(){
	"use strict";

	angular
		.module("FarmjuanLibraries")
		.value("FarmjuanConfig",{
			host:"https://localhost:3000/api/"
		})
})();
(function(){
    "use strict";
    /** Credit to ng-CSV **/
    angular
        .module("FarmjuanLibraries")
        .service('CSV', ['$q', function ($q) {

            var EOL = '\r\n';
            var BOM = "\ufeff";
        
            var specialChars = {
              '\\t': '\t',
              '\\b': '\b',
              '\\v': '\v',
              '\\f': '\f',
              '\\r': '\r'
            };
        
            /**
             * Stringify one field
             * @param data
             * @param options
             * @returns {*}
             */
            
            this.stringifyField = function (data, options) {
              if (options.decimalSep === 'locale' && this.isFloat(data)) {
                return data.toLocaleString();
              }
        
              if (options.decimalSep !== '.' && this.isFloat(data)) {
                return data.toString().replace('.', options.decimalSep);
              }
        
              if (typeof data === 'string') {
                data = data.replace(/"/g, '""'); // Escape double qoutes
        
                if (options.quoteStrings || data.indexOf(',') > -1 || data.indexOf('\n') > -1 || data.indexOf('\r') > -1) {
                    data = options.txtDelim + data + options.txtDelim;
                }
        
                return data;
              }
        
              if (typeof data === 'boolean') {
                return data ? 'TRUE' : 'FALSE';
              }
        
              return data;
            };
        
            /**
             * Helper function to check if input is float
             * @param input
             * @returns {boolean}
             */
            this.isFloat = function (input) {
              return +input === input && (!isFinite(input) || Boolean(input % 1));
            };
        
            /**
             * Creates a csv from a data array
             * @param data
             * @param options
             *  * header - Provide the first row (optional)
             *  * fieldSep - Field separator, default: ',',
             *  * addByteOrderMarker - Add Byte order mark, default(false)
             * @param callback
             */
            this.stringify = function (data, options) {
              var def = $q.defer();
        
              var that = this;
              var csv = "";
              var csvContent = "";
        
              var dataPromise = $q.when(data).then(function (responseData) {
                //responseData = angular.copy(responseData);//moved to row creation
                // Check if there's a provided header array
                if (angular.isDefined(options.header) && options.header) {
                  var encodingArray, headerString;
        
                  encodingArray = [];
                  angular.forEach(options.header, function (title, key) {
                    this.push(that.stringifyField(title, options));
                  }, encodingArray);
        
                  headerString = encodingArray.join(options.fieldSep ? options.fieldSep : ",");
                  csvContent += headerString + EOL;
                }
        
                var arrData = [];
        
                if (angular.isArray(responseData)) {
                  arrData = responseData;
                }
                else if (angular.isFunction(responseData)) {
                  arrData = responseData();
                }
        
                // Check if using keys as labels
                if (angular.isDefined(options.label) && options.label && typeof options.label === 'boolean') {
                    var labelArray, labelString;
        
                    labelArray = [];
                    angular.forEach(arrData[0], function(value, label) {
                        this.push(that.stringifyField(label, options));
                    }, labelArray);
                    labelString = labelArray.join(options.fieldSep ? options.fieldSep : ",");
                    csvContent += labelString + EOL;
                }
        
                angular.forEach(arrData, function (oldRow, index) {
                  var row = angular.copy(arrData[index]);
                  var dataString, infoArray;
        
                  infoArray = [];
        
                  var iterator = !!options.columnOrder ? options.columnOrder : row;
                  angular.forEach(iterator, function (field, key) {
                    var val = !!options.columnOrder ? row[field] : field;
                    this.push(that.stringifyField(val, options));
                  }, infoArray);
        
                  dataString = infoArray.join(options.fieldSep ? options.fieldSep : ",");
                  csvContent += index < arrData.length ? dataString + EOL : dataString;
                });
        
                // Add BOM if needed
                if (options.addByteOrderMarker) {
                  csv += BOM;
                }
        
                // Append the content and resolve.
                csv += csvContent;
                def.resolve(csv);
              });
        
              if (typeof dataPromise['catch'] === 'function') {
                dataPromise['catch'](function (err) {
                  def.reject(err);
                });
              }
        
              return def.promise;
            };
        
            /**
             * Helper function to check if input is really a special character
             * @param input
             * @returns {boolean}
             */
            this.isSpecialChar = function(input){
              return specialChars[input] !== undefined;
            };
        
            /**
             * Helper function to get what the special character was supposed to be
             * since Angular escapes the first backslash
             * @param input
             * @returns {special character string}
             */
            this.getSpecialChar = function (input) {
              return specialChars[input];
            };
        
        
        }]);
        
})();
(function () {
    "use strict";

    angular
        .module("FarmjuanLibraries")
        .service("Dashboard", Dashboard)

    function Dashboard() {
        var f = {
            userDetails: {},
            getUserDetails: getUserDetails
        }

        function getUserDetails(cb) {
            cb(f.userDetails)
        }

        return f;

    }
})();
(function () {
    'use strict';

    angular
        .module('FarmjuanLibraries')
        .service('HttpService', HttpService)

    HttpService.$inject = ['$http', '$sessionStorage', 'FarmjuanConfig'];

    function HttpService($http, $sessionStorage, FarmjuanConfig) {

        this.get = get;
        this.post = post;
        this.update = update;
        this.set_token = set_token;

        function post(path, params) {
            $http.defaults.headers.common['x-farmjuan-token'] = $sessionStorage.farmjuan_token || 0;
            return $http.post(FarmjuanConfig.host + path, params);
        }
        function update(path, params) {
            $http.defaults.headers.common['x-farmjuan-token'] = $sessionStorage.farmjuan_token || 0;
            return $http.patch(FarmjuanConfig.host + path, params);
        }

        function get(path) {
            $http.defaults.headers.common['x-farmjuan-token'] = $sessionStorage.farmjuan_token || 0;
            return $http.get(FarmjuanConfig.host + path);
        }

        function set_token(token) {
            $sessionStorage.farmjuan_token = token;
        }

    }
})();
(function () {
	"use strict";

	angular
		.module("FarmjuanLibraries")
		.factory("User", User)

	User.$inject = ["HttpService"];

	function User(HttpService) {

		var f = {
			register: register,
			login: login,
			logout: logout,
			set_token: HttpService.set_token,
		};
		function register(user) {
			return HttpService.post("session/register", user);
		}
		function login(user) {
			return HttpService.post("v1/session/login", user)
		}
		function logout() {
			return HttpService.post("session/logout");
		}




		return f;
	}
})();
( function(){
    "use strict";

    angular
        .module("FarmjuanPlatform")
        .component("appRoot",{
            templateUrl:"/farmjuan-platform/view.html",
            controller:"farmjuanPlatformController"
        }) 
})();
(function(){
    'use strict';

    angular
        .module('FarmjuanPlatform')
        .controller('farmjuanPlatformController', farmjuanPlatformController);
        
        farmjuanPlatformController.$inject = [];

        function farmjuanPlatformController(){
            var vm = this;

        }
}());
(function(){
    "use strict";

    angular
        .module("FarmjuanLibraries")
        .component("alertBar",{
            templateUrl:"/components/alert-bar/view.html",
            controller:"alertController",
            controllerAs: "ac",
            bindings:{
                alertValues: "="
            }
        })
})();
(function(){
    'use strict';

    angular
        .module('FarmjuanDashboard')
        .controller('alertController', alertController)

        alertController.$inject = [];

        function alertController() {
            var ac = this;

            ac.$onInit = function(){
                
            }
            

        }
})();
(function(){
    "use strict";

    angular
        .module("FarmjuanLibraries")
        .component("weatherBar",{
            templateUrl:"/components/weather-bar/view.html",
            controller:"weatherController",
            controllerAs: "wc",
            bindings:{
                weatherValues: "=",
                loading: "="
            }
        })
})();
(function(){
    'use strict';

    angular
        .module('FarmjuanLibraries')
        .controller('weatherController', weatherController)

        weatherController.$inject = [];

        function weatherController() {
            var wc = this;

            wc.$onInit = function(){
                
            }
            

        }
})();
(function(){
    "use strict";

    angular
        .module("FarmjuanLibraries")
        .component("zoneBar",{
            templateUrl:"/components/zone-bar/view.html",
            controller:"zoneController",
            controllerAs: "zc",
            bindings:{
                zoneValues: "="
            }
        })
})();
(function () {
    'use strict';

    angular
        .module('FarmjuanDashboard')
        .controller('zoneController', zoneController)

    zoneController.$inject = [];

    function zoneController() {
        var zc = this;

        zc.active_index = 0

        zc.$onInit = function () {

        }

        zc.select_zone = function(index){
            zc.active_index = index
        }
    

    }
})();
(function(){
    "use strict";

    angular
        .module("FarmjuanDashboard")
        .component("fjActivity",{
            templateUrl:"/farmjuan-dashboard/activity/view.html",
            controller:"activityController"
        })
})();
(function(){
    "use strict";

    angular
        .module("FarmjuanDashboard")
        .controller("activityController",activityController);
        
        activityController.$iject = [];

        function activityController(){

            var vm = this;
           

            vm.activities = [
                {activity_name: "Drip Irrigation", activity_icon: "fas fa-tint", date: new Date('2021-01-04 12:00:00')},
                {activity_name: "Fertilizer Application", activity_icon: "fas fa-seedling", date: new Date('2021-01-04 14:10:00')},
                {activity_name: "Pesticide Application", activity_icon: "fas fa-spray-can", date: new Date('2021-01-04 14:24:00')},
                {activity_name: "Drip Irrigation", activity_icon: "fas fa-tint", date: new Date('2021-01-04 15:53:00')},
                {activity_name: "Drip Irrigation", activity_icon: "fas fa-tint", date: new Date('2021-01-04 16:18:00')},
                {activity_name: "Drip Irrigation", activity_icon: "fas fa-tint", date: new Date('2021-01-04 18:45:00')},
            ]
            vm.$onInit = function(){

            }

        }
})();
(function(){
    "use strict";

    angular
        .module("FarmjuanDashboard")
        .component("dashboardDevices",{
            templateUrl:"/farmjuan-dashboard/devices/view.html",
            controller:"devicesController",
            controllerAs: "devc",
            bindings:{
                device: "="
            }
        })
})();
(function () {
    'use strict';

    angular
        .module('FarmjuanDashboard')
        .controller('devicesController', devicesController)

    devicesController.$inject = [];

    function devicesController() {
        var devc = this;

        devc.$onInit = function () {
            devc.device.data.tableOptions = {
                dataSource: devc.device.data.deviceList,
                paging: {
                    pageSize: 10
                },
                columns: [
                    {
                        caption: "Device Name",
                        dataType: "string",
                        cellTemplate: function (cellElement, cellInfo) {
                            cellElement.append("<a class=\"header-text\" href=\"#/dashboard/devices/detail/" + cellInfo.data.device_id + "\">" + cellInfo.data.device_name + "</a>");
                        }
                    },
                    {
                        dataField: "zone_name",
                        caption: "Zone",
                        dataType: "string",
                        cssClass: "reading",
                    },
                    ,
                    {
                        dataField: "device_ip",
                        caption: "Device IP",
                        dataType: "string",
                    },
                    {
                        dataField: "device_mac",
                        caption: "Device MAC",
                        dataType: "string",
                    }
                ],
                remoteOperations: false,
                allowColumnReordering: true,
                rowAlternationEnabled: true,
                showBorders: true,
            }
        }
    }
})();
(function () {

    "use strict";

    angular
        .module('FarmjuanDashboard')
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

            $stateProvider
                .state("dashboard.devices.detail", {
                    url: "/detail/:id",
                    template: "<detail-view device-details=$resolve.deviceDetails></detail-view>",
                    resolve: {
                        deviceDetails: function (HttpService, $stateParams) {
                            return HttpService.get("device/find_device/" + $stateParams.id);
                        }
                    }
                })

        }])


})();
(function(){
    "use strict";

    angular
        .module("FarmjuanDashboard")
        .component("dashboardHome",{
            templateUrl:"/farmjuan-dashboard/homepage/view.html",
            controller:"homeController",
            controllerAs: "hc",
            bindings:{
                home: "="
            }
        })
})();
(function () {
    'use strict';

    angular
        .module('FarmjuanDashboard')
        .controller('homeController', homeController)

    homeController.$inject = ["$http", "HttpService", "Dashboard", "$stateParams"];

    function homeController($http, HttpService, Dashboard, $stateParams) {
        var hc = this;
        // hc.loading = true;


        hc.$onInit = function () {
            angular.forEach(hc.home.data.zones, function (zone) {
                zone.gauges = []
                angular.forEach(zone.data, function (device) {
                    angular.forEach(device, function (gauge) {
                        var gauge = {
                            scale: {
                                startValue: gauge.min_value,
                                endValue: gauge.max_value,
                                // tickInterval: 10,
                                label: {
                                    useRangeColors: true
                                }
                            },
                            rangeContainer: {
                                palette: "pastel",
                                ranges: gauge.ranges,
                                width: 10
                            },
                            title: {
                                text: gauge.unit_name,
                                font: { size: 28, color: "#000000", family: "Exo", weight: 600 }
                            },
                            size: {
                                height: 200,
                                width: 250,
                            },
                            value: gauge.raw_value,
                            valueIndicator: {
                                width: 6,
                                backgroundColor: gauge.unit //Override for unit beside value
                            },
                        };
                        zone.gauges.push(gauge)
                    })
                })
            });
            // hc.weather = { "consolidated_weather": [{ "id": 5585844028047360, "weather_state_name": "Heavy Rain", "weather_state_abbr": "hr", "wind_direction_compass": "SSW", "created": "2021-01-22T01:29:36.074711Z", "applicable_date": "2021-01-22", "min_temp": 25.035, "max_temp": 31.18, "the_temp": 30.28, "wind_speed": 3.218542161244996, "wind_direction": 196.3207584407891, "air_pressure": 1009.5, "humidity": 74, "visibility": 8.476124433309472, "predictability": 77 }, { "id": 4591232278855680, "weather_state_name": "Heavy Rain", "weather_state_abbr": "hr", "wind_direction_compass": "ESE", "created": "2021-01-22T01:29:38.665477Z", "applicable_date": "2021-01-23", "min_temp": 25.445, "max_temp": 31.345, "the_temp": 29.93, "wind_speed": 3.3687347949786584, "wind_direction": 123.611615567358, "air_pressure": 1011.0, "humidity": 74, "visibility": 12.244119343036665, "predictability": 77 }, { "id": 5721674600153088, "weather_state_name": "Light Rain", "weather_state_abbr": "lr", "wind_direction_compass": "ESE", "created": "2021-01-22T01:29:41.661714Z", "applicable_date": "2021-01-24", "min_temp": 24.695, "max_temp": 30.9, "the_temp": 29.705, "wind_speed": 4.283857384535645, "wind_direction": 114.69157681065786, "air_pressure": 1011.5, "humidity": 69, "visibility": 11.258003260956016, "predictability": 75 }, { "id": 5158724646731776, "weather_state_name": "Showers", "weather_state_abbr": "s", "wind_direction_compass": "E", "created": "2021-01-22T01:29:45.266964Z", "applicable_date": "2021-01-25", "min_temp": 23.950000000000003, "max_temp": 31.464999999999996, "the_temp": 29.42, "wind_speed": 4.649466647535725, "wind_direction": 96.45729930403306, "air_pressure": 1011.5, "humidity": 69, "visibility": 11.082155213552852, "predictability": 73 }, { "id": 6054080825786368, "weather_state_name": "Light Rain", "weather_state_abbr": "lr", "wind_direction_compass": "E", "created": "2021-01-22T01:29:47.570343Z", "applicable_date": "2021-01-26", "min_temp": 24.509999999999998, "max_temp": 30.4, "the_temp": 28.924999999999997, "wind_speed": 4.953167971072934, "wind_direction": 81.32900957702127, "air_pressure": 1011.5, "humidity": 70, "visibility": 10.086097192396405, "predictability": 75 }, { "id": 4746263821025280, "weather_state_name": "Showers", "weather_state_abbr": "s", "wind_direction_compass": "ENE", "created": "2021-01-22T01:29:51.056983Z", "applicable_date": "2021-01-27", "min_temp": 25.17, "max_temp": 30.485, "the_temp": 28.92, "wind_speed": 5.2623934224131075, "wind_direction": 69.5, "air_pressure": 1012.0, "humidity": 66, "visibility": 9.999726596675416, "predictability": 73 }], "time": "2021-01-22T10:56:22.493204+08:00", "sun_rise": "2021-01-22T06:25:11.859602+08:00", "sun_set": "2021-01-22T17:49:59.050669+08:00", "timezone_name": "LMT", "parent": { "title": "Philippines", "location_type": "Country", "woeid": 23424934, "latt_long": "15.593050,120.739067" }, "sources": [{ "title": "BBC", "slug": "bbc", "url": "http://www.bbc.co.uk/weather/", "crawl_rate": 360 }, { "title": "Forecast.io", "slug": "forecast-io", "url": "http://forecast.io/", "crawl_rate": 480 }, { "title": "HAMweather", "slug": "hamweather", "url": "http://www.hamweather.com/", "crawl_rate": 360 }, { "title": "Met Office", "slug": "met-office", "url": "http://www.metoffice.gov.uk/", "crawl_rate": 180 }, { "title": "OpenWeatherMap", "slug": "openweathermap", "url": "http://openweathermap.org/", "crawl_rate": 360 }, { "title": "Weather Underground", "slug": "wunderground", "url": "https://www.wunderground.com/?apiref=fc30dc3cd224e19b", "crawl_rate": 720 }, { "title": "World Weather Online", "slug": "world-weather-online", "url": "http://www.worldweatheronline.com/", "crawl_rate": 360 }], "title": "Manila", "location_type": "City", "woeid": 1199477, "latt_long": "14.609620,121.005890", "timezone": "Asia/Manila" }
        }

    }
})();
(function(){
    "use strict";

    angular
        .module("FarmjuanDashboard")
        .component("dashboardInsights",{
            templateUrl:"/farmjuan-dashboard/insights/view.html",
            controller:"insightsController",
            controllerAs: "ic",
            bindings:{
                insight: "="
            }
        })
})();
(function () {
    'use strict';

    angular
        .module('FarmjuanDashboard')
        .controller('insightsController', insightsController)

    insightsController.$inject = ["HttpService", "$mdDialog", "$filter", "CSV", "$document", "$timeout"];

    function insightsController(HttpService, $mdDialog, $filter, CSV, $document, $timeout) {
        var ic = this;
        ic.filename = "data-export.csv";
        
        ic.rangeTabs = [
            { id: 1, name: "7 days", value: 7 },
            { id: 2, name: "1 month", value: 30 },
            { id: 3, name: "6 months", value: 180 },
            { id: 4, name: "1 year", value: 365 }
        ]
        ic.isAllowed = function (id) {                
            var map = ic.insight.data.policies.map(function (e) { return e.id; }).indexOf(id); return map != -1;
        }

        ic.chartTypes = [
            { id: 1, name: "fas fa-chart-area" },
            { id: 2, name: "fas fa-table" }
        ]

        ic.$onInit = function () {
            angular.forEach(ic.insight.data.charts, function (data) {
                // Insert chart data from dev extreme
                ic.buildChart(data)
                ic.buildTable(data)
            });
        }

        ic.deleteChartConfirm = function (id, index) {
            var deleteConfirm = $mdDialog.confirm()
                .clickOutsideToClose(false)
                .title("Are you sure you want to delete this chart?")
                .ok('Delete')
                .cancel('Cancel')
                .targetEvent(id)

                // Or you can specify the rect to do the transition from
                .openFrom({
                    top: -50,
                    width: 30,
                    height: 80
                })
                .closeTo({
                    left: 1500
                })
            $mdDialog.show(deleteConfirm).then(function () {
                deleteChart(id, index)
            }, function () {

            });
        }


        function fetchChart(data, index) {
            if (data.id) {// Update default chart if id exists (from db)
                HttpService
                    .post("insight/update_chart", data)
                    .then(
                        function (res) {
                            var chartData = res.data.chart
                            ic.buildChart(chartData, index)
                            ic.buildTable(chartData, index)
                            ic.insight.data.charts[index] = chartData
                        },
                        function (err) {
                            console.log(err)
                        }
                    )
            } else { // Create user chart record
                HttpService
                    .post("insight/create_chart", data)
                    .then(
                        function (res) {
                            var chartData = res.data.chart
                            ic.buildChart(chartData, index)
                            ic.buildTable(chartData, index)
                            ic.insight.data.charts[index] = chartData
                        },
                        function (err) {
                            console.log(err)
                        }
                    )
            }
        }

        function deleteChart(id, index) {
            HttpService
                .post("insight/delete_chart", { id: id })
                .then(
                    function (res) {
                        ic.insight.data.charts.splice(index, 1)
                    },
                    function (err) {
                        console.log(err)
                    }
                )
        }

        ic.addChart = function () {
            ic.insight.data.charts.push({})
        }

        ic.changeZone = function (data) {
            data.defaultZoneIndex = ic.insight.data.zones.map(function (e) { return e.id; }).indexOf(data.defaultZoneID)
        }
        ic.changeDevice = function (data) {
            data.defaultDeviceIndex = ic.insight.data.zones[data.defaultZoneIndex].devices.map(function (e) { return e.id; }).indexOf(data.defaultDeviceID)
        }
        ic.changeMonitor = function (data, index) {
            console.log(index)
            data.defaultMonitorIndex = ic.insight.data.zones[data.defaultZoneIndex].devices[data.defaultDeviceIndex].monitors.map(function (e) { return e.id; }).indexOf(data.defaultMonitorID)
            fetchChart(data, index)
        }



        ic.filterByDate = function (data) {
            if (data.dateFilterFromDate && data.dateFilterToDate) {
                var filterData = {}
                filterData.id = data.id
                filterData.defaultZoneID = data.defaultZoneID
                filterData.defaultDeviceID = data.defaultDeviceID
                filterData.defaultMonitorID = data.defaultMonitorID
                filterData.dateFrom = formatDate(data.dateFilterFromDate)
                filterData.dateTo = formatDate(data.dateFilterToDate)

                HttpService
                    .post("insight/filter_date", filterData)
                    .then(
                        function (res) {
                            data.chartData.dataSource = res.data.chart
                        },
                        function (err) {
                            console.log(err)
                        }
                    )
            }

        }

        function formatDate(date) {
            return $filter('date')(date, "medium");
        }

        ic.buildChart = function (data, index) {
            var chartIndex;
            index == null ? chartIndex = ic.insight.data.charts.map(function (e) { return e.id; }).indexOf(data.id) : chartIndex = index
            // var chartIndex = ic.insight.data.charts.map(function (e) { return e.id; }).indexOf(data.id)
            // Map indexes for nested chart data
            data.defaultZoneIndex = ic.insight.data.zones.map(function (e) { return e.id; }).indexOf(data.defaultZoneID)
            data.defaultDeviceIndex = ic.insight.data.zones[data.defaultZoneIndex].devices.map(function (e) { return e.id; }).indexOf(data.defaultDeviceID)
            data.defaultMonitorIndex = ic.insight.data.zones[data.defaultZoneIndex].devices[data.defaultDeviceIndex].monitors.map(function (e) { return e.id; }).indexOf(data.defaultMonitorID)

            //Static values
            data.dateFilterFromDate = formatDate(new Date().setDate(new Date().getDate() - 30))
            data.dateFilterToDate = new Date()
            data.currentFilterTab = 2 // 30 days. Default on api setup
            data.currentChartType = 1 // Graph

            data.dateFilterFrom = {
                placeholder: "Date From",
                openOnFieldClick: true,
                type: "datetime",
                showAnalogClock: false,
                bindingOptions: {
                    max: 'ic.insight.data.charts[' + chartIndex + '].dateFilterToDate',
                    value: 'ic.insight.data.charts[' + chartIndex + '].dateFilterFromDate',
                },
                onValueChanged: function (e) {
                    data.dateFilterFromDate = e.value
                    ic.filterByDate(data)
                }
            }
            data.dateFilterTo = {
                placeholder: "Date To",
                openOnFieldClick: true,
                type: "datetime",
                showAnalogClock: false,
                max: new Date(),
                bindingOptions: {
                    min: 'ic.insight.data.charts[' + chartIndex + '].dateFilterFromDate',
                    value: 'ic.insight.data.charts[' + chartIndex + '].dateFilterToDate',
                },
                onValueChanged: function (e) {
                    data.dateFilterToDate = e.value
                    ic.filterByDate(data)
                }
            }

            // Dev extreme data
            data.chartOptions = {
                palette: "Soft blue",
                bindingOptions: {
                    dataSource: "ic.insight.data.charts[" + chartIndex + "].chartData.dataSource"
                },
                commonSeriesSettings: {
                    type: "spline"
                },
                commonAxisSettings: {
                    argumentType: "datetime",
                    type: "spline",
                    tick: {
                        visible: false
                    },
                },
                margin: {
                    bottom: 20
                },
                series: {
                    color: "#5e981a",
                    argumentField: "date",
                    valueField: "val",
                    point: {
                        visible: false
                    }
                },
                tooltip: {
                    enabled: true,
                    contentTemplate: function (info, $container) {
                        var container = $container[0];

                        container.innerHTML = [
                            "<h4 class='value'></h4>",
                            "<div><span class='date'></span>",
                            "</div></div>"
                        ].join("");

                        container.querySelector(".value").textContent = info.point.data.val + info.point.data.unit;
                        container.querySelector(".date").append(document.createTextNode(formatDate(info.point.data.date)));
                    }
                },
                legend: {
                    visible: false
                },
                argumentAxis: {
                    label: {
                        format: {
                            type: "d MMM"
                        }
                    },

                    allowDecimals: false,
                    axisDivisionFactor: 60
                },
                loadingIndicator: {
                    enabled: true
                },
                valueAxis: {
                    grid: {
                        visible: false
                    },
                    strips: []
                }
            }
            if (data.chartData) {
                angular.forEach(data.chartData.ranges, function (range) {
                    data.chartOptions.valueAxis.strips.push({
                        color: range.color,
                        startValue: range.startValue,
                        endValue: range.endValue,
                        label: {
                            font: {
                                color: "#737373",
                                family: "Exo",
                                opacity: 1,
                                size: 14,
                                weight: 600
                            },
                            horizontalAlignment: "right",
                            text: range.label,
                            verticalAlignment: "top"
                        },
                        paddingLeftRight: 10,
                        paddingTopBottom: 5,
                    })
                })
            }

        }

        ic.buildTable = function (data, index) {
            var chartIndex;
            index == null ? chartIndex = ic.insight.data.charts.map(function (e) { return e.id; }).indexOf(data.id) : chartIndex = index
            data.tableOptions = {
                bindingOptions: {
                    dataSource: "ic.insight.data.charts[" + chartIndex + "].chartData.dataSource"
                },
                paging: {
                    pageSize: 10
                },
                columns: [
                    {
                        dataField: "string_value",
                        caption: "Reading",
                        dataType: "string",
                        cssClass: "reading",
                    },
                    {
                        dataField: "date",
                        caption: "Time",
                        dataType: "date",
                        format: "shortTime",
                    },
                    {
                        dataField: "date",
                        caption: "Date",
                        dataType: "date",
                        format: "d MMM yyyy",
                    },
                    {
                        dataField: "status",
                        caption: "Status",
                        dataType: "string",
                        cellTemplate: function (cellElement, cellInfo) {
                            cellElement.append("<td class=text-" + cellInfo.data.status_color + ">" + cellInfo.data.status + "</td>");
                        }
                    }
                ],

                remoteOperations: false,
                allowColumnReordering: true,
                rowAlternationEnabled: true,
                showBorders: true,
            }
        }

        ic.chartChangeClick = function (chartId, data) {
            data.currentChartType = chartId
        }

        ic.rangeFilterClick = function (id, data) {
            var tabIndex = ic.rangeTabs.map(function (e) { return e.id; }).indexOf(id)
            data.currentFilterTab = id;
            data.dateFilterFromDate = formatDate(new Date().setDate(new Date().getDate() - ic.rangeTabs[tabIndex].value))
            ic.filterByDate(data)
        }

        ic.exportToCSV = function (chartID, chartData) {
            ic.exporting = true;
            ic.data_list = []

            angular.forEach(chartData, function(data){
                ic.data = {}
                ic.data.id = data.id;
                ic.data.value = data.val;
                ic.data.status = data.status;
                ic.data.string_value = data.string_value;
                ic.data.date = $filter('date')(new Date(data.date), "medium");

                ic.data_list.push(ic.data)
            });
            

            CSV.stringify(ic.data_list, getBuildCsvOptions()).then(function (csv) {
                downloadCsv(csv);
            });

        }

        ic.csv_header = [
            'Device Data ID',
            'Value',
            'Status',
            'String value',
            'Date'
        ];

        function getBuildCsvOptions() {
            var options = {
                txtDelim: '"',
                decimalSep: '.',
            };
            options.header = ic.csv_header;
            options.fieldSep = ",";

            // Replaces any badly formatted special character string with correct special character
            options.fieldSep = CSV.isSpecialChar(options.fieldSep) ? CSV.getSpecialChar(options.fieldSep) : options.fieldSep;
            return options;
        }

        function downloadCsv(_csv) {
            var charset = "utf-8";
            var blob = new Blob([_csv], {
                type: "text/csv;charset=" + charset + ";"
            });

            if (window.navigator.msSaveOrOpenBlob) {
                navigator.msSaveBlob(blob, ic.filename);
            } else {
                var downloadContainer = angular.element('<div data-tap-disabled="true"><a></a></div>');
                var downloadLink = angular.element(downloadContainer.children()[0]);
                downloadLink.attr('href', window.URL.createObjectURL(blob));
                downloadLink.attr('download', ic.filename);
                downloadLink.attr('target', '_blank');

                $document.find('body').append(downloadContainer);
                $timeout(function () {
                    downloadLink[0].click();
                    downloadLink.remove();
                    ic.exporting = false;
                }, null);
            }
        }

    }
})();
(function(){
    "use strict";

    angular
        .module("FarmjuanDashboard")
        .component("dashboardManage",{
            templateUrl:"/farmjuan-dashboard/manage/view.html",
            controller:"manageController",
            controllerAs: "mc",
            bindings:{
                manage: "="
            }
        })
})();
(function () {
    'use strict';

    angular
        .module('FarmjuanDashboard')
        .controller('manageController', manageController)

    manageController.$inject = ["HttpService", "$mdDialog", "$filter"];

    function manageController(HttpService, $mdDialog, $filter) {
        var mc = this;

        mc.$onInit = function () {
            mc.manage.data.userTypeTable = {
                bindingOptions: {
                    dataSource: 'mc.manage.data.userList',
                },
                editing: {
                    allowDeleting: true,
                    allowUpdating: true,
                    useIcons: true,
                    mode: "row"
                },
                paging: {
                    pageSize: 10
                },
                columns: [
                    {
                        dataField: "user_id",
                        caption: "User ID",
                        dataType: "string",
                        allowEditing: false,
                    },
                    {
                        dataField: "user_name",
                        caption: "Username",
                        dataType: "string",
                        allowEditing: false,
                    },
                    {
                        dataField: "user_type_id",
                        caption: "User Type",
                        dataType: "string",
                        lookup: {
                            dataSource: mc.manage.data.userTypeList,
                            displayExpr: "user_type_name",
                            valueExpr: "user_type_id"
                        }
                    },
                ],
                searchPanel: {
                    visible: true,
                    placeholder: "Search"
                },
                onRowUpdated: function (e) {
                    HttpService
                        .post("manage/edit_user", e.data)
                        .then(
                            function (res) {
                                mc.getLatestData()
                            }
                        )
                },
                onRowRemoved: function(e){
                    HttpService
                        .post("manage/delete_user", e.data)
                        .then(
                            function (res) {
                                mc.getLatestData()
                            }
                        )
                },
                remoteOperations: false,
                allowColumnReordering: true,
                rowAlternationEnabled: true,
                showBorders: true,
            }
            mc.manage.data.userZoneTable = {
                bindingOptions: {
                    dataSource: 'mc.manage.data.userZoneList',
                },
                editing: {
                    allowAdding: true,
                    allowDeleting: true,
                    allowUpdating: true,
                    useIcons: true,
                    mode: "row"
                },
                paging: {
                    pageSize: 10
                },
                columns: [
                    {
                        dataField: "user_zone_id",
                        caption: "User Zone ID",
                        dataType: "string",
                        allowEditing: false
                    },
                    {
                        dataField: "zone_id",
                        caption: "Zone Name",
                        dataType: "string",
                        lookup: {
                            dataSource: mc.manage.data.zoneList,
                            displayExpr: "name",
                            valueExpr: "id"
                        }
                    },
                    {
                        dataField: "user_id",
                        caption: "Username",
                        dataType: "string",
                        lookup: {
                            dataSource: mc.manage.data.userList,
                            displayExpr: "user_name",
                            valueExpr: "user_id"
                        }
                    }
                ],
                searchPanel: {
                    visible: true,
                    placeholder: "Search"
                },
                onRowUpdated: function (e) {
                    HttpService
                        .post("manage/edit_userzone", e.data)
                        .then(
                            function (res) {
                                mc.getLatestData()
                            },
                            function(err){
                                mc.getLatestData()
                                alert(err.data)
                            }
                        )
                },
                onRowInserted: function(e){
                    delete e.data.user_zone_id;
                    HttpService
                        .post("manage/add_userzone", e.data)
                        .then(
                            function (res) {
                                mc.getLatestData()
                            },
                            function(err){
                                mc.getLatestData()
                                alert(err.data)
                            }
                        )
                },
                onRowRemoved: function(e){
                    HttpService
                        .post("manage/delete_userzone", e.data)
                        .then(
                            function (res) {
                                // mc.getLatestData()
                            }
                        )
                },
                onInitNewRow: function(e){
                    e.data.id = mc.manage.data.userZoneList[mc.manage.data.userZoneList.length - 1].user_zone_id + 1
                },
                remoteOperations: false,
                allowColumnReordering: true,
                rowAlternationEnabled: true,
                showBorders: true,
            }
            mc.manage.data.zoneTable = {
                bindingOptions: {
                    dataSource: 'mc.manage.data.zoneList',
                },
                editing: {
                    allowAdding: true,
                    allowDeleting: true,
                    allowUpdating: true,
                    useIcons: true,
                    mode: "row"
                },
                paging: {
                    pageSize: 10
                },
                columns: [
                    {
                        dataField: "id",
                        caption: "Zone ID",
                        dataType: "string",
                        allowEditing: false
                    },
                    {
                        dataField: "name",
                        caption: "Zone Name",
                        dataType: "string",
                    },
                    {
                        dataField: "description",
                        caption: "Description",
                        dataType: "string",
                    }
                ],
                searchPanel: {
                    visible: true,
                    placeholder: "Search"
                },
                onRowUpdated: function (e) {
                    HttpService
                        .post("manage/edit_zone", e.data)
                        .then(
                            function (res) {
                                mc.getLatestData()
                            }
                        )
                },
                onRowInserted: function(e){
                    delete e.data.id;
                    HttpService
                        .post("manage/add_zone", e.data)
                        .then(
                            function (res) {
                                mc.getLatestData()
                            }
                        )
                },
                onRowRemoved: function(e){
                    HttpService
                        .post("manage/delete_zone", e.data)
                        .then(
                            function (res) {
                                mc.getLatestData()
                            }
                        )
                },
                onInitNewRow: function(e){
                    e.data.id = mc.manage.data.zoneList[mc.manage.data.zoneList.length - 1].id + 1
                },
                remoteOperations: false,
                allowColumnReordering: true,
                rowAlternationEnabled: true,
                showBorders: true,
            }
            mc.manage.data.deviceTable = {
                bindingOptions: {
                    dataSource: 'mc.manage.data.deviceList',
                },
                paging: {
                    pageSize: 10
                },
                editing: {
                    allowAdding: true,
                    allowDeleting: true,
                    allowUpdating: true,
                    useIcons: true,
                    mode: "row"
                },
                columns: [
                    {
                        dataField: "device_id",
                        caption: "Device ID",
                        dataType: "string",
                        allowEditing: false
                    },
                    {
                        dataField: "zone_id",
                        caption: "Zone Name",
                        dataType: "string",
                        lookup: {
                            dataSource: mc.manage.data.zoneList,
                            displayExpr: "name",
                            valueExpr: "id"
                        }
                    },
                    {
                        dataField: "device_name",
                        caption: "Device Name",
                        dataType: "string",
                    },
                    {
                        dataField: "device_ip",
                        caption: "Device IP",
                        dataType: "string",
                    },
                    {
                        dataField: "device_mac",
                        caption: "Device MAC",
                        dataType: "string",
                    }
                ],
                onRowUpdated: function (e) {
                    HttpService
                        .post("manage/edit_device", e.data)
                        .then(
                            function (res) {
                                mc.getLatestData()
                            }
                        )
                },
                onRowInserted: function(e){
                    delete e.data.device_id;
                    HttpService
                        .post("manage/add_device", e.data)
                        .then(
                            function (res) {
                                mc.getLatestData()
                            }
                        )
                },
                onRowRemoved: function(e){
                    HttpService
                        .post("manage/delete_device", e.data)
                        .then(
                            function (res) {
                                mc.getLatestData()
                            }
                        )
                },
                onInitNewRow: function(e){
                    e.data.device_id = mc.manage.data.deviceList[mc.manage.data.deviceList.length - 1].device_id + 1
                },
                searchPanel: {
                    visible: true,
                    placeholder: "Search"
                },
                remoteOperations: false,
                allowColumnReordering: true,
                rowAlternationEnabled: true,
                showBorders: true,
            }
            mc.manage.data.monitorTable = {
                bindingOptions: {
                    dataSource: 'mc.manage.data.monitorList',
                },
                paging: {
                    pageSize: 10
                },
                editing: {
                    allowAdding: true,
                    allowUpdating: true,
                    allowDeleting: true,
                    useIcons: true,
                    mode: "row"
                },
                columns: [
                    {
                        dataField: "monitor_id",
                        caption: "Monitor ID",
                        dataType: "string",
                        allowEditing: false
                    },
                    {
                        dataField: "device_id",
                        caption: "Device Name",
                        dataType: "string",
                        lookup: {
                            dataSource: mc.manage.data.deviceList,
                            displayExpr: "device_name",
                            valueExpr: "device_id"
                        }
                    },
                    {
                        dataField: "monitoring_type",
                        caption: "Monitoring Type",
                        dataType: "string",
                    },
                    {
                        dataField: "monitoring_unit",
                        caption: "Unit",
                        dataType: "string",
                    },
                    {
                        dataField: "monitoring_unit_icon",
                        caption: "Unit Icon",
                        dataType: "string",
                    }
                ],
                onRowUpdated: function (e) {
                    HttpService
                        .post("manage/edit_monitor", e.data)
                        .then(
                            function (res) {
                                mc.getLatestData()
                            }
                        )
                },
                onRowInserted: function(e){
                    delete e.data.monitor_id;
                    HttpService
                        .post("manage/add_monitor", e.data)
                        .then(
                            function (res) {
                                mc.getLatestData()
                            }
                        )
                },
                onRowRemoved: function(e){
                    HttpService
                        .post("manage/delete_monitor", e.data)
                        .then(
                            function (res) {
                                mc.getLatestData()
                            }
                        )
                },
                onInitNewRow: function(e){
                    e.data.monitor_id = mc.manage.data.monitorList[mc.manage.data.monitorList.length - 1].monitor_id + 1
                },
                searchPanel: {
                    visible: true,
                    placeholder: "Search"
                },
                remoteOperations: false,
                allowColumnReordering: true,
                rowAlternationEnabled: true,
                showBorders: true,
            }
            mc.isAllowed = function (id) {                
                var map = mc.manage.data.policies.map(function (e) { return e.id; }).indexOf(id); return map != -1;
            }
        }



        mc.getLatestData = function () {
            HttpService
                .get("manage")
                .then(
                    function (res) {
                        mc.manage.data = res.data;
                    }
                )
        }

    }
})();
(function(){
    "use strict";

    angular
        .module("FarmjuanDashboard")
        .component("fjNotification",{
            templateUrl:"/farmjuan-dashboard/notification/view.html",
            controller:"notificationController",
            controllerAs: "nc",
            bindings:{
                data: "="
            }
        })
})();
(function(){
    "use strict";

    angular
        .module("FarmjuanDashboard")
        .controller("notificationController",notificationController);
        
        notificationController.$iject = [];

        function notificationController(){

            var vm = this;

            vm.notifications = [
                {notif_name: "Low soil moisture", notif_icon: "fas fa-tint", date: new Date('2021-01-04 14:29:00')},
                {notif_name: "High temperature", notif_icon: "fas fa-thermometer-full", date: new Date('2021-01-04 14:29:00')},
            ]
            
            vm.$onInit = function(){
        
            }

        }
})();
(function(){
    "use strict";

    angular
        .module("FarmjuanDashboard")
        .component("dashboardSettings",{
            templateUrl:"/farmjuan-dashboard/settings/view.html",
            controller:"settingsController"
        })
})();
(function(){
    'use strict';

    angular
        .module('FarmjuanDashboard')
        .controller('settingsController', settingsController)

        settingsController.$inject = [];

        function settingsController() {
          

        }
})();
(function(){
    "use strict";

    angular
        .module("FarmjuanDashboard")
        .component("dashboardUser",{
            templateUrl:"/farmjuan-dashboard/user/view.html",
            controller:"userController",
            controllerAs: "uc",
            bindings: {
                user: "="
            }
        })
})();
(function () {
    'use strict';

    angular
        .module('FarmjuanDashboard')
        .controller('userController', userController)

    userController.$inject = ["HttpService", "Upload", "FarmjuanConfig", "$sessionStorage"];

    function userController(HttpService, Upload, FarmjuanConfig, $sessionStorage) {
        var uc = this;
        uc.picture_hover = false;

        uc.device_picture_toggle = function (state) {
            uc.picture_hover = state;
        }

        uc.update_profile = function(data){
            HttpService
                .post("user/update_profile", data)
                .then(
                    function(res){

                    },
                    function(err){
                        console.log(err)
                    }
                )
        }

        uc.uploadFiles = function (file) {
            Upload.upload({
                url: FarmjuanConfig.host + 'user/upload_user_photo/' + uc.user.data.details.userID,
                headers: { 'x-farmjuan-token': $sessionStorage.farmjuan_token },
                data: { file: file }
            }).then(function (resp) {
                uc.user.data.details.image_data = resp.data.uri
            }, function (resp) {
                console.log('Error status: ' + resp.status);
            })
        }

    }
})();
( function(){

	"use strict";

	angular
		.module('FarmjuanLibraries')
		.directive('clickOutside', [
            '$document', '$parse', '$timeout',
            clickOutside
        ])
		function clickOutside($document, $parse, $timeout) {
        return {
            restrict: 'A',
            link: function($scope, elem, attr) {

                // postpone linking to next digest to allow for unique id generation
                $timeout(function() {
                    var classList = (attr.outsideIfNot !== undefined) ? attr.outsideIfNot.split(/[ ,]+/) : [],
                        fn;

                    function eventHandler(e) {
                        var i,
                            element,
                            r,
                            id,
                            classNames,
                            l;

                        // check if our element already hidden and abort if so
                        if (angular.element(elem).hasClass("ng-hide")) {
                            return;
                        }

                        // if there is no click target, no point going on
                        if (!e || !e.target) {
                            return;
                        }

                        // loop through the available elements, looking for classes in the class list that might match and so will eat
                        for (element = e.target; element; element = element.parentNode) {
                            // check if the element is the same element the directive is attached to and exit if so (props @CosticaPuntaru)
                            if (element === elem[0]) {
                                return;
                            }
                            
                            // now we have done the initial checks, start gathering id's and classes
                            id = element.id,
                            classNames = element.className,
                            l = classList.length;

                            // Unwrap SVGAnimatedString classes
                            if (classNames && classNames.baseVal !== undefined) {
                                classNames = classNames.baseVal;
                            }

                            // if there are no class names on the element clicked, skip the check
                            if (classNames || id) {

                                // loop through the elements id's and classnames looking for exceptions
                                for (i = 0; i < l; i++) {
                                    //prepare regex for class word matching
                                    r = new RegExp('\\b' + classList[i] + '\\b');

                                    // check for exact matches on id's or classes, but only if they exist in the first place
                                    if ((id !== undefined && id === classList[i]) || (classNames && r.test(classNames))) {
                                        // now let's exit out as it is an element that has been defined as being ignored for clicking outside
                                        return;
                                    }
                                }
                            }
                        }

                        // if we have got this far, then we are good to go with processing the command passed in via the click-outside attribute
                        $timeout(function() {
                            fn = $parse(attr['clickOutside']);
                            fn($scope, { event: e });
                        });
                    }

                    // if the devices has a touchscreen, listen for this event
                    if (_hasTouch()) {
                        $document.on('touchstart', eventHandler);
                    }

                    // still listen for the click event even if there is touch to cater for touchscreen laptops
                    $document.on('click', eventHandler);

                    // when the scope is destroyed, clean up the documents event handlers as we don't want it hanging around
                    $scope.$on('$destroy', function() {
                        if (_hasTouch()) {
                            $document.off('touchstart', eventHandler);
                        }

                        $document.off('click', eventHandler);
                    });

                    /**
                     * @description Private function to attempt to figure out if we are on a touch device
                     * @private
                     **/
                    function _hasTouch() {
                        // works on most browsers, IE10/11 and Surface
                        return 'ontouchstart' in window || navigator.maxTouchPoints;
                    };
                });
            }
        };
    }
})();
angular
    .module("FarmjuanLibraries")
    .directive('ignoreMouseWheel', function ($rootScope) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.bind('mousewheel', function (event) {
                    element.blur();
                });
            }
        }
    });


angular
    .module("FarmjuanLibraries")
    .directive('showDuringResolve', function ($rootScope) {

        return {
            restrict: 'E',
            link: function (scope, element) {
                console.log("called")
                element.addClass('ng-hide');

                var unregister = $rootScope.$on('$routeChangeStart', function () {
                    element.removeClass('ng-hide');
                });

                scope.$on('$destroy', unregister);
            }
        };
    });

( function(){
    "use strict";

    angular
        .module("FarmjuanPlatform")
        .component("farmjuanForgot",{
            templateUrl:"/farmjuan-platform/forgot-password/view.html",
            controller:"forgotController",
            controllerAs:'fc'
        }) 
})();
(function(){
    'use strict';

    angular
        .module('FarmjuanPlatform')
        .controller('forgotController', forgotController)

        forgotController.$inject = [];

        /** @ngInject */
        
        function forgotController(){
            var fc = this;  
            fc.stage = 1
            

            fc.submit_confirmation = function(username){
                if(fc.stage == 1) fc.stage = 2
            }
        }

}());   
( function(){
    "use strict";

    angular
        .module("FarmjuanPlatform")
        .component("farmjuanLogin",{
            templateUrl:"/farmjuan-platform/login/view.html",
            controller:"loginController",
            controllerAs:'lc'
        }) 
})();
(function () {
    'use strict';

    angular
        .module('FarmjuanPlatform')
        .controller('loginController', loginController)

    loginController.$inject = ["User", "$state", "$mdDialog", "$timeout"];

    /** @ngInject */

    function loginController(User, $state, $mdDialog, $timeout) {
        var lc = this;
        lc.processing = false;
        lc.has_error = false;
        lc.userLogin = {
            Users: {}
        }

        lc.login = function (user) {
            lc.processing = true;
            User
                .login(user)
                .then(
                    function (res) {
                        if (res.status == 200) {
                            User.set_token(res.data)
                            $state.go("dashboard")
                        }

                    },
                    function (err) {
                        var error = $mdDialog.confirm()
                            .clickOutsideToClose(false)
                            .title("Error")
                            .textContent(err.data)
                            .ok('Close')
                            .targetEvent(user)
                            
                            // Or you can specify the rect to do the transition from
                            .openFrom({
                                top: -50,
                                width: 30,
                                height: 80
                            })
                            .closeTo({
                                left: 1500
                            })
                        $mdDialog.show(error).then(function () {
                            lc.processing = false;
                        });

                    }
                )
        }

    }

}());   
( function(){
    "use strict";

    angular
        .module("FarmjuanPlatform")
        .component("farmjuanRegister",{
            templateUrl:"/farmjuan-platform/register/view.html",
            controller:"registerController",
            controllerAs:'rc'
        }) 
})();
(function () {
    'use strict';

    angular
        .module('FarmjuanPlatform')
        .controller('registerController', registerController)

    registerController.$inject = ["User", "$mdDialog", "$state"];


    function registerController(User, $mdDialog, $state) {
        var rc = this;

        rc.registerParams = {
            Users: {},
            Profile: {}
        }
        rc.register = function (user) {
            User
                .register(user)
                .then(
                    function (res) {
                        if (res.status == 201) {
                            var confirm = $mdDialog.confirm()
                                .title('Success')
                                .textContent('Registration Successful')
                                .ok('Go to Login')
                                .targetEvent(user)
                                .openFrom({
                                    top: -50,
                                    width: 30,
                                    height: 80
                                })
                                .closeTo({
                                    left: 1500
                                })

                            $mdDialog.show(confirm).then(function () {
                                $state.go('login')
                            });

                        }

                    },
                    function (err) {
                        $mdDialog.show(
                            $mdDialog.alert()
                                .clickOutsideToClose(true)
                                .title("Error")
                                .textContent(err.data)
                                .ok('Close')
                                // Or you can specify the rect to do the transition from
                                .openFrom({
                                    top: -50,
                                    width: 30,
                                    height: 80
                                })
                                .closeTo({
                                    left: 1500
                                })
                        )
                    }
                )
        }

    }

}());   
(function(){
    "use strict";

    angular
        .module("FarmjuanDashboard")
        .component("detailView",{
            templateUrl:"/farmjuan-dashboard/devices/detail/view.html",
            controller:"deviceDetailController",
            controllerAs: "devDet",
            bindings:{
                deviceDetails: "="
            }
        })
})();
(function () {
    'use strict';

    angular
        .module('FarmjuanDashboard')
        .controller('deviceDetailController', deviceDetailController)

    deviceDetailController.$inject = ["$window", "HttpService", "Upload", "FarmjuanConfig", "$sessionStorage", "$stateParams", "$filter", "$timeout", "$state", '$location', '$anchorScroll', "CSV", "$document"];

    function deviceDetailController($window, HttpService, Upload, FarmjuanConfig, $sessionStorage, $stateParams, $filter, $timeout, $state, $location, $anchorScroll, CSV, $document) {
        var devDet = this;
        devDet.picture_hover = false;
        devDet.currentTabIndex = 0;
        devDet.edit_modal = false;

        devDet.filename = "monitor-export.csv";

        devDet.$onInit = function () {
            angular.forEach(devDet.deviceDetails.data.details.monitorings, function (data) {
                devDet.buildChart(data)
                devDet.buildTable(data)
            })
            $timeout(function () { // Devextreme existing bug for charts within tabs // Temp fix
                $("#chartContainer").data("dxChart").render();
            }, 1000)
            devDet.isAllowed = function (id) {                
                var map = devDet.deviceDetails.data.policies.map(function (e) { return e.id; }).indexOf(id); return map != -1;
            }
        }

        devDet.uploadFiles = function (file) {

            // file = file.jsonBlob(file)
            Upload.upload({
                url: FarmjuanConfig.host + 'device/upload_device_photo/' + $stateParams.id,
                headers: { 'x-farmjuan-token': $sessionStorage.farmjuan_token },
                data: { file: file }
            }).then(function (resp) {
                devDet.deviceDetails.data.details.image_data = resp.data.uri
            }, function (resp) {
                console.log('Error status: ' + resp.status);
            })
        }
        devDet.goBack = function () {
            $window.history.back()
        }

        devDet.device_picture_toggle = function (state) {
            devDet.picture_hover = state;
        }

        devDet.showEdit = function (data, index) {
            if($window.screen.availWidth <= 575){
                $location.hash('top');
                $anchorScroll();
            }
           
            devDet.modalData = data;
            console.log(devDet.modalData)
            devDet.edit_modal = true;
        }
        devDet.editRange = function () {
            HttpService
                .post("device/edit_ranges", devDet.modalData.monitorRange)
                .then(
                    function (res) {
                        devDet.edit_modal = false;
                        $state.reload();
                    },
                    function (err) {
                        console.log(err)
                    }
                )
        }

        devDet.buildChart = function (data) {
            // Dev extreme data
            data.chartOptions = {
                palette: "Soft blue",
                bindingOptions: {
                    dataSource: "devDet.deviceDetails.data.details.monitorings[" + devDet.currentTabIndex + "].chartData.dataSource"
                },
                commonSeriesSettings: {
                    type: "spline"
                },
                commonAxisSettings: {
                    argumentType: "datetime",
                    type: "spline",
                    tick: {
                        visible: false
                    },
                },
                margin: {
                    bottom: 20
                },
                series: {
                    color: "#5e981a",
                    argumentField: "date",
                    valueField: "val",
                    point: {
                        visible: false
                    }
                },
                tooltip: {
                    enabled: true,
                    contentTemplate: function (info, $container) {
                        var container = $container[0];

                        container.innerHTML = [
                            "<h4 class='value'></h4>",
                            "<div><span class='date'></span>",
                            "</div></div>"
                        ].join("");

                        container.querySelector(".value").textContent = info.point.data.val + info.point.data.unit;
                        container.querySelector(".date").append(document.createTextNode(formatDate(info.point.data.date)));
                    }
                },
                legend: {
                    visible: false
                },
                argumentAxis: {
                    label: {
                        format: {
                            type: "d MMM"
                        }
                    },
                    allowDecimals: false,
                    axisDivisionFactor: 60
                },
                loadingIndicator: {
                    enabled: true
                },
                valueAxis: {
                    grid: {
                        visible: false
                    },
                    strips: []
                }
            }
            if (data.chartData) {
                angular.forEach(data.chartData.ranges, function (range) {
                    data.chartOptions.valueAxis.strips.push({
                        color: range.color,
                        startValue: range.startValue,
                        endValue: range.endValue,
                        label: {
                            font: {
                                color: "#737373",
                                family: "Exo",
                                opacity: 1,
                                size: 14,
                                weight: 600
                            },
                            horizontalAlignment: "left",
                            text: range.label,
                            verticalAlignment: "bottom"
                        },
                        paddingLeftRight: 10,
                        paddingTopBottom: 5,
                    })
                })
            }

        }

        devDet.buildTable = function (data) {
            data.tableOptions = {
                bindingOptions: {
                    dataSource: "devDet.deviceDetails.data.details.monitorings[" + devDet.currentTabIndex + "].chartData.dataSource"
                },
                paging: {
                    pageSize: 10
                },
                columns: [
                    {
                        dataField: "string_value",
                        caption: "Reading",
                        dataType: "string",
                        cssClass: "reading",
                    },
                    {
                        dataField: "date",
                        caption: "Time",
                        dataType: "date",
                        format: "shortTime",
                    },
                    {
                        dataField: "date",
                        caption: "Date",
                        dataType: "date",
                        format: "d MMM yyyy",
                    },
                    {
                        dataField: "status",
                        caption: "Status",
                        dataType: "string",
                        cellTemplate: function (cellElement, cellInfo) {
                            cellElement.append("<td class=text-" + cellInfo.data.status_color + ">" + cellInfo.data.status + "</td>");
                        }
                    }
                ],

                remoteOperations: false,
                allowColumnReordering: true,
                rowAlternationEnabled: true,
                showBorders: true,
            }
        }

        devDet.closeModal = function () {
            devDet.edit_modal = false;
        }

        devDet.exportToCSV = function (chartID, chartData) {
            devDet.exporting = true;
            devDet.data_list = []

            angular.forEach(chartData, function(data){
                devDet.data = {}
                devDet.data.id = data.id;
                devDet.data.value = data.val;
                devDet.data.status = data.status;
                devDet.data.string_value = data.string_value;
                devDet.data.date = $filter('date')(new Date(data.date), "medium");

                devDet.data_list.push(devDet.data)
            });
            

            CSV.stringify(devDet.data_list, getBuildCsvOptions()).then(function (csv) {
                downloadCsv(csv);
            });

        }

        devDet.csv_header = [
            'Device Data ID',
            'Value',
            'Status',
            'String value',
            'Date'
        ];


        function formatDate(date) {
            return $filter('date')(date, "medium");
        }

        function getBuildCsvOptions() {
            var options = {
                txtDelim: '"',
                decimalSep: '.',
            };
            options.header = devDet.csv_header;
            options.fieldSep = ",";

            // Replaces any badly formatted special character string with correct special character
            options.fieldSep = CSV.isSpecialChar(options.fieldSep) ? CSV.getSpecialChar(options.fieldSep) : options.fieldSep;
            return options;
        }

        function downloadCsv(_csv) {
            var charset = "utf-8";
            var blob = new Blob([_csv], {
                type: "text/csv;charset=" + charset + ";"
            });

            if (window.navigator.msSaveOrOpenBlob) {
                navigator.msSaveBlob(blob, devDet.filename);
            } else {
                var downloadContainer = angular.element('<div data-tap-disabled="true"><a></a></div>');
                var downloadLink = angular.element(downloadContainer.children()[0]);
                downloadLink.attr('href', window.URL.createObjectURL(blob));
                downloadLink.attr('download', devDet.filename);
                downloadLink.attr('target', '_blank');

                $document.find('body').append(downloadContainer);
                $timeout(function () {
                    downloadLink[0].click();
                    downloadLink.remove();
                    devDet.exporting = false;
                }, null);
            }
        }
    }
})();