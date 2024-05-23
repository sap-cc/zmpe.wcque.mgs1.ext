// sap.ui.controller("customer.zmpe.wcque.mgs1.ext.blocks.OperationInProgressControllerCustom", {

/*
 * Copyright (C) 2009-2021 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/i2d/mpe/lib/commons1/utils/formatter",
    "sap/ui/core/format/NumberFormat",
    "sap/i2d/mpe/lib/popovers1/fragments/MaterialController",
    "sap/i2d/mpe/lib/popovers1/fragments/ProductionOrderController",
    "sap/i2d/mpe/lib/popovers1/fragments/ProductionOrderOperationsController",
    "sap/ui/model/resource/ResourceModel",
    "sap/i2d/mpe/lib/commons1/utils/util",
    "sap/i2d/mpe/lib/commons1/fragments/OrderOperationStatus",
    "sap/i2d/mpe/lib/commons1/utils/NavHelper",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Filter",
    "sap/ui/model/json/JSONModel",
  ],
  function (C, F, N, M, P, O, R, r, a, b, c, d, J) {
    "use strict";
    return C.extend(
      "customer.zmpe.wcque.mgs1.ext.blocks.OperationInProgressControllerCustom",
      {
        formatter: F,
        reuseUtil: r,
        onInit: function () {

          b.navToActivityDetail = function (t, e, s, o) {
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


          var i = this.loadI18NFile();
          this.getView().setModel(i, "common_i18n");
          this.oMaterialPop = new M();
          this.oProductionOrderPop = new P();
          this.oOperationPop = new O();
          this.getView()
            .byId("idOperationInProgressTable")
            .setIgnoreFromPersonalisation(
              "ManufacturingOrder,OrderInternalID,OrderIsShopFloorOrder,OrderOperationInternalID,ManufacturingOrderSequence,MaterialName,MfgOrderOperationReadyQuantity,MfgOrderOperationText,OpPlannedTotalQuantity,OperationUnit,OpLtstSchedldExecStrtDte,OpLtstSchedldExecEndDte,OpActualExecutionStartDate,OpActualExecutionEndDate,OpPlannedScrapQuantity,OperationYieldDeviationQty,OperationHasScrapQualityIssue,OpActyConfIsSFIBased,ExecutionEndLatenessInHours,ExecutionEndLatenessInMinutes,ExecutionStartLatenessInHours,ExecutionStartLatenessInMins,OperationHasMissingComponents,OperationHasProductionHold,OperationHasScrapQualityIssue,OperationIsClosed,OperationIsConfirmed,OperationIsCreated,OperationIsDeleted,OperationIsDelivered,OperationIsPartiallyConfirmed,OperationIsPartiallyDelivered,OperationIsPrinted,OperationIsReleased,OperationIsScheduled,OperationIsTechlyCompleted,OperationStartDeviationDays,OperationStatusInternalID,OpExecutionCompletedQuantity,OpHasAssgdProdnRsceTools,PlannedEndDateDvtnInDays,WorkCenterTypeCode,MfgOrderOperationReadyQuantity,WorkCenterInternalID,OpLtstSchedldExecStrtTme,OpLtstSchedldExecStrtDte,OpLtstSchedldExecEndDte,OpLtstSchedldExecEndTme,OperationActivityNetwork,OpActyNtwkVersionCounter,SupplyArea,OpTotalConfirmedScrapQty,OperationExecutionEndIsLate,OpActyNtwkInstance"
            );
          var v;
          v = new J({
            allIssuesCount: 0,
            showOnlyHoldIssues: false,
            showOnlyRdyToFnshIssues: false,
          });
          this.getView().setModel(v, "idOperationInProgressTable");
          this.oViewModel = this.getView().getModel(
            "idOperationInProgressTable"
          );
          this.oOpsDetailModelData = {
            WorkCenter: "",
            ProductionPlant: "",
            SearchText: "",
          };
        },
        loadI18NFile: function () {
          var i =
            jQuery.sap.getModulePath("sap.i2d.mpe.lib.commons1") +
            "/" +
            "i18n/i18n.properties";
          return new R({ bundleUrl: i });
        },
        onAfterRendering: function () {},
        determineTotalNumberOfEntries: function () {
          var m = this.getView().getModel("DetailModel");
          var f = r.getFilterForOpInProcess();
          var e = r.getFilterForDefaultWorkCenterPlant(m);
          var g = new sap.ui.model.Filter({
            filters: [
              new sap.ui.model.Filter(
                "OperationHasProductionHold",
                sap.ui.model.FilterOperator.EQ,
                false
              ),
            ],
          });
          var h = r.getFilterForOpHasNoProdnHoldNoMisgComp();
          var B = this.getView().byId("idSearchField").getValue();
          if (B) {
            var i = r.createSearchFilterObject(B);
            if (i) {
              e.aFilters.push(i);
            }
          }
          var u = r.getUrlParametersForInlinecountAllPages();
          var p = {
            urlParameters: u,
            filters: [new sap.ui.model.Filter({ and: true, filters: [e] })],
            success: function (D) {
              var v;
              if (D.__count > 0) {
                v = new J({ oDataCount3: D.__count });
                this.getView().setModel(v, "view2");
              } else {
                v = new J({ oDataCount3: "0" });
                this.getView().setModel(v, "view2");
              }
            }.bind(this),
            error: function (E) {
              sap.m.MessageBox.error(E);
            },
          };
          this.getView().getModel().read("/C_MfgProcgExecOperation", p);
          var j = {
            urlParameters: u,
            filters: [new sap.ui.model.Filter({ and: true, filters: [e, g] })],
            success: function (D) {
              var v;
              if (D.__count > 0) {
                v = new J({ oDataCount: D.__count });
                this.getView().setModel(v, "view1");
              } else {
                v = new J({ oDataCount: "0" });
                this.getView().setModel(v, "view1");
              }
            }.bind(this),
            error: function (E) {
              sap.m.MessageBox.error(E);
            },
          };
          this.getView().getModel().read("/C_MfgProcgExecOperation", j);
          var k = {
            urlParameters: u,
            filters: [new sap.ui.model.Filter({ and: true, filters: [e, h] })],
            success: function (D) {
              var v;
              if (D.__count > 0) {
                v = new J({ oDataCount2: D.__count });
                this.getView().setModel(v, "view");
              } else {
                v = new J({ oDataCount2: "0" });
                this.getView().setModel(v, "view");
              }
            }.bind(this),
            error: function (E) {
              sap.m.MessageBox.error(E);
            },
          };
          this.getView().getModel().read("/C_MfgProcgExecOperation", k);
        },
        handleBeforeRebindTable: function (e) {
          var m = this.getView().getModel("DetailModel");
          var o = m.getData();
          var D = o.WorkCenter;
          var s = o.ProductionPlant;
          var B = this.getView().byId("idSearchField").getValue();
          var f = e.getParameter("bindingParams");
          var g = e.getSource().getBindingContext();
          var S =
            "OrderInternalID,OrderOperationInternalID,WorkCenterText,WorkCenterLocation" +
            ",SupplyArea,WorkCenterResponsible,WorkCenterResponsibleName,PlantName" +
            ",ExecutionEndLatenessInMinutes,ExecutionStartLatenessInMins,OpTotalConfirmedScrapQty,WorkCenterInternalID,OrderIsShopFloorOrder";
          var p = f.parameters.select;
          S = p + "," + S;
          var h = { select: S, useBatchRequests: true };
          f.parameters = h;
          if (
            s !== this.oOpsDetailModelData.ProductionPlant ||
            D !== this.oOpsDetailModelData.WorkCenter ||
            (B !== "" && B !== this.oOpsDetailModelData.SearchText)
          ) {
            this.oOpsDetailModelData.SearchText = B;
            this.determineTotalNumberOfEntries();
            o = m.getData();
            this.oOpsDetailModelData.WorkCenter = o.WorkCenter;
            this.oOpsDetailModelData.ProductionPlant = o.ProductionPlant;
            D = o.WorkCenter;
            s = o.ProductionPlant;
            var t = this;
            f.events = {
              dataReceived: function (v) {
                var x = v.getParameters().data.results;
                if (x.length > 0) {
                  t.getView().getModel("DetailModel").setData(x[0]);
                  t.oOpsDetailModelData.WorkCenter = x[0].WorkCenter;
                  t.oOpsDetailModelData.ProductionPlant = x[0].ProductionPlant;
                }
              },
            };
          } else if (B === "") {
            this.oOpsDetailModelData.SearchText = "";
          }
          // f.sorter.push(
          //   new sap.ui.model.Sorter("OpActualExecutionStartDate", true)
          // );
          var T = f.filters;
          var i = new sap.ui.model.Filter([], true);
          var j = r.getFilterForOpInProcess();
          var j2 = r.getFilterForOpIsReleased();
          var j3 = r.getFilterForOpHasNoProdnHoldNoMisgComp();
          var j4 = r.getFilterForOpNotPrtlyConfdNotConfdNotDeltd();
          var j5 = r.getFilterForOpNotClosed();

          // this.showAllOperations();
          var k;
          if (B) {
            k = r.createSearchFilterObject(B);
            if (k) {
              i.aFilters.push(k);
            }
          }
          if (this.returnIssueStatusValue(e) === true) {
            var I = new sap.ui.model.Filter({
              and: false,
              filters: [
                new sap.ui.model.Filter(
                  "OperationHasProductionHold",
                  sap.ui.model.FilterOperator.EQ,
                  false
                ),
              ],
            });
          } else if (this.returnAllRdyToFnshStatusValue(e) === true) {
            var l = r.getFilterForOpHasNoProdnHoldNoMisgComp();
          }
          var n;
          if (D && s) {
            n = [
              new sap.ui.model.Filter(
                "WorkCenter",
                sap.ui.model.FilterOperator.EQ,
                D
              ),
              new sap.ui.model.Filter(
                "ProductionPlant",
                sap.ui.model.FilterOperator.EQ,
                s
              ),
            ];
          } else if (g) {
            var q = g.getPath();
            var u = e.getSource().getModel().getContext(q).getObject();
            n = [
              new sap.ui.model.Filter(
                "WorkCenterInternalID",
                sap.ui.model.FilterOperator.EQ,
                u.WorkCenterInternalID
              ),
              new sap.ui.model.Filter(
                "ProductionPlant",
                sap.ui.model.FilterOperator.EQ,
                u.ProductionPlant
              ),
            ];
          }
          var w = new sap.ui.model.Filter({ and: true, filters: n });
          var W;
          var W1;
          if (this.returnIssueStatusValue(e) === true) {
            (W1 = new sap.ui.model.Filter({
              or: true,
              filters: [
                new sap.ui.model.Filter(
                  "OperationIsPartiallyConfirmed",
                  sap.ui.model.FilterOperator.EQ,
                  " "
                ),
                new sap.ui.model.Filter(
                  "OperationIsConfirmed",
                  sap.ui.model.FilterOperator.EQ,
                  " "
                ),
                new sap.ui.model.Filter(
                  "OperationIsDeleted",
                  sap.ui.model.FilterOperator.EQ,
                  " "
                ),
              ],
            })),
              //   W1 = new sap.ui.model.Filter({ or: true, filters: [j, j2, j3, j4, j5] }); OperationIsConfirmed OperationIsConfirmed OperationIsDeleted
              (W = new sap.ui.model.Filter({ and: true, filters: [W1, w, I] })); //dmr remove j in first position
            if ((D && s) || g) {
              i.aFilters.push(W);
              T.push(i);
            }
          } else if (this.returnAllRdyToFnshStatusValue(e) === true) {
            (W1 = new sap.ui.model.Filter({
              or: true,
              filters: [
                new sap.ui.model.Filter(
                  "OperationIsPartiallyConfirmed",
                  sap.ui.model.FilterOperator.EQ,
                  " "
                ),
                new sap.ui.model.Filter(
                  "OperationIsConfirmed",
                  sap.ui.model.FilterOperator.EQ,
                  " "
                ),
                new sap.ui.model.Filter(
                  "OperationIsDeleted",
                  sap.ui.model.FilterOperator.EQ,
                  " "
                ),
              ],
            })),
              // W1 = new sap.ui.model.Filter({ or: true, filters: [j, j2, j3, j4, j5] });
              (W = new sap.ui.model.Filter({ and: true, filters: [W1, w, l] })); //dmr remove j in first position
            if ((D && s) || g) {
              i.aFilters.push(W);
              T.push(i);
            }
          } else {
            (W1 = new sap.ui.model.Filter({
              or: true,
              filters: [
                new sap.ui.model.Filter(
                  "OperationIsPartiallyConfirmed",
                  sap.ui.model.FilterOperator.EQ,
                  " "
                ),
                new sap.ui.model.Filter(
                  "OperationIsConfirmed",
                  sap.ui.model.FilterOperator.EQ,
                  " "
                ),
                new sap.ui.model.Filter(
                  "OperationIsDeleted",
                  sap.ui.model.FilterOperator.EQ,
                  " "
                ),
              ],
            })),
              // W1 = new sap.ui.model.Filter({ or: true, filters: [j, j2, j3, j4, j5] });
              (W = new sap.ui.model.Filter({ and: true, filters: [W1, w] })); //dmr remove j in first position
            if ((D && s) || g) {
              i.aFilters.push(W);
              T.push(i);
            }
          }
        },
        handleCoverageChartPress: function (e) {
          var o = e.getSource().getBindingContext();
          var m = o.getModel();
          var s = m.getContext(o.getPath()).getObject();
          var q = [];
          var Q = [];
          var f = [];
          var g = s.OpTotalConfirmedYieldQty;
          var u = s.OperationUnit;
          if (g !== undefined && g >= 0) {
            g = N.getFloatInstance({}).format(g);
            q.push(g);
            Q.push("grey");
            var p = this.getView()
              .getModel("common_i18n")
              .getResourceBundle()
              .getText("processed");
            f.push(p);
          }
          var h = s.MfgOrderOperationReadyQuantity;
          var i = this.getView()
            .getModel("common_i18n")
            .getResourceBundle()
            .getText("ready");
          if (h !== undefined && h >= 0) {
            h = N.getFloatInstance({}).format(h);
            q.push(h);
            Q.push("green");
            f.push(i);
          } else if (h !== undefined && h < 0) {
            h = N.getFloatInstance({}).format(0);
            q.push(h);
            Q.push("green");
            f.push(i);
          }
          var j = s.MfgOrderOperationNotReadyQty;
          var n = this.getView()
            .getModel("common_i18n")
            .getResourceBundle()
            .getText("notReady");
          if (j !== undefined && j >= 0) {
            j = N.getFloatInstance({}).format(j);
            q.push(j);
            Q.push("orange");
            f.push(n);
          } else if (j !== undefined && j < 0) {
            j = N.getFloatInstance({}).format(0);
            q.push(j);
            Q.push("orange");
            f.push(n);
          }
          r.openStackedBarChartPopover2(this, e, q, Q, f, u);
        },
        handleIconPress: function (e) {
          var o = e.getSource().getColor();
          if (o === "#d9d9d9") {
            return "";
          } else {
            var w = true;
            r.openIssuePopOver(e, this, w);
          }
        },
        handleMaterialLinkPress: function (e) {
          var o = e.getSource().getBindingContext();
          var m = o.getModel();
          var p = m.getProperty("ProductionPlant", o);
          var s = m.getProperty("Material", o);
          this.oMaterialPop.openMaterialPopOver(e, this, s, p);
        },
        handleOrderNumberPress: function (e) {
          var s = e.getSource();
          var p = s.getBindingContext().sPath;
          var o = s.getModel().getProperty(p);
          var m = o.ManufacturingOrder || o.MRPElement;
          this.oProductionOrderPop.openProdOrdPopOver(e, this, m);
        },
        handleOperationPress: function (e) {
          var o = e.getSource().getBindingContext();
          var s = o.getPath().split("OrderInternalID='")[1].split("',")[0];
          var f = o
            .getPath()
            .split("OrderOperationInternalID='")[1]
            .split("')")[0];
          this.oOperationPop.openOperationsPopOver(e, this, s, f);
        },
        handleOperationSelect: function (e) {
          var p = e.getParameter("listItem").getBindingContextPath();
          var o = r.getObjectPageRefrence();
          if (o && o.getRouter()) {
            var f = o.getRouter();
            var A = o.iAppState;
            f.navTo(
              "object",
              { operationId: p.substr(1), iAppState: A },
              false
            );
          } else {
            var g = sap.ushell.Container.getService(
              "CrossApplicationNavigation"
            );
            g.toExternal({
              target: {
                shellHash:
                  "#ManufacturingOrderOperation-manage&/ManageOperations" + p,
              },
            });
          }
        },
        _filter: function () {
          var f = null;
          if (this._oGlobalFilter) {
            f = this._oGlobalFilter;
          }
          this.getView()
            .byId("idOperationInProgressFirstTable")
            .getBinding("items")
            .filter(f, "Application");
        },
        handleOrdersSearch: function (e) {
          this._oGlobalFilter = null;
          this.showAllOperations();
          // var m = this.getView().getModel("DetailModel");
          // var o = m.getData();
          // var D = o.WorkCenter;
          // var s = o.ProductionPlant;
          // var q = e.getParameter("query");
          // this._oGlobalFilter = null;
          // // var B = e.getSource().getBindingContext();
          // // // var f = r.getFilterForOpInProcess();
          // // var g = r.createSearchFilterObject(q);
          // // // var h = r.getFilterForOpInProcess();
          // // // var i = new sap.ui.model.Filter({
          // // //   filters: [
          // // // 	new sap.ui.model.Filter(
          // // // 	  "OperationHasProductionHold",
          // // // 	  sap.ui.model.FilterOperator.EQ,
          // // // 	  false
          // // // 	),
          // // //   ],
          // // // });
          // // var j = r.getFilterForOpHasNoProdnHoldNoMisgComp();
          // // // var k = new sap.ui.model.Filter({ and: true, filters: [i] });
          // // var l = new sap.ui.model.Filter({ and: true, filters: [j] });
          // var w;
          // if (D && s) {
          //   w = [
          // 	new sap.ui.model.Filter(
          // 	  "WorkCenter",
          // 	  sap.ui.model.FilterOperator.EQ,
          // 	  D
          // 	),
          // 	new sap.ui.model.Filter(
          // 	  "ProductionPlant",
          // 	  sap.ui.model.FilterOperator.EQ,
          // 	  s
          // 	),
          //   ];
          // } else if (B) {
          //  var p = B.getPath();
          //  var n = e.getSource().getModel().getContext(p).getObject();
          //   w = [
          // 	new sap.ui.model.Filter(
          // 	  "WorkCenterInternalID",
          // 	  sap.ui.model.FilterOperator.EQ,
          // 	  n.WorkCenterInternalID
          // 	),
          // 	new sap.ui.model.Filter(
          // 	  "ProductionPlant",
          // 	  sap.ui.model.FilterOperator.EQ,
          // 	  n.ProductionPlant
          // 	),
          //   ];
          // }
          // var W = new sap.ui.model.Filter({ and: true, filters: w });
          // var u = r.getUrlParametersForInlinecountAllPages();
          // var t = {
          //   urlParameters: u,
          //   filters: [
          // 	new sap.ui.model.Filter({ and: true, filters: [W] }),
          //   ],
          //   success: function (y) {
          // 	var V;
          // 	if (y.__count > 0) {
          // 	  V = new J({ oDataCount3: y.__count });
          // 	  this.getView().setModel(V, "view2");
          // 	} else {
          // 	  V = new J({ oDataCount3: "0" });
          // 	  this.getView().setModel(V, "view2");
          // 	}
          //   }.bind(this),
          //   error: function (E) {
          // 	sap.m.MessageBox.error(E);
          //   },
          // };
          // this.getView().getModel().read("/C_MfgProcgExecOperation", t);
          // var v = {
          //   urlParameters: u,
          //   filters: [
          // 	new sap.ui.model.Filter({ and: true, filters: [k, W] }),
          //   ],
          //   success: function (y) {
          // 	var V;
          // 	if (y.__count > 0) {
          // 	  V = new J({ oDataCount: y.__count });
          // 	  this.getView().setModel(V, "view1");
          // 	} else {
          // 	  V = new J({ oDataCount: "0" });
          // 	  this.getView().setModel(V, "view1");
          // 	}
          //   }.bind(this),
          //   error: function (E) {
          // 	sap.m.MessageBox.error(E);
          //   },
          // };
          // this.getView().getModel().read("/C_MfgProcgExecOperation", v);
          // var x = {
          //   urlParameters: u,
          //   filters: [
          // 	new sap.ui.model.Filter({ and: true, filters: [l, W] }),
          //   ],
          //   success: function (y) {
          // 	var V;
          // 	if (y.__count > 0) {
          // 	  V = new J({ oDataCount2: y.__count });
          // 	  this.getView().setModel(V, "view");
          // 	} else {
          // 	  V = new J({ oDataCount2: "0" });
          // 	  this.getView().setModel(V, "view");
          // 	}
          //   }.bind(this),
          //   error: function (E) {
          // 	sap.m.MessageBox.error(E);
          //   },
          // };
          // this.getView().getModel().read("/C_MfgProcgExecOperation", x);
          // if (this.returnIssueStatusValue(e) === true) {
          //   this._oGlobalFilter = new d({ and: true, filters: [k, W] });
          //   this._filter();
          // } else if (this.returnAllRdyToFnshStatusValue(e) === true) {
          //   this._oGlobalFilter = new d({ and: true, filters: [l, W] });
          //   this._filter();
          // } else {
          //   this._oGlobalFilter = new d({ and: true, filters: [W] });
          //   this._filter();
          // }
        },
        handleStatusLinkPress: function (e) {
          var s = e.getSource();
          var p = s.getBindingContext().sPath;
          var o = s.getModel().getProperty(p);
          var f = o.OperationStatusInternalID;
          a.openStatusPopOver(e, this, f);
        },
        handleItemSelect: function (e) {
          var p = e.getParameter("listItem").getBindingContextPath();
          var t = this.getView().byId("idOperationInProgressFirstTable");
          t.setBusy(true);
          var m = this.getView().getModel();
          var o = m.getProperty(p);
          var s = o.ManufacturingOrder;
          var f = o.ManufacturingOrderOperation;
          var g = o.OperationStatusInternalID;
          var h = this.getView()
            .getModel("common_i18n")
            .getResourceBundle()
            .getText("messageBoxHeader");
          var i = this.getView()
            .getModel("common_i18n")
            .getResourceBundle()
            .getText("messageBoxMessage");
          if (this.getView().getModel("objectView").oData.workCenterQueue) {
            if (g === "01") {
              sap.m.MessageBox.information(i, { title: h });
              t.setBusy(false);
            } else {
                b.navFromOrderEntry(this, s, f, t);
            //   this.navToActivityDetail(this, s, f, t);
            }
          } else {
            this.handleOperationSelect(e);
          }
        },
        onItemExecute: function (e) {
          var p = e.getSource().getBindingContext().sPath;
          var t = this.getView().byId("idOperationInProgressFirstTable");
          t.setBusy(true);
          var m = this.getView().getModel();
          var o = m.getProperty(p);
          var s = o.ManufacturingOrder;
          var f = o.ManufacturingOrderOperation;
          var g = o.OperationStatusInternalID;
          var h = o.OrderIsShopFloorOrder;
          var i = this.getView()
            .getModel("common_i18n")
            .getResourceBundle()
            .getText("messageBoxHeader");
          var j = this.getView()
            .getModel("common_i18n")
            .getResourceBundle()
            .getText("messageBoxMessage");
          if (this.getView().getModel("objectView").oData.workCenterQueue) {
            if (g === "01") {
              sap.m.MessageBox.information(j, { title: i });
              t.setBusy(false);
            } else if (!h) {
              b.navToConfirmProductionOperation(s, f);
              t.setBusy(false);
            } else {
              b.navFromOrderEntry(this, s, f, t);
                // this.navToActivityDetail(this, s, f, t);
            }
          } else {
            this.handleOperationSelect(e);
          }
        },

        navToActivityDetail: function (t, e, s, o) {
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
              i.toExternal({
                target: {
                  shellHash: r,
                },
              });
            }
          }
        },

        onDataReceived: function (e) {},
        handleOperationsBtnPress: function () {
          this.goAllOpTable = this.getView().byId("idOperationInProgressTable");
          this.goAllOpTable.rebindTable();
        },
        returnIssueStatusValue: function (e) {
          var i = this.getView().getModel("idOperationInProgressTable");
          var I = i.getData();
          return I.showOnlyHoldIssues;
        },
        returnAllRdyToFnshStatusValue: function (e) {
          var i = this.getView().getModel("idOperationInProgressTable");
          var I = i.getData();
          return I.showOnlyRdyToFnshIssues;
        },
        showAllOperations: function (e) {
          this.getView()
            .getModel("idOperationInProgressTable")
            .setProperty("/showOnlyHoldIssues", false);
          this.getView()
            .getModel("idOperationInProgressTable")
            .setProperty("/showOnlyRdyToFnshIssues", false);
        },
        showAllIssueOperations: function (e) {
          this.getView()
            .getModel("idOperationInProgressTable")
            .setProperty("/showOnlyHoldIssues", true);
        },
        showAllRdyToFnshIssuesOperations: function (e) {
          this.getView()
            .getModel("idOperationInProgressTable")
            .setProperty("/showOnlyHoldIssues", false);
          this.getView()
            .getModel("idOperationInProgressTable")
            .setProperty("/showOnlyRdyToFnshIssues", true);
        },
      }
    );
  }
);

/**
 * Called when a controller is instantiated and its View controls (if available) are already created.
 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
 * @memberOf customer.zmpe.wcque.mgs1.ext.blocks.OperationInProgressControllerCustom
 */
//	onInit: function() {
//
//	},

/**
 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
 * (NOT before the first rendering! onInit() is used for that one!).
 * @memberOf customer.zmpe.wcque.mgs1.ext.blocks.OperationInProgressControllerCustom
 */
//	onBeforeRendering: function() {
//
//	},

/**
 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
 * This hook is the same one that SAPUI5 controls get after being rendered.
 * @memberOf customer.zmpe.wcque.mgs1.ext.blocks.OperationInProgressControllerCustom
 */
//	onAfterRendering: function() {
//
//	},

/**
 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
 * @memberOf customer.zmpe.wcque.mgs1.ext.blocks.OperationInProgressControllerCustom
 */
//	onExit: function() {
//
//	},

// });
