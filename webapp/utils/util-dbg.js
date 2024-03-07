sap.ui.define([
		"sap/i2d/mpe/lib/commons1/utils/util"
	], 
	function(ReuseUtil) {
		"use strict";
	
		let util = ReuseUtil;
		
		util.createSearchFilterObject = function (sSearchValue) {
			var oFilter;
			if (sSearchValue !== null && sSearchValue !== undefined) {
				oFilter = new sap.ui.model.Filter({
					and: false,
					filters: [
						new sap.ui.model.Filter("ManufacturingOrder", sap.ui.model.FilterOperator.Contains, sSearchValue),
						new sap.ui.model.Filter("Material", sap.ui.model.FilterOperator.Contains, sSearchValue),
						new sap.ui.model.Filter("MaterialName", sap.ui.model.FilterOperator.Contains, sSearchValue),
						new sap.ui.model.Filter("ZZWBSElement", sap.ui.model.FilterOperator.Contains, sSearchValue)
					]
				});
			}
			return oFilter;
		};
		
		return util;
	});