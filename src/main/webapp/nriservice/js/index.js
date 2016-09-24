(function () {
  'use strict';
  angular
      .module('MyApp',['ngAnimate', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'rzModule', 'ui.bootstrap'])
      .controller('CustomInputDemoCtrl', DemoCtrl);

  function DemoCtrl ($timeout, $q, $scope, $rootScope, $timeout, $modal) {

    var self = this;

    self.readonly = false;
    self.selectedItem = null;
    self.searchText = null;
    self.querySearch = querySearch;
    self.vegetables = loadVegetables();
    self.selectedVegetables = [];
    self.numberChips = [];
    self.numberChips2 = [];
    self.numberBuffer = '';
    self.autocompleteDemoRequireMatch = true;
    self.transformChip = transformChip;

    //Minimal slider config
    $scope.minSlider = {
        value: 10
    };

    //Slider with selection bar
    $scope.slider_visible_bar = {
        value: 10,
        options: {
            showSelectionBar: true
        }
    };

    /**
     * Return the proper object when the append is called.
     */
    function transformChip(chip) {
      // If it is an object, it's already a known chip
      if (angular.isObject(chip)) {
        return chip;
      }

      // Otherwise, create a new one
      return { name: chip, type: 'new' }
    }

    /**
     * Search for vegetables.
     */
    function querySearch (query) {
      var results = query ? self.vegetables.filter(createFilterFor(query)) : [];
      return results;
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(vegetable) {
        return (vegetable._lowername.indexOf(lowercaseQuery) === 0) ||
            (vegetable._lowertype.indexOf(lowercaseQuery) === 0);
      };

    }

    function loadVegetables() {
      var veggies = [
        {
          'name': 'Delhi',
          'type': 'Delhi'
        },
        {
          'name': 'Ranchi',
          'type': 'Jharkhand'
        },
        {
          'name': 'Faridabad',
          'type': 'Hariyana'
        },
        {
          'name': 'Gurgaon',
          'type': 'Hariyana'
        },
        {
          'name': 'Noida',
          'type': 'UP'
        },
        {
           'name': 'Greater Noida',
           'type': 'UP'
        },
        {
           'name': 'Noida Extn',
           'type': 'UP'
        }

      ];

      return veggies.map(function (veg) {
        veg._lowername = veg.name.toLowerCase();
        veg._lowertype = veg.type.toLowerCase();
        return veg;
      });
    }
  }
})();


/**
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be in foundin the LICENSE file at http://material.angularjs.org/license.
**/