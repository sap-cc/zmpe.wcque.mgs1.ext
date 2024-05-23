sap.ui.define([
	"i2d/mpe/wcqueue/manages1/controller/BaseController",
	"sap/i2d/mpe/lib/commons1/utils/NavHelper",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/core/routing/History",
	"sap/m/MessageBox",
	"i2d/mpe/wcqueue/manages1/model/formatter",
	"sap/i2d/mpe/lib/workuicomps1/util/BarCodeScanner",
	"sap/ui/model/resource/ResourceModel",
	"sap/ui/Device"
], function (B, N, J, F, H, M, f, a, R, D) {
	"use strict";
	return sap.ui.controller("customer.zmpe.wcque.mgs1.ext.controller.PerformWorkCustom", {
		//    formatter: f,
		   onInit: function () {

				N.navToActivityDetail = function (t, e, s, o) {
					var r;
					if (!t) {
					r =
					"ZProductionOrderOperationActyN-process&" +
					"/OpActyNtwkInstance/" +
					e +
					"/OpActyNtwkElement/" +
					s +
					"/OpActyIsSeldForRtactvPostg/" +
					o;
					} else {
					r =
					"ZProductionOrderOperationActyN-process&/ShopFloorItem/" +
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
					sap.ushell &&
					sap.ushell.Container &&
					sap.ushell.Container.getService;
					var i = a && a("CrossApplicationNavigation");
					if (i) {
					i.toExternal({ target: { shellHash: r } });
					}
					}
					};

		       var m = {
		           "materialVisible": false,
		           "orderVisible": false,
		           "startPageMessage": "",
		           "serialInputValue": "",
		           "materialInputValue": "",
		           "orderInputValue": "",
		           "operationInputValue": "",
		           "busy": false,
		           "bOrderEntryScreen": false,
		           "sOpActyNtwkInstance": "",
		           "sOpActyNtwkElement": ""
		       };
		       var o = new J(m);
		       this.setModel(o);
		       a.linkBarCodeScannerToControl(this.getView().byId("materialInput"), 58, this.readSFIFromBarCodeMS.bind(this));
		       a.linkBarCodeScannerToControl(this.getView().byId("serialInput"), 58, this.readSFIFromBarCodeMS.bind(this));
		       a.linkBarCodeScannerToControl(this.getView().byId("OrderInput"), 16, this.readSFIFromBarCodeOO.bind(this));
		       a.linkBarCodeScannerToControl(this.getView().byId("OperationInput"), 16, this.readSFIFromBarCodeOO.bind(this));
		       var r = this.getRouter();
		       r.attachRouteMatched(this._onRouteMatched, this);
		       var i = this.loadI18NFile();
		       this.getView().setModel(i, "common_i18n");
		       var d = new J(D);
		       this.getView().setModel(d, "device");
		   },
		//    readSFIFromBarCodeMS: function (b) {
		//        var n = b - 18;
		//        var m = b.substring(0, n);
		//        var s = b.substring(n);
		//        this.getView().byId("materialInput").setValue(m);
		//        this.getView().byId("serialInput").setValue(s).fireSubmit();
		//    },
		//    readSFIFromBarCodeOO: function (b) {
		//        var n = b.length - 4;
		//        var o = b.substring(0, n);
		//        var O = b.substring(n);
		//        this.getView().byId("OrderInput").setValue(o);
		//        this.getView().byId("OperationInput").setValue(O).fireSubmit();
		//    },
		//    _onRouteMatched: function (e) {
		//        var A = e.getParameters("arguments");
		//        if (A.arguments.inputType) {
		//            if (A.arguments.inputType === "order") {
		//                this.getModel().setProperty("/orderVisible", true);
		//                this.getModel().setProperty("/startPageMessage", this.getResourceBundle().getText("orderStartPageMessage"));
		//                a.linkBarCodeScannerToPage([
		//                    this.getView().byId("OrderInput").getId(),
		//                    this.getView().byId("OperationInput").getId()
		//                ], 16, this.readSFIFromBarCodeOO.bind(this));
		//                jQuery.sap.delayedCall(500, this, function () {
		//                    this.getView().byId("OrderInput").focus();
		//                });
		//            }
		//            if (A.arguments.inputType === "material") {
		//                this.getModel().setProperty("/materialVisible", true);
		//                this.getModel().setProperty("/startPageMessage", this.getResourceBundle().getText("materialStartPageMessageII"));
		//                a.linkBarCodeScannerToPage([
		//                    this.getView().byId("materialInput").getId(),
		//                    this.getView().byId("serialInput").getId()
		//                ], 58, this.readSFIFromBarCodeMS.bind(this));
		//                jQuery.sap.delayedCall(500, this, function () {
		//                    this.getView().byId("materialInput").focus();
		//                });
		//            }
		//        }
		//    },
		//    handleMaterialValueHelp: function (e) {
		//        var b = [];
		//        var i = e.getSource().getValue();
		//        this.inputId = e.getSource().getId();
		//        if (!this._valueHelpDialog) {
		//            this._valueHelpDialog = sap.ui.xmlfragment("i2d.mpe.wcqueue.manages1.fragments.MaterialHelpDialog", this);
		//            this.getView().addDependent(this._valueHelpDialog);
		//        }
		//        b.push(new F("Material", sap.ui.model.FilterOperator.Contains, i));
		//        this._valueHelpDialog.getBinding("items").filter(b);
		//        this._valueHelpDialog.open(i);
		//    },
		//    _handleMaterialValueHelpSearch: function (e) {
		//        var b = [];
		//        var v = e.getParameter("value");
		//        b = new sap.ui.model.Filter({
		//            and: false,
		//            filters: [
		//                new sap.ui.model.Filter("Material", sap.ui.model.FilterOperator.Contains, v),
		//                new sap.ui.model.Filter("MaterialName", sap.ui.model.FilterOperator.Contains, v),
		//                new sap.ui.model.Filter("SerialNumber", sap.ui.model.FilterOperator.Contains, v),
		//                new sap.ui.model.Filter("SASStatusName", sap.ui.model.FilterOperator.Contains, v),
		//                new sap.ui.model.Filter("OperationActivityName", sap.ui.model.FilterOperator.Contains, v)
		//            ]
		//        });
		//        e.getSource().getBinding("items").filter(b);
		//    },
		//    _handleMaterialValueHelpClose: function (e) {
		//        var s = e.getParameter("selectedItem");
		//        if (s) {
		//            var m = this.getModel();
		//            m.setProperty("/materialInputValue", e.getParameter("selectedItem").getCells()[0].getText());
		//            m.setProperty("/serialInputValue", e.getParameter("selectedItem").getCells()[2].getText());
		//            this.onMaterialEnterPressed();
		//        }
		//        e.getSource().getBinding("items").filter([]);
		//    },
		//    handleSerialValueHelp: function (e) {
		//        var b = [];
		//        var i = e.getSource().getValue();
		//        this.inputId = e.getSource().getId();
		//        if (!this._valueHelpSerialDialog) {
		//            this._valueHelpSerialDialog = sap.ui.xmlfragment("i2d.mpe.wcqueue.manages1.fragments.SerialHelpDialog", this);
		//            this.getView().addDependent(this._valueHelpSerialDialog);
		//        }
		//        b.push(new F("SerialNumber", sap.ui.model.FilterOperator.Contains, i));
		//        this._valueHelpSerialDialog.getBinding("items").filter(b);
		//        this._valueHelpSerialDialog.open(i);
		//    },
		//    _handleSerialValueHelpSearch: function (e) {
		//        var b = [];
		//        var v = e.getParameter("value");
		//        var o;
		//        var O;
		//        try {
		//            o = this.getModel().getProperty("/bOrderEntryScreen");
		//        } catch (E) {
		//            O = true;
		//        }
		//        b = new sap.ui.model.Filter({
		//            and: false,
		//            filters: [
		//                new sap.ui.model.Filter("SerialNumber", sap.ui.model.FilterOperator.Contains, v),
		//                new sap.ui.model.Filter("Material", sap.ui.model.FilterOperator.Contains, v),
		//                new sap.ui.model.Filter("MaterialName", sap.ui.model.FilterOperator.Contains, v),
		//                new sap.ui.model.Filter("SASStatusName", sap.ui.model.FilterOperator.Contains, v),
		//                new sap.ui.model.Filter("OperationActivityName", sap.ui.model.FilterOperator.Contains, v)
		//            ]
		//        });
		//        if (o) {
		//            var c = this.getView().byId("OrderInput");
		//            var s = c.getProperty("value");
		//            if (s !== "") {
		//                b.push(new F("ManufacturingOrder", sap.ui.model.FilterOperator.EQ, s));
		//            }
		//            var d = this.getView().byId("OperationInput");
		//            var g = d.getProperty("value");
		//            if (g !== "") {
		//                b.push(new F("ManufacturingOrderOperation", sap.ui.model.FilterOperator.EQ, g));
		//            }
		//        }
		//        e.getSource().getBinding("items").filter(b);
		//    },
		//    _handleSerialValueHelpClose: function (e) {
		//        var o;
		//        var O;
		//        try {
		//            o = this.getModel().getProperty("/bOrderEntryScreen");
		//        } catch (E) {
		//            O = true;
		//        }
		//        var s = e.getParameter("selectedItem").getBindingContext("ExecutionService").getObject();
		//        if (s) {
		//            if (o || O) {
		//                N.navToActivityDetail(s.ShopFloorItem, s.OpActyNtwkInstance, s.OpActyNtwkElement, s.OpActyIsSeldForRtactvPostg);
		//            } else {
		//                var m = this.getModel();
		//                m.setProperty("/materialInputValue", s.Material);
		//                m.setProperty("/serialInputValue", s.SerialNumber);
		//                this.onMaterialEnterPressed();
		//            }
		//        }
		//        e.getSource().getBinding("items").filter([]);
		//    },
		//    onSuggestionSerialItemSelected: function (e) {
		//        var s = e.getParameter("selectedRow");
		//        var S = s.getCells()[0].getProperty("text");
		//        var m = s.getCells()[1].getProperty("text").toUpperCase();
		//        var o = this.getModel();
		//        o.setProperty("/materialInputValue", m);
		//        o.setProperty("/serialInputValue", S);
		//        this.onMaterialEnterPressed();
		//    },
		//    onSuggestionMaterialItemSelected: function (e) {
		//        var s = e.getParameter("selectedRow");
		//        var m = s.getCells()[0].getProperty("text").toUpperCase();
		//        var S = s.getCells()[2].getProperty("text");
		//        var o = this.getModel();
		//        o.setProperty("/materialInputValue", m);
		//        o.setProperty("/serialInputValue", S);
		//        this.onMaterialEnterPressed();
		//    },
		//    onSuggestSerialInput: function (e) {
		//        var t = e.getParameter("suggestValue");
		//        var b = [];
		//        if (t) {
		//            b.push(new F("SerialNumber", sap.ui.model.FilterOperator.Contains, t));
		//        }
		//        var m = this.getView().byId("materialInput");
		//        var s = m.getProperty("value").toUpperCase();
		//        if (s !== "") {
		//            b.push(new F("Material", sap.ui.model.FilterOperator.EQ, s));
		//        }
		//        e.getSource().getBinding("suggestionRows").filter(b);
		//    },
		//    onSuggestMaterialInput: function (e) {
		//        var t = e.getParameter("suggestValue");
		//        var b = [];
		//        if (t) {
		//            b.push(new F("Material", sap.ui.model.FilterOperator.Contains, t));
		//        }
		//        var s = this.getView().byId("serialInput");
		//        var S = s.getProperty("value");
		//        if (S !== "") {
		//            b.push(new F("SerialNumber", sap.ui.model.FilterOperator.EQ, S));
		//        }
		//        e.getSource().getBinding("suggestionRows").filter(b);
		//    },
		//    onSuggestOrderInput: function (e) {
		//        var t = e.getParameter("suggestValue");
		//        var o = this.getView().byId("OperationInput");
		//        var O = o.getProperty("value");
		//        var m;
		//        if (t && O) {
		//            m = new sap.ui.model.Filter({
		//                and: true,
		//                filters: [
		//                    new sap.ui.model.Filter("ManufacturingOrder", sap.ui.model.FilterOperator.Contains, t),
		//                    new sap.ui.model.Filter("ManufacturingOrderOperation", sap.ui.model.FilterOperator.EQ, O)
		//                ]
		//            });
		//        } else if (t) {
		//            m = new sap.ui.model.Filter({
		//                and: true,
		//                filters: [new sap.ui.model.Filter("ManufacturingOrder", sap.ui.model.FilterOperator.Contains, t)]
		//            });
		//        }
		//        if (m) {
		//            e.getSource().getBinding("suggestionRows").filter(this.addOrderCategoryFilter(m));
		//        }
		//    },
		//    onSuggestionOrderItemSelected: function (e) {
		//        var s = e.getParameter("selectedRow");
		//        var m = this.getModel();
		//        var o = s.getCells()[0].getProperty("text");
		//        m.setProperty("/orderInputValue", o);
		//        var O = s.getCells()[1].getProperty("text");
		//        m.setProperty("/operationInputValue", O);
		//        this.onOrderEnterPressed();
		//    },
		//    handleOrderValueHelp: function (e) {
		//        var m;
		//        var i = e.getSource().getValue();
		//        this.inputId = e.getSource().getId();
		//        if (!this._valueHelpOrderDialog) {
		//            this._valueHelpOrderDialog = sap.ui.xmlfragment("i2d.mpe.wcqueue.manages1.fragments.OrderHelpDialog", this);
		//            this.getView().addDependent(this._valueHelpOrderDialog);
		//        }
		//        m = new sap.ui.model.Filter({
		//            and: true,
		//            filters: [new sap.ui.model.Filter("ManufacturingOrder", sap.ui.model.FilterOperator.Contains, i)]
		//        });
		//        this._valueHelpOrderDialog.getBinding("items").filter(this.addOrderCategoryFilter(m));
		//        this._valueHelpOrderDialog.open(i);
		//    },
		//    _handleOrderValueHelpSearch: function (e) {
		//        var m;
		//        var v = e.getParameter("value");
		//        m = new sap.ui.model.Filter({
		//            and: false,
		//            filters: [
		//                new sap.ui.model.Filter("ManufacturingOrder", sap.ui.model.FilterOperator.Contains, v),
		//                new sap.ui.model.Filter("ManufacturingOrderOperation", sap.ui.model.FilterOperator.Contains, v),
		//                new sap.ui.model.Filter("Material", sap.ui.model.FilterOperator.Contains, v),
		//                new sap.ui.model.Filter("MaterialName", sap.ui.model.FilterOperator.Contains, v)
		//            ]
		//        });
		//        e.getSource().getBinding("items").filter(this.addOrderCategoryFilter(m));
		//    },
		//    _handleOrderValueHelpClose: function (e) {
		//        var s = e.getParameter("selectedItem");
		//        if (s) {
		//            var m = this.getModel();
		//            m.setProperty("/orderInputValue", e.getParameter("selectedItem").getCells()[0].getText());
		//            m.setProperty("/operationInputValue", e.getParameter("selectedItem").getCells()[1].getText());
		//            this.onOrderEnterPressed();
		//        }
		//        e.getSource().getBinding("items").filter([]);
		//    },
		//    handleOperationValueHelp: function (e) {
		//        var m;
		//        var i = e.getSource().getValue();
		//        this.inputId = e.getSource().getId();
		//        if (!this._valueHelpOperationDialog) {
		//            this._valueHelpOperationDialog = sap.ui.xmlfragment("i2d.mpe.wcqueue.manages1.fragments.OperationHelpDialog", this);
		//            this.getView().addDependent(this._valueHelpOperationDialog);
		//        }
		//        m = new sap.ui.model.Filter([], false);
		//        m.aFilters.push(new sap.ui.model.Filter("ManufacturingOrderOperation", sap.ui.model.FilterOperator.Contains, i));
		//        this._valueHelpOperationDialog.getBinding("items").filter(this.addOrderCategoryFilter(m));
		//        this._valueHelpOperationDialog.open(i);
		//    },
		//    _handleOperationValueHelpSearch: function (e) {
		//        var m;
		//        var v = e.getParameter("value");
		//        m = new sap.ui.model.Filter({
		//            and: false,
		//            filters: [
		//                new sap.ui.model.Filter("ManufacturingOrderOperation", sap.ui.model.FilterOperator.Contains, v),
		//                new sap.ui.model.Filter("ManufacturingOrder", sap.ui.model.FilterOperator.Contains, v),
		//                new sap.ui.model.Filter("Material", sap.ui.model.FilterOperator.Contains, v),
		//                new sap.ui.model.Filter("MaterialName", sap.ui.model.FilterOperator.Contains, v)
		//            ]
		//        });
		//        e.getSource().getBinding("items").filter(this.addOrderCategoryFilter(m));
		//    },
		//    _handleOperationValueHelpClose: function (e) {
		//        var s = e.getParameter("selectedItem");
		//        if (s) {
		//            var m = this.getModel();
		//            m.setProperty("/operationInputValue", e.getParameter("selectedItem").getCells()[0].getText());
		//            m.setProperty("/orderInputValue", e.getParameter("selectedItem").getCells()[1].getText());
		//            this.onOrderEnterPressed();
		//        }
		//        e.getSource().getBinding("items").filter([]);
		//    },
		//    onSuggestOperationInput: function (e) {
		//        var t = e.getParameter("suggestValue");
		//        var o = this.getView().byId("OrderInput");
		//        var O = o.getProperty("value");
		//        var m;
		//        if (t && O) {
		//            m = new sap.ui.model.Filter({
		//                and: true,
		//                filters: [
		//                    new sap.ui.model.Filter("ManufacturingOrderOperation", sap.ui.model.FilterOperator.Contains, t),
		//                    new sap.ui.model.Filter("ManufacturingOrder", sap.ui.model.FilterOperator.EQ, O)
		//                ]
		//            });
		//        } else if (t) {
		//            m = new sap.ui.model.Filter({
		//                and: true,
		//                filters: [new sap.ui.model.Filter("ManufacturingOrderOperation", sap.ui.model.FilterOperator.Contains, t)]
		//            });
		//        }
		//        if (m) {
		//            e.getSource().getBinding("suggestionRows").filter(this.addOrderCategoryFilter(m));
		//        }
		//    },
		//    onSuggestionOperationItemSelected: function (e) {
		//        var s = e.getParameter("selectedRow");
		//        var m = this.getModel();
		//        var o = s.getCells()[0].getProperty("text");
		//        m.setProperty("/operationInputValue", o);
		//        var O = s.getCells()[1].getProperty("text");
		//        m.setProperty("/orderInputValue", O);
		//        this.onOrderEnterPressed();
		//    },
		//    addOrderFilter: function (m) {
		//        var b = new sap.ui.model.Filter({
		//            and: true,
		//            filters: [
		//                new sap.ui.model.Filter("OperationStatusInternalID", sap.ui.model.FilterOperator.NE, 8),
		//                new sap.ui.model.Filter("OperationStatusInternalID", sap.ui.model.FilterOperator.NE, 10),
		//                new sap.ui.model.Filter("OperationIsReleased", sap.ui.model.FilterOperator.EQ, "X")
		//            ]
		//        });
		//        var c = new sap.ui.model.Filter({
		//            and: true,
		//            filters: [
		//                m,
		//                b
		//            ]
		//        });
		//        return c;
		//    },
		//    addOrderCategoryFilter: function (m) {
		//        var b = new sap.ui.model.Filter({
		//            and: true,
		//            filters: [new sap.ui.model.Filter("ManufacturingOrderCategory", sap.ui.model.FilterOperator.EQ, "10")]
		//        });
		//        var c = new sap.ui.model.Filter({
		//            and: true,
		//            filters: [
		//                m,
		//                b
		//            ]
		//        });
		//        return c;
		//    },
		//    onNavBack: function () {
		//        var c = sap.ushell.Container.getService("CrossApplicationNavigation");
		//        a.removeBarCodeScannerToPage();
		//        c.toExternal({ target: { shellHash: "#Shell-home" } });
		//    },
		//    onMaterialEnterPressed: function () {
		//        var m = this.getModel();
		//        var s = m.getProperty("/serialInputValue");
		//        var b = m.getProperty("/materialInputValue").toUpperCase();
		//        var e;
		//        if (s === "") {
		//            e = this.getResourceBundle().getText("SerialNumberMissingII");
		//            M.error(e, {
		//                id: "serviceErrorMessageBox",
		//                actions: [M.Action.CLOSE],
		//                onClose: function () {
		//                    this._bMessageOpen = false;
		//                }.bind(this)
		//            });
		//        } else if (b === "") {
		//            e = this.getResourceBundle().getText("MaterialMissing");
		//            M.error(e, {
		//                id: "serviceErrorMessageBox",
		//                actions: [M.Action.CLOSE],
		//                onClose: function () {
		//                    this._bMessageOpen = false;
		//                }.bind(this)
		//            });
		//        } else {
		//            N.navFromMaterialEntry(this, b, s);
		//        }
		//    },
		//    onOrderEnterPressed: function () {
		//        var m = this.getModel();
		//        var o = m.getProperty("/orderInputValue");
		//        var O = m.getProperty("/operationInputValue");
		//        var e;
		//        if (o === "" || o.length > 12) {
		//            e = this.getResourceBundle().getText("OrderMissing");
		//            if (o.length > 12) {
		//                e = this.getResourceBundle().getText("EnterValidOrderNumber");
		//                m.setProperty("/orderInputValue", "");
		//            }
		//            M.error(e, {
		//                id: "serviceErrorMessageBox",
		//                actions: [M.Action.CLOSE],
		//                onClose: function () {
		//                    this._bMessageOpen = false;
		//                }.bind(this)
		//            });
		//        } else if (O === "" || O.length > 4) {
		//            e = this.getResourceBundle().getText("OperationMissing");
		//            if (O.length > 4) {
		//                e = this.getResourceBundle().getText("EnterValidOperationNumber");
		//                m.setProperty("/operationInputValue", "");
		//            }
		//            M.error(e, {
		//                id: "serviceErrorMessageBox",
		//                actions: [M.Action.CLOSE],
		//                onClose: function () {
		//                    this._bMessageOpen = false;
		//                }.bind(this)
		//            });
		//        } else {
		//            N.navFromOrderEntry(this, o, O);
		//        }
		//    },
		//    onBeforeExit: function () {
		//        a.removeBarCodeScannerToPage();
		//    },
		//    loadI18NFile: function () {
		//        var i = jQuery.sap.getModulePath("sap.i2d.mpe.lib.commons1") + "/" + "i18n/i18n.properties";
		//        return new R({ bundleUrl: i });
		//    }
	});
});