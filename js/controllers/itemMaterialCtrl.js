//Controller for itemMaterial
angular.module('mainApp')
	.controller('itemMaterialCtrl', function($scope, $routeParams) {
	  // Apply/Remove "filter-selected" class on click of option
	  $(".materials-page-filters label").on("click", function() {
		$(this).toggleClass( "filter-selected" );
	  })
		
		$scope.material = jsonMaterials;
	  $scope.Filter = {};
	  
	  $scope.itemSlot = function(item){
			return 	item.itemSlot == 2 ||
					item.itemSlot == 3 ||
					item.itemSlot == 4 ||
					item.itemSlot == 5;
		};

	  $scope.showMaterialsByType = function(item){
		return 		item.subType === $scope.Filter.ore ||
					item.subType === $scope.Filter.metal ||
					item.subType === $scope.Filter.log ||
					item.subType === $scope.Filter.cloth ||
					item.subType === $scope.Filter.herb ||
					item.subType === $scope.Filter.limb ||
					item.subType === $scope.Filter.scale ||
					item.subType === $scope.Filter.tooth ||
					item.subType === $scope.Filter.fur ||
					item.subType === $scope.Filter.plate ||
					item.subType === $scope.Filter.blade ||
					item.subType === $scope.Filter.hilt ||
					item.subType === $scope.Filter.crystal ||
					item.subType === $scope.Filter.gem ||
					item.subType === $scope.Filter.rune ||
					item.subType === $scope.Filter.shell ||
					item.subType === $scope.Filter.claw ||
					item.subType === $scope.Filter.horn ||
					item.subType === $scope.Filter.misc;
	  };

	  $scope.showMaterialsByTier = function(item) {
		return  	  lvToTierAtMaterials(item.itemLevel) == $scope.Filter.Tier1 ||
					  lvToTierAtMaterials(item.itemLevel) == $scope.Filter.Tier2 ||
					  lvToTierAtMaterials(item.itemLevel) == $scope.Filter.Tier3 ||
					  lvToTierAtMaterials(item.itemLevel) == $scope.Filter.Tier4 ||
					  lvToTierAtMaterials(item.itemLevel) == $scope.Filter.Tier5;
	  };
	  
		//toggle select all tier
		var isAllTierOn = false;
		$scope.selectTier = function(){
			if(isAllTierOn)
				{
				isAllTierOn = false;
				$scope.Filter.Tier1			= false;
				$scope.Filter.Tier2			= false;
				$scope.Filter.Tier3			= false;
				$scope.Filter.Tier4			= false;
				$scope.Filter.Tier5			= false;
				$(".materials-tier-options label").each(function(){$(this).removeClass("filter-selected");});
				}
			else
				{
				isAllTierOn = true;
				$scope.Filter.Tier1			= 1;
				$scope.Filter.Tier2			= 2;
				$scope.Filter.Tier3			= 3;
				$scope.Filter.Tier4			= 4;
				$scope.Filter.Tier5			= 5;
				$(".materials-tier-options label").each(function(){$(this).addClass("filter-selected");});
				}
		};
		
		//toggle select all material
		var isAllMatOn = false;
		$scope.selectMaterials = function(){
			if(isAllMatOn)
				{
				isAllMatOn = false;
				$scope.Filter.ore		= false;
				$scope.Filter.metal		= false;
				$scope.Filter.log		= false;
				$scope.Filter.cloth		= false;
				$scope.Filter.herb		= false;
				$scope.Filter.limb		= false;
				$scope.Filter.scale		= false;
				$scope.Filter.tooth		= false;
				$scope.Filter.fur		= false;
				$scope.Filter.plate		= false;
				$scope.Filter.blade		= false;
				$scope.Filter.hilt		= false;
				$scope.Filter.crystal	= false;
				$scope.Filter.gem	= false;
				$scope.Filter.rune	= false;
				$scope.Filter.shell		= false;
				$scope.Filter.claw		= false;
				$scope.Filter.horn		= false;
				$scope.Filter.misc		= false;
				$("#materials-subtype label").each(function(){$(this).removeClass("filter-selected");});
				}
			else
				{
				isAllMatOn = true;
				$scope.Filter.ore		= "ore";
				$scope.Filter.metal		= "metal";
				$scope.Filter.log		= "log";
				$scope.Filter.cloth		= "cloth";
				$scope.Filter.herb		= "herb";
				$scope.Filter.limb		= "limb";
				$scope.Filter.scale		= "scale";
				$scope.Filter.tooth		= "tooth";
				$scope.Filter.fur		= "fur";
				$scope.Filter.plate		= "plate";
				$scope.Filter.blade		= "blade";
				$scope.Filter.hilt		= "hilt";
				$scope.Filter.crystal	= "crystal";
				$scope.Filter.gem	= "gem";
				$scope.Filter.rune	= "rune";
				$scope.Filter.shell		= "shell";
				$scope.Filter.claw		= "claw";
				$scope.Filter.horn		= "horn";
				$scope.Filter.misc		= "misc";
				$("#materials-subtype label").each(function(){$(this).addClass("filter-selected");});
				}
		}; 
	})