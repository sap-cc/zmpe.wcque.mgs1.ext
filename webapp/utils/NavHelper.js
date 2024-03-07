sap.ui.define(["sap/i2d/mpe/lib/commons1/utils/NavHelper"], function (t) {
  "use strict";
  let e = t;
  e.navToActivityDetail = function (t, e, s, o) {
    var r;
    if (!t) {
      r =
        "ZProductionOrderOperationActy-process&" +
        "/OpActyNtwkInstance/" +
        e +
        "/OpActyNtwkElement/" +
        s +
        "/OpActyIsSeldForRtactvPostg/" +
        o;
    } else {
      r =
        "ZProductionOrderOperationActy-process&/ShopFloorItem/" +
        t +
        "/OpActyNtwkInstance/" +
        e +
        "/OpActyNtwkElement/" +
        s +
        "/OpActyIsSeldForRtactvPostg/" +
        o;
    }
    if (e && s) {
      var a =
        sap.ushell && sap.ushell.Container && sap.ushell.Container.getService;
      var i = a && a("CrossApplicationNavigation");
      if (i) {
        i.toExternal({ target: { shellHash: r } });
      }
    }
  };
  return e;
});
