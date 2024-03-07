sap.ui.define(["sap/i2d/mpe/lib/commons1/utils/util"], function (e) {
  "use strict";
  let i = e;
  i.createSearchFilterObject = function (e) {
    var i;
    if (e !== null && e !== undefined) {
      i = new sap.ui.model.Filter({
        and: false,
        filters: [
          new sap.ui.model.Filter(
            "ManufacturingOrder",
            sap.ui.model.FilterOperator.Contains,
            e
          ),
          new sap.ui.model.Filter(
            "Material",
            sap.ui.model.FilterOperator.Contains,
            e
          ),
          new sap.ui.model.Filter(
            "MaterialName",
            sap.ui.model.FilterOperator.Contains,
            e
          ),
          new sap.ui.model.Filter(
            "ZZWBSElement",
            sap.ui.model.FilterOperator.Contains,
            e
          ),
        ],
      });
    }
    return i;
  };
  return i;
});
