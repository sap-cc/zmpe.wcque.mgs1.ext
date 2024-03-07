sap.ui.define([
	"sap/i2d/mpe/lib/commons1/utils/NavHelper"
	], 
	function(NavHelper) {
		"use strict";
		
		let navHelper = NavHelper;
		
		navHelper.navToActivityDetail = function (sShopFloorItem, sOpActyNtwkInstance, sOpActyNtwkElement, sOpActyIsSeldForRtactvPostg) {
			var shellHash;
			if (!sShopFloorItem) {
				shellHash = "ZProductionOrderOperationActy-process&" +
					"/OpActyNtwkInstance/" + sOpActyNtwkInstance + "/OpActyNtwkElement/" + sOpActyNtwkElement + "/OpActyIsSeldForRtactvPostg/" +
					sOpActyIsSeldForRtactvPostg;
			} else {
				shellHash = "ZProductionOrderOperationActy-process&/ShopFloorItem/" + sShopFloorItem +
					"/OpActyNtwkInstance/" + sOpActyNtwkInstance + "/OpActyNtwkElement/" + sOpActyNtwkElement + "/OpActyIsSeldForRtactvPostg/" +
					sOpActyIsSeldForRtactvPostg;
			}
	
			if (sOpActyNtwkInstance && sOpActyNtwkElement) {
				var fgetService = sap.ushell && sap.ushell.Container && sap.ushell.Container.getService;
				var oCrossAppNavigator = fgetService && fgetService("CrossApplicationNavigation");
				// trigger navigation
				if (oCrossAppNavigator) {
	
					oCrossAppNavigator.toExternal({
						target: {
							shellHash: shellHash
						}
					});
				}
			}
		};
		
		return navHelper;
	});