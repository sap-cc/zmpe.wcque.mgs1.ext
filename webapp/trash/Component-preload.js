//@ui5-bundle customer/zmpe/wcque/mgs1/ext/Component-preload.js
jQuery.sap.registerPreloadedModules({
  version: "2.0",
  modules: {
    "customer/zmpe/wcque/mgs1/ext/Component.js":
      function () {
        jQuery.sap.declare(
          "customer.zmpe.wcque.mgs1.ext.Component"
        );
        sap.ui.component.load({
          name: "i2d.mpe.wcqueue.manages1",
          url: "/sap/bc/ui5_ui5/sap/MPE_WCQUE_MNGS1",
        });
        this.i2d.mpe.wcqueue.manages1.Component.extend(
          "customer.zmpe.wcque.mgs1.ext.Component",
          { metadata: { manifest: "json" } }
        );
      },
      "customer/zmpe/wcque/mgs1/ext/blocks/OperationInProgressBlockCustom.view.xml":
      '\n<mvc:View controllerName="customer.zmpe.wcque.mgs1.ext.blocks.OperationInProgressControllerCustom" xmlns:mvc="sap.ui.core.mvc"\n\txmlns:layout="sap.ui.layout" xmlns:core="sap.ui.core" xmlns:form="sap.ui.layout.form" xmlns="sap.m"\n\txmlns:microchart="sap.suite.ui.microchart" xmlns:smartTable="sap.ui.comp.smarttable" \n\txmlns:sfb="sap.ui.comp.smartfilterbar" dataReceived="onDataReceived"\n\txmlns:customData="http://schemas.sap.com/sapui5/extension/sap.ui.core.CustomData/1"><sfb:SmartFilterBar id="smartFilterBar"\n\t\t\t\t\tentitySet="{= ${DetailModel>/WorkCenter} &amp;&amp; ${DetailModel>/WorkCenter} !== \'\' ? \'C_MfgProcgExecOperation\' : \'C_Manageoperations\'}"\n\t\t\t\t\tpersistencyKey="UniqueAndStablePersistencyKey"><sfb:controlConfiguration></sfb:controlConfiguration><sfb:customData><core:CustomData key="defaultFilterBarExpanded" value=\'{"CustProductionOrderID": "true"}\'/><core:CustomData key="defaultShowAllFilters" value=\'{"CustProductionOrderID": "true"}\'/></sfb:customData></sfb:SmartFilterBar><smartTable:SmartTable demandPopin="true" beforeRebindTable="handleBeforeRebindTable" dataReceived="onDataReceived"\n\t\tentitySet="{= ${DetailModel>/WorkCenter} &amp;&amp; ${DetailModel>/WorkCenter} !== \'\' ? \'C_MfgProcgExecOperation\' : \'C_Manageoperations\'}"\n\tsmartFilterId="smartFilterBar"\n\t\tid="idOperationInProgressTable" persistencyKey="pKeyInProgressTable" showRowCount="true" tableType="ResponsiveTable" useExportToExcel="true"\n\t\tuseTablePersonalisation="true" useVariantManagement="true" noData="{common_i18n>noOperationsFound}"\n\t\tenableAutoBinding="{= ${DetailModel>/WorkCenter} &amp;&amp; ${DetailModel>/WorkCenter} !== \'\' ? true : false}"\n\t\t><smartTable:customToolbar><OverflowToolbar id="idToolBar" design="Transparent"><ToolbarSpacer></ToolbarSpacer><SearchField id="idSearchField" search="handleOrdersSearch" width="15%" class="sapUiSmallMargin" visible="false"/></OverflowToolbar></smartTable:customToolbar><smartTable:customData><core:CustomData key="p13nDialogSettings" value=\'\\{"columns":\\{"visible": true \\},"filter":\\{"visible": false\\}\\}\'/></smartTable:customData><Table fixedLayout="false" growing="true" id="idOperationInProgressFirstTable"\n\t\t\tgrowingScrollToLoad="{= ${DetailModel>/WorkCenter} &amp;&amp; ${DetailModel>/WorkCenter} !== \'\' ? true : false}"\n\t\t\tgrowingThreshold="{= ${DetailModel>/WorkCenter} &amp;&amp; ${DetailModel>/WorkCenter} !== \'\' ? 25 : 5}"\n\t\t\tsticky="ColumnHeaders,HeaderToolbar,InfoToolbar"><columns><Column\n\t\t\t\t\tcustomData:p13nData=\'\\{"columnKey":"CustProductionOrderID", "leadingProperty":["ManufacturingOrder", "OperationHasProductionHold", "ManufacturingOrderSequence","ManufacturingOrderOperation"] , "filterProperty" :["ManufacturingOrder"] , "sortProperty" :"ManufacturingOrder"\\}\'><header><Text text="{common_i18n>Order}" tooltip="{common_i18n>OrderTooltip}"/></header></Column><Column customData:p13nData=\'\\{"columnKey":"CustMaterial", "leadingProperty":["Material","MaterialName","ProductionPlant"]\\}\'><header><Text id="typeMaterial" text="{common_i18n>Material}" tooltip="{common_i18n>MaterialTooltip}"/></header></Column><Column\n\t\t\t\t\tcustomData:p13nData=\'\\{"columnKey":"OpTotalConfirmedYieldQty", "leadingProperty":["MfgOrderOperationText", "OpTotalConfirmedYieldQty", "WorkCenter", "OperationUnit","OpPlannedTotalQuantity","OperationExecutionEndIsLate","OperationExecutionStartIsLate","MfgOrderOperationReadyQuantity","MfgOrderOperationNotReadyQty"]\\}\'><header><Text id="typeOperation" text="{common_i18n>OperationProgressColumn}" tooltip="{common_i18n>OperationProgressColumnTooltip}"/></header></Column><Column hAlign="Center" customData:p13nData=\'\\{"columnKey":"CustStatus", "leadingProperty":["OperationStatusInternalID"]\\}\'><header><Text text="{common_i18n>Status}" tooltip="{common_i18n>StatusTooltip}"/></header></Column><Column\n\t\t\t\t\tcustomData:p13nData=\'\\{"columnKey":"Quantity", "leadingProperty":["OpTotalConfirmedYieldQty","OpPlannedTotalQuantity"],"sortProperty" :"OpTotalConfirmedYieldQty"\\}\'\n\t\t\t\t\thAlign="Center" id="idColumnQty"><header><Text text="{common_i18n>TooltipQuantity}" id="quantity" tooltip="{common_i18n>TooltipQuantity}"/></header></Column><Column\n\t\t\t\t\tcustomData:p13nData=\'\\{"columnKey":"FinishedQuantity", "leadingProperty":["OpTotalConfirmedYieldQty"],"sortProperty" :"OpTotalConfirmedYieldQty"\\}\'\n\t\t\t\t\tid="idColumnFinishQty" hAlign="Center"><header><Text text="{common_i18n>finishedQuantity}" id="finishedQuantity" tooltip="{common_i18n>finishedQuantity}"/></header></Column><Column hAlign="End"\n\t\t\t\t\tcustomData:p13nData=\'\\{"columnKey":"CustAchStart", "leadingProperty":["OpActualExecutionStartDate","OpActualExecutionStartTime"]\\}\'><header><Text text="{common_i18n>ActualStart}" tooltip="{common_i18n>ActualStartTooltip}"/></header></Column><Column hAlign="End"\n\t\t\t\t\tcustomData:p13nData=\'\\{"columnKey":"CustScheduleStart", "leadingProperty":["OpLtstSchedldExecStrtTme","OpLtstSchedldExecStrtDte"]\\}\'><header><Text text="{common_i18n>ScheduledStart}" tooltip="{common_i18n>ScheduledStartTooltip}"/></header></Column><Column hAlign="End"\n\t\t\t\t\tcustomData:p13nData=\'\\{"columnKey":"CustScheduleEnd", "leadingProperty":["OpLtstSchedldExecEndDte","OpLtstSchedldExecEndTme"]\\}\'><header><Text text="{common_i18n>ScheduledEnd}" tooltip="{common_i18n>ScheduledEndTooltip}"/></header></Column><Column hAlign="Left"\n\t\t\t\t\tcustomData:p13nData=\'\\{"columnKey":"CustIssue", "leadingProperty":["OperationHasProductionHold", "OperationExecutionStartIsLate","OperationHasMissingComponents", "OperationYieldDeviationQty", "OperationHasScrapQualityIssue"]\\}\'><header><Text text="{common_i18n>IssueHeader}" tooltip="{common_i18n>IssueTooltip}"/></header></Column><Column visible="false" customData:p13nData=\'\\{"columnKey":"EffectivityParameterDesc", "leadingProperty":["EffectivityParameterDesc"]\\}\'><header><Text\n\t\t\t\t\t\t\ttext="{=${/#C_MfgProcgExecOperationType/EffectivityParameterDesc/@sap:customLabel} === undefined ? ${/#C_MfgProcgExecOperationType/EffectivityParameterDesc/@sap:label} : ${/#C_MfgProcgExecOperationType/EffectivityParameterDesc/@sap:customLabel}}"/></header></Column><Column hAlign="Center" width="8rem" demandPopin="true" minScreenWidth="1300px" popinDisplay="Inline"\n\t\t\t\t\tcustomData:p13nData=\'\\{"columnKey":"ExecuteColumn"\\}\'><header><Text text="{common_i18n>ExecuteColumnText}"></Text></header></Column></columns><ColumnListItem><Link class="sapMLabelBold" text="{ManufacturingOrder}" tooltip="{ManufacturingOrder}" press="handleOrderNumberPress"></Link><VBox class="sapUiTinyMarginTopBottom"><Link text="{Material}" ariaLabelledBy="typeMaterial" tooltip="{Material}" press="handleMaterialLinkPress"></Link><Text text="{MaterialName}" tooltip="{MaterialName}"></Text></VBox><HBox><VBox><Link press="handleOperationPress" ariaLabelledBy="typeOperation"\n\t\t\t\t\t\t\ttext="{parts:[{path:\'ManufacturingOrderOperation\'},{path:\'MfgOrderOperationText\'}], formatter:\'.formatter.getManufactOrderOps\'}"/><microchart:StackedBarMicroChart size="XS" precision="0" press="handleCoverageChartPress"><microchart:bars><microchart:StackedBarMicroChartBar id="mfgOrderConfirmed" valueColor="sapUiChartPaletteSemanticNeutral"\n\t\t\t\t\t\t\t\t\tdisplayValue="{parts:[{path: \'OpTotalConfirmedYieldQty\'}], formatter:\'.formatter.formatMicroChartDisplayValueNull\'}"\n\t\t\t\t\t\t\t\t\tvalue="{parts: [\'OpTotalConfirmedYieldQty\'], formatter: \'.formatter.formatMicroChartValue\'}"\n\t\t\t\t\t\t\t\t\ttooltip="{parts: [\'OpTotalConfirmedYieldQty\'], formatter: \'.formatter.formatConfirmedYieldQty\'}"/><microchart:StackedBarMicroChartBar id="mfgOrderReady" valueColor="sapUiChartPaletteSemanticGood"\n\t\t\t\t\t\t\t\t\tdisplayValue="{parts:[{path: \'MfgOrderOperationReadyQuantity\'}], formatter:\'.formatter.formatMicroChartDisplayValueNull\'}"\n\t\t\t\t\t\t\t\t\tvalue="{parts: [\'MfgOrderOperationReadyQuantity\'], formatter: \'.formatter.formatMicroChartValue\'}"\n\t\t\t\t\t\t\t\t\ttooltip="{= ${/#C_MfgProcgExecOperationType/MfgOrderOperationReadyQuantity/@sap:label} + \' \' + ${MfgOrderOperationReadyQuantity} }"/><microchart:StackedBarMicroChartBar id="mfgNotOrderReady" valueColor="sapUiChartPaletteSemanticCritical"\n\t\t\t\t\t\t\t\t\tdisplayValue="{parts:[{path: \'MfgOrderOperationNotReadyQty\'}], formatter:\'.formatter.formatMicroChartDisplayValueNull\'}"\n\t\t\t\t\t\t\t\t\tvalue="{parts: [\'MfgOrderOperationNotReadyQty\'], formatter: \'.formatter.formatMicroChartValue\'}"\n\t\t\t\t\t\t\t\t\ttooltip="{= ${/#C_MfgProcgExecOperationType/MfgOrderOperationNotReadyQty/@sap:label} + \' \' + ${MfgOrderOperationNotReadyQty} }"/></microchart:bars></microchart:StackedBarMicroChart></VBox></HBox><Link press="handleStatusLinkPress" class="sapUiTinyMarginTopBottom"\n\t\t\t\t\ttext="{parts:[{path:\'OperationStatusInternalID\'}], formatter:\'.formatter.getOpStatusText\'}"/><VBox><Text text="{common_i18n>TotalQuantityOpsInPrgrss} {parts:[{path:\'OpPlannedTotalQuantity\'}]} {OperationUnit}"\n\t\t\t\t\t\ttooltip="{common_i18n>TotalQuantityOpsInPrgrss} {parts:[{path:\'OpPlannedTotalQuantity\'}]} {OperationUnit}"/><Text\n\t\t\t\t\t\ttext="{common_i18n>OpenQuantityOpsInPrgrss} {parts:[{path:\'OpPlannedTotalQuantity\'},{path:\'OpTotalConfirmedYieldQty\'},{path:\'OpTotalConfirmedScrapQty\'}], formatter:\'.formatter.calculateOpenQuantity\'} {OperationUnit}"\n\t\t\t\t\t\ttooltip="{common_i18n>OpenQuantityOpsInPrgrss} {parts:[{path:\'OpPlannedTotalQuantity\'},{path:\'OpTotalConfirmedYieldQty\'},{path:\'OpTotalConfirmedScrapQty\'}], formatter:\'.formatter.calculateOpenQuantity\'} {OperationUnit}"/></VBox><Text text="{parts:[{path:\'OpTotalConfirmedYieldQty\'}]} {OperationUnit}"\n\t\t\t\t\ttooltip="{parts:[{path:\'OpTotalConfirmedYieldQty\'}]} {OperationUnit}"></Text><VBox class="sapUiTinyMargin" alignContent="End" justifyContent="End"><Text text="{parts:[{path:\'OpActualExecutionStartDate\'}], formatter:\'.formatter.DatePriorityForActualDate\'}"\n\t\t\t\t\t\ttooltip="{parts:[{path:\'OpActualExecutionStartDate\'}], formatter:\'.formatter.DatePriorityForActualDate\'}"/><Text\n\t\t\t\t\t\ttext="{path: \'OpActualExecutionStartTime\', type: \'sap.ui.model.odata.type.Time\', formatOptions: {style: \'short\', relativeScale: \'auto\' }}"\n\t\t\t\t\t\ttooltip="{path: \'OpActualExecutionStartTime\', type: \'sap.ui.model.odata.type.Time\', formatOptions: {style: \'short\', relativeScale: \'auto\' }}"></Text></VBox><VBox class="sapUiTinyMargin" alignContent="End" justifyContent="End"><Text text="{parts:[{path:\'OpLtstSchedldExecStrtDte\'}], formatter:\'.formatter.DatePriorityForActualDate\'}"\n\t\t\t\t\t\ttooltip="{parts:[{path:\'OpLtstSchedldExecStrtDte\'}], formatter:\'.formatter.DatePriorityForActualDate\'}"/><Text\n\t\t\t\t\t\ttext="{path: \'OpLtstSchedldExecStrtTme\', type: \'sap.ui.model.odata.type.Time\', formatOptions: {style: \'short\', relativeScale: \'auto\' }}"\n\t\t\t\t\t\ttooltip="{path: \'OpLtstSchedldExecStrtTme\', type: \'sap.ui.model.odata.type.Time\', formatOptions: {style: \'short\', relativeScale: \'auto\' }}"></Text></VBox><VBox class="sapUiTinyMargin" alignContent="End" justifyContent="End"><Text text="{parts:[{path:\'OpLtstSchedldExecEndDte\'}], formatter:\'.formatter.DatePriorityForActualDate\'}"\n\t\t\t\t\t\ttooltip="{parts:[{path:\'OpLtstSchedldExecEndDte\'}], formatter:\'.formatter.DatePriorityForActualDate\'}"/><Text\n\t\t\t\t\t\ttext="{path: \'OpLtstSchedldExecEndTme\', type: \'sap.ui.model.odata.type.Time\', formatOptions: {style: \'short\', relativeScale: \'auto\' }}"\n\t\t\t\t\t\ttooltip="{path: \'OpLtstSchedldExecEndTme\', type: \'sap.ui.model.odata.type.Time\', formatOptions: {style: \'short\', relativeScale: \'auto\' }}"></Text></VBox><core:Fragment fragmentName="sap.i2d.mpe.lib.commons1.fragments.IssuesHBox" type="XML"/><VBox><Text text="{EffectivityParameterDesc}"/></VBox><VBox alignItems="Center"><HBox justifyContent="Center"><Button text="{common_i18n>ButtonExecute}" press="onItemExecute" width="8rem" type="Transparent" class="sapUiTinyMarginBegin"/></HBox></VBox></ColumnListItem></Table></smartTable:SmartTable></mvc:View>',
      "customer/zmpe/wcque/mgs1/ext/blocks/OperationInProgressControllerCustom.controller.js":
      function () {
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
          function (e, t, r, a, o, i, n, s, l, d, u, p, g) {
            "use strict";
            return e.extend(
              "customer.zmpe.wcque.mgs1.ext.blocks.OperationInProgressControllerCustom",
              {
                formatter: t,
                reuseUtil: s,
                onInit: function () {
                  var e = this.loadI18NFile();
                  this.getView().setModel(e, "common_i18n");
                  this.oMaterialPop = new a();
                  this.oProductionOrderPop = new o();
                  this.oOperationPop = new i();
                  this.getView()
                    .byId("idOperationInProgressTable")
                    .setIgnoreFromPersonalisation(
                      "ManufacturingOrder,OrderInternalID,OrderIsShopFloorOrder,OrderOperationInternalID,ManufacturingOrderSequence,MaterialName,MfgOrderOperationReadyQuantity,MfgOrderOperationText,OpPlannedTotalQuantity,OperationUnit,OpLtstSchedldExecStrtDte,OpLtstSchedldExecEndDte,OpActualExecutionStartDate,OpActualExecutionEndDate,OpPlannedScrapQuantity,OperationYieldDeviationQty,OperationHasScrapQualityIssue,OpActyConfIsSFIBased,ExecutionEndLatenessInHours,ExecutionEndLatenessInMinutes,ExecutionStartLatenessInHours,ExecutionStartLatenessInMins,OperationHasMissingComponents,OperationHasProductionHold,OperationHasScrapQualityIssue,OperationIsClosed,OperationIsConfirmed,OperationIsCreated,OperationIsDeleted,OperationIsDelivered,OperationIsPartiallyConfirmed,OperationIsPartiallyDelivered,OperationIsPrinted,OperationIsReleased,OperationIsScheduled,OperationIsTechlyCompleted,OperationStartDeviationDays,OperationStatusInternalID,OpExecutionCompletedQuantity,OpHasAssgdProdnRsceTools,PlannedEndDateDvtnInDays,WorkCenterTypeCode,MfgOrderOperationReadyQuantity,WorkCenterInternalID,OpLtstSchedldExecStrtTme,OpLtstSchedldExecStrtDte,OpLtstSchedldExecEndDte,OpLtstSchedldExecEndTme,OperationActivityNetwork,OpActyNtwkVersionCounter,SupplyArea,OpTotalConfirmedScrapQty,OperationExecutionEndIsLate,OpActyNtwkInstance"
                    );
                  var t;
                  t = new g({
                    allIssuesCount: 0,
                    showOnlyHoldIssues: false,
                    showOnlyRdyToFnshIssues: false,
                  });
                  this.getView().setModel(t, "idOperationInProgressTable");
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
                  var e =
                    jQuery.sap.getModulePath("sap.i2d.mpe.lib.commons1") +
                    "/" +
                    "i18n/i18n.properties";
                  return new n({ bundleUrl: e });
                },
                onAfterRendering: function () {},
                determineTotalNumberOfEntries: function () {
                  var e = this.getView().getModel("DetailModel");
                  var t = s.getFilterForOpInProcess();
                  var r = s.getFilterForDefaultWorkCenterPlant(e);
                  var a = new sap.ui.model.Filter({
                    filters: [
                      new sap.ui.model.Filter(
                        "OperationHasProductionHold",
                        sap.ui.model.FilterOperator.EQ,
                        false
                      ),
                    ],
                  });
                  var o = s.getFilterForOpHasNoProdnHoldNoMisgComp();
                  var i = this.getView().byId("idSearchField").getValue();
                  if (i) {
                    var n = s.createSearchFilterObject(i);
                    if (n) {
                      r.aFilters.push(n);
                    }
                  }
                  var l = s.getUrlParametersForInlinecountAllPages();
                  var d = {
                    urlParameters: l,
                    filters: [
                      new sap.ui.model.Filter({ and: true, filters: [r] }),
                    ],
                    success: function (e) {
                      var t;
                      if (e.__count > 0) {
                        t = new g({ oDataCount3: e.__count });
                        this.getView().setModel(t, "view2");
                      } else {
                        t = new g({ oDataCount3: "0" });
                        this.getView().setModel(t, "view2");
                      }
                    }.bind(this),
                    error: function (e) {
                      sap.m.MessageBox.error(e);
                    },
                  };
                  this.getView().getModel().read("/C_MfgProcgExecOperation", d);
                  var u = {
                    urlParameters: l,
                    filters: [
                      new sap.ui.model.Filter({ and: true, filters: [r, a] }),
                    ],
                    success: function (e) {
                      var t;
                      if (e.__count > 0) {
                        t = new g({ oDataCount: e.__count });
                        this.getView().setModel(t, "view1");
                      } else {
                        t = new g({ oDataCount: "0" });
                        this.getView().setModel(t, "view1");
                      }
                    }.bind(this),
                    error: function (e) {
                      sap.m.MessageBox.error(e);
                    },
                  };
                  this.getView().getModel().read("/C_MfgProcgExecOperation", u);
                  var p = {
                    urlParameters: l,
                    filters: [
                      new sap.ui.model.Filter({ and: true, filters: [r, o] }),
                    ],
                    success: function (e) {
                      var t;
                      if (e.__count > 0) {
                        t = new g({ oDataCount2: e.__count });
                        this.getView().setModel(t, "view");
                      } else {
                        t = new g({ oDataCount2: "0" });
                        this.getView().setModel(t, "view");
                      }
                    }.bind(this),
                    error: function (e) {
                      sap.m.MessageBox.error(e);
                    },
                  };
                  this.getView().getModel().read("/C_MfgProcgExecOperation", p);
                },
                handleBeforeRebindTable: function (e) {
                  var t = this.getView().getModel("DetailModel");
                  var r = t.getData();
                  var a = r.WorkCenter;
                  var o = r.ProductionPlant;
                  var i = this.getView().byId("idSearchField").getValue();
                  var n = e.getParameter("bindingParams");
                  var l = e.getSource().getBindingContext();
                  var d =
                    "OrderInternalID,OrderOperationInternalID,WorkCenterText,WorkCenterLocation" +
                    ",SupplyArea,WorkCenterResponsible,WorkCenterResponsibleName,PlantName" +
                    ",ExecutionEndLatenessInMinutes,ExecutionStartLatenessInMins,OpTotalConfirmedScrapQty,WorkCenterInternalID,OrderIsShopFloorOrder";
                  var u = n.parameters.select;
                  d = u + "," + d;
                  var p = { select: d, useBatchRequests: true };
                  n.parameters = p;
                  if (
                    o !== this.oOpsDetailModelData.ProductionPlant ||
                    a !== this.oOpsDetailModelData.WorkCenter ||
                    (i !== "" && i !== this.oOpsDetailModelData.SearchText)
                  ) {
                    this.oOpsDetailModelData.SearchText = i;
                    this.determineTotalNumberOfEntries();
                    r = t.getData();
                    this.oOpsDetailModelData.WorkCenter = r.WorkCenter;
                    this.oOpsDetailModelData.ProductionPlant = r.ProductionPlant;
                    a = r.WorkCenter;
                    o = r.ProductionPlant;
                    var g = this;
                    n.events = {
                      dataReceived: function (e) {
                        var t = e.getParameters().data.results;
                        if (t.length > 0) {
                          g.getView().getModel("DetailModel").setData(t[0]);
                          g.oOpsDetailModelData.WorkCenter = t[0].WorkCenter;
                          g.oOpsDetailModelData.ProductionPlant =
                            t[0].ProductionPlant;
                        }
                      },
                    };
                  } else if (i === "") {
                    this.oOpsDetailModelData.SearchText = "";
                  }
                  var c = n.filters;
                  var O = new sap.ui.model.Filter([], true);
                  var h = s.getFilterForOpInProcess();
                  var m = s.getFilterForOpIsReleased();
                  var f = s.getFilterForOpHasNoProdnHoldNoMisgComp();
                  var v = s.getFilterForOpNotPrtlyConfdNotConfdNotDeltd();
                  var P = s.getFilterForOpNotClosed();
                  var I;
                  if (i) {
                    I = s.createSearchFilterObject(i);
                    if (I) {
                      O.aFilters.push(I);
                    }
                  }
                  if (this.returnIssueStatusValue(e) === true) {
                    var w = new sap.ui.model.Filter({
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
                    var F = s.getFilterForOpHasNoProdnHoldNoMisgComp();
                  }
                  var M;
                  if (a && o) {
                    M = [
                      new sap.ui.model.Filter(
                        "WorkCenter",
                        sap.ui.model.FilterOperator.EQ,
                        a
                      ),
                      new sap.ui.model.Filter(
                        "ProductionPlant",
                        sap.ui.model.FilterOperator.EQ,
                        o
                      ),
                    ];
                  } else if (l) {
                    var C = l.getPath();
                    var y = e.getSource().getModel().getContext(C).getObject();
                    M = [
                      new sap.ui.model.Filter(
                        "WorkCenterInternalID",
                        sap.ui.model.FilterOperator.EQ,
                        y.WorkCenterInternalID
                      ),
                      new sap.ui.model.Filter(
                        "ProductionPlant",
                        sap.ui.model.FilterOperator.EQ,
                        y.ProductionPlant
                      ),
                    ];
                  }
                  var D = new sap.ui.model.Filter({ and: true, filters: M });
                  var S;
                  var b;
                  if (this.returnIssueStatusValue(e) === true) {
                    (b = new sap.ui.model.Filter({
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
                      (S = new sap.ui.model.Filter({
                        and: true,
                        filters: [b, D, w],
                      }));
                    if ((a && o) || l) {
                      O.aFilters.push(S);
                      c.push(O);
                    }
                  } else if (this.returnAllRdyToFnshStatusValue(e) === true) {
                    (b = new sap.ui.model.Filter({
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
                      (S = new sap.ui.model.Filter({
                        and: true,
                        filters: [b, D, F],
                      }));
                    if ((a && o) || l) {
                      O.aFilters.push(S);
                      c.push(O);
                    }
                  } else {
                    (b = new sap.ui.model.Filter({
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
                      (S = new sap.ui.model.Filter({
                        and: true,
                        filters: [b, D],
                      }));
                    if ((a && o) || l) {
                      O.aFilters.push(S);
                      c.push(O);
                    }
                  }
                },
                handleCoverageChartPress: function (e) {
                  var t = e.getSource().getBindingContext();
                  var a = t.getModel();
                  var o = a.getContext(t.getPath()).getObject();
                  var i = [];
                  var n = [];
                  var l = [];
                  var d = o.OpTotalConfirmedYieldQty;
                  var u = o.OperationUnit;
                  if (d !== undefined && d >= 0) {
                    d = r.getFloatInstance({}).format(d);
                    i.push(d);
                    n.push("grey");
                    var p = this.getView()
                      .getModel("common_i18n")
                      .getResourceBundle()
                      .getText("processed");
                    l.push(p);
                  }
                  var g = o.MfgOrderOperationReadyQuantity;
                  var c = this.getView()
                    .getModel("common_i18n")
                    .getResourceBundle()
                    .getText("ready");
                  if (g !== undefined && g >= 0) {
                    g = r.getFloatInstance({}).format(g);
                    i.push(g);
                    n.push("green");
                    l.push(c);
                  } else if (g !== undefined && g < 0) {
                    g = r.getFloatInstance({}).format(0);
                    i.push(g);
                    n.push("green");
                    l.push(c);
                  }
                  var O = o.MfgOrderOperationNotReadyQty;
                  var h = this.getView()
                    .getModel("common_i18n")
                    .getResourceBundle()
                    .getText("notReady");
                  if (O !== undefined && O >= 0) {
                    O = r.getFloatInstance({}).format(O);
                    i.push(O);
                    n.push("orange");
                    l.push(h);
                  } else if (O !== undefined && O < 0) {
                    O = r.getFloatInstance({}).format(0);
                    i.push(O);
                    n.push("orange");
                    l.push(h);
                  }
                  s.openStackedBarChartPopover2(this, e, i, n, l, u);
                },
                handleIconPress: function (e) {
                  var t = e.getSource().getColor();
                  if (t === "#d9d9d9") {
                    return "";
                  } else {
                    var r = true;
                    s.openIssuePopOver(e, this, r);
                  }
                },
                handleMaterialLinkPress: function (e) {
                  var t = e.getSource().getBindingContext();
                  var r = t.getModel();
                  var a = r.getProperty("ProductionPlant", t);
                  var o = r.getProperty("Material", t);
                  this.oMaterialPop.openMaterialPopOver(e, this, o, a);
                },
                handleOrderNumberPress: function (e) {
                  var t = e.getSource();
                  var r = t.getBindingContext().sPath;
                  var a = t.getModel().getProperty(r);
                  var o = a.ManufacturingOrder || a.MRPElement;
                  this.oProductionOrderPop.openProdOrdPopOver(e, this, o);
                },
                handleOperationPress: function (e) {
                  var t = e.getSource().getBindingContext();
                  var r = t
                    .getPath()
                    .split("OrderInternalID='")[1]
                    .split("',")[0];
                  var a = t
                    .getPath()
                    .split("OrderOperationInternalID='")[1]
                    .split("')")[0];
                  this.oOperationPop.openOperationsPopOver(e, this, r, a);
                },
                handleOperationSelect: function (e) {
                  var t = e.getParameter("listItem").getBindingContextPath();
                  var r = s.getObjectPageRefrence();
                  if (r && r.getRouter()) {
                    var a = r.getRouter();
                    var o = r.iAppState;
                    a.navTo(
                      "object",
                      { operationId: t.substr(1), iAppState: o },
                      false
                    );
                  } else {
                    var i = sap.ushell.Container.getService(
                      "CrossApplicationNavigation"
                    );
                    i.toExternal({
                      target: {
                        shellHash:
                          "#ManufacturingOrderOperation-manage&/ManageOperations" +
                          t,
                      },
                    });
                  }
                },
                _filter: function () {
                  var e = null;
                  if (this._oGlobalFilter) {
                    e = this._oGlobalFilter;
                  }
                  this.getView()
                    .byId("idOperationInProgressFirstTable")
                    .getBinding("items")
                    .filter(e, "Application");
                },
                handleOrdersSearch: function (e) {
                  this._oGlobalFilter = null;
                  this.showAllOperations();
                },
                handleStatusLinkPress: function (e) {
                  var t = e.getSource();
                  var r = t.getBindingContext().sPath;
                  var a = t.getModel().getProperty(r);
                  var o = a.OperationStatusInternalID;
                  l.openStatusPopOver(e, this, o);
                },
                handleItemSelect: function (e) {
                  var t = e.getParameter("listItem").getBindingContextPath();
                  var r = this.getView().byId("idOperationInProgressFirstTable");
                  r.setBusy(true);
                  var a = this.getView().getModel();
                  var o = a.getProperty(t);
                  var i = o.ManufacturingOrder;
                  var n = o.ManufacturingOrderOperation;
                  var s = o.OperationStatusInternalID;
                  var l = this.getView()
                    .getModel("common_i18n")
                    .getResourceBundle()
                    .getText("messageBoxHeader");
                  var u = this.getView()
                    .getModel("common_i18n")
                    .getResourceBundle()
                    .getText("messageBoxMessage");
                  if (
                    this.getView().getModel("objectView").oData.workCenterQueue
                  ) {
                    if (s === "01") {
                      sap.m.MessageBox.information(u, { title: l });
                      r.setBusy(false);
                    } else {
                      d.navFromOrderEntry(this, i, n, r);
                    }
                  } else {
                    this.handleOperationSelect(e);
                  }
                },
                onItemExecute: function (e) {
                  var t = e.getSource().getBindingContext().sPath;
                  var r = this.getView().byId("idOperationInProgressFirstTable");
                  r.setBusy(true);
                  var a = this.getView().getModel();
                  var o = a.getProperty(t);
                  var i = o.ManufacturingOrder;
                  var n = o.ManufacturingOrderOperation;
                  var s = o.OperationStatusInternalID;
                  var l = o.OrderIsShopFloorOrder;
                  var u = this.getView()
                    .getModel("common_i18n")
                    .getResourceBundle()
                    .getText("messageBoxHeader");
                  var p = this.getView()
                    .getModel("common_i18n")
                    .getResourceBundle()
                    .getText("messageBoxMessage");
                  if (
                    this.getView().getModel("objectView").oData.workCenterQueue
                  ) {
                    if (s === "01") {
                      sap.m.MessageBox.information(p, { title: u });
                      r.setBusy(false);
                    } else if (!l) {
                      d.navToConfirmProductionOperation(i, n);
                      r.setBusy(false);
                    } else {
                      // d.navFromOrderEntry(this, i, n, r);
                      this.navToActivityDetail(this, i, n, r);
                    }
                  } else {
                    this.handleOperationSelect(e);
                  }
                },

                
                navToActivityDetail : function(t, e, s, o) {
                    var r;
                    if (!t) {
                        r = "ZProductionOrderOperationActyN-process&" + "/OpActyNtwkInstance/" + e + "/OpActyNtwkElement/" + s + "/OpActyIsSeldForRtactvPostg/" + o
                    } else {
                        r = "ZProductionOrderOperationActyN-process&/ShopFloorItem/" + t + "/OpActyNtwkInstance/" + e + "/OpActyNtwkElement/" + s + "/OpActyIsSeldForRtactvPostg/" + o
                    }
                    if (e && s) {
                        var a = sap.ushell && sap.ushell.Container && sap.ushell.Container.getService;
                        var i = a && a("CrossApplicationNavigation");
                        if (i) {
                            i.toExternal({
                                target: {
                                    shellHash: r
                                }
                            })
                        }
                    }
                },
                

                onDataReceived: function (e) {},
                handleOperationsBtnPress: function () {
                  this.goAllOpTable = this.getView().byId(
                    "idOperationInProgressTable"
                  );
                  this.goAllOpTable.rebindTable();
                },
                returnIssueStatusValue: function (e) {
                  var t = this.getView().getModel("idOperationInProgressTable");
                  var r = t.getData();
                  return r.showOnlyHoldIssues;
                },
                returnAllRdyToFnshStatusValue: function (e) {
                  var t = this.getView().getModel("idOperationInProgressTable");
                  var r = t.getData();
                  return r.showOnlyRdyToFnshIssues;
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
      },
    "customer/zmpe/wcque/mgs1/ext/blocks/OperationNotStartedBlockCustom.view.xml":
      '\r\n<mvc:View controllerName="i2d.mpe.wcqueue.manages1.blocks.OperationNotStartedController" xmlns:mvc="sap.ui.core.mvc"\r\n\txmlns:layout="sap.ui.layout" xmlns:core="sap.ui.core" xmlns:form="sap.ui.layout.form" xmlns="sap.m"\r\n\txmlns:smartTable="sap.ui.comp.smarttable" xmlns:customData="http://schemas.sap.com/sapui5/extension/sap.ui.core.CustomData/1"\r\n\txmlns:microchart="sap.suite.ui.microchart"><smartTable:SmartTable demandPopin="true" beforeRebindTable="handleBeforeRebindTable"\r\n\t\tentitySet="{= ${DetailModel>/WorkCenter} &amp;&amp; ${DetailModel>/WorkCenter} !== \'\' ? \'C_MfgProcgExecOperation\' : \'C_Manageoperations\'}"\r\n\t\tdataReceived="onDataReceived" id="idOperationNotStartedTable" persistencyKey="pKeyNotStartedTable" showRowCount="true"\r\n\t\ttableType="ResponsiveTable" useExportToExcel="true" useTablePersonalisation="true" useVariantManagement="true"\r\n\t\tnoData="{common_i18n>noOperationsFound}"\r\n\t\tenableAutoBinding="{= ${DetailModel>/WorkCenter} &amp;&amp; ${DetailModel>/WorkCenter} !== \'\' ? true : false}"><smartTable:customToolbar><OverflowToolbar id="idToolBarOperationNotStarted" design="Transparent"><SegmentedButton visible="{worklistView>/tableLoaded}" selectedKey="AllOps" select="handleOperationsBtnPress"><items><SegmentedButtonItem id="SegmentedBtnAll"\r\n\t\t\t\t\t\t\ttext="{common_i18n>AllOperationsTglBtn} {parts:[{path:\'view2>/oDataCount3\'}], formatter:\'.formatter.getWordInBrackets\'}"\r\n\t\t\t\t\t\t\ttooltip="{common_i18n>AllOperationsTglBtn} {parts:[{path:\'view2>/oDataCount3\'}], formatter:\'.formatter.getWordInBrackets\'}"\r\n\t\t\t\t\t\t\tpress="showAllOperations" key="AllOps" width="40%"/><SegmentedButtonItem text="{common_i18n>ReleasedTglBtn} {parts:[{path:\'view1>/oDataCount\'}], formatter:\'.formatter.getWordInBrackets\'}"\r\n\t\t\t\t\t\t\ttooltip="{common_i18n>ReleasedTglBtn} {parts:[{path:\'view1>/oDataCount\'}], formatter:\'.formatter.getWordInBrackets\'}"\r\n\t\t\t\t\t\t\tpress="showAllReleasedOperations" key="IssueOps" width="40%"/><SegmentedButtonItem text="{common_i18n>RdyToStrtTglBtn} {parts:[{path:\'view>/oDataCount2\'}], formatter:\'.formatter.getWordInBrackets\'}"\r\n\t\t\t\t\t\t\ttooltip="{common_i18n>RdyToStrtTglBtn} {parts:[{path:\'view>/oDataCount2\'}], formatter:\'.formatter.getWordInBrackets\'}"\r\n\t\t\t\t\t\t\tpress="showAllRdyToStrtIssuesOperations" key="ReadyToFinishOps" width="40%"/></items></SegmentedButton><ToolbarSpacer></ToolbarSpacer><SearchField id="idSearchField" search="handleOrdersSearch" width="15%" class="sapUiSmallMargin"/></OverflowToolbar></smartTable:customToolbar><smartTable:customData><core:CustomData key="p13nDialogSettings" value=\'\\{"columns":\\{"visible": true \\},"filter":\\{"visible": false\\}\\}\'/></smartTable:customData><Table fixedLayout="false" growing="true" id="idOperationInProgressFirstTable"\r\n\t\t\tgrowingScrollToLoad="{= ${DetailModel>/WorkCenter} &amp;&amp; ${DetailModel>/WorkCenter} !== \'\' ? true : false}"\r\n\t\t\tgrowingThreshold="{= ${DetailModel>/WorkCenter} &amp;&amp; ${DetailModel>/WorkCenter} !== \'\' ? 25 : 5}"><columns><Column\r\n\t\t\t\t\tcustomData:p13nData=\'\\{"columnKey":"CustProductionOrderID", "leadingProperty":["ManufacturingOrder","ManufacturingOrderSequence","ManufacturingOrderOperation"] , "filterProperty" :["ManufacturingOrder"] , "sortProperty" :"ManufacturingOrder"\\}\'><header><Text text="{common_i18n>Order}" tooltip="{common_i18n>OrderTooltip}"/></header></Column><Column customData:p13nData=\'\\{"columnKey":"CustMaterial", "leadingProperty":["Material","MaterialName","ProductionPlant"]\\}\'><header><Text id="typeMaterial" text="{common_i18n>Material}" tooltip="{common_i18n>MaterialTooltip}"/></header></Column><Column customData:p13nData=\'\\{"columnKey":"CustZZWBSElement", "leadingProperty":["ZZWBSElement"]\\}\'><header><Text id="typeZZWBSElement" text="{common_i18n>WBSElement}" tooltip="{common_i18n>WBSElementTooltip}"/></header></Column><Column\r\n\t\t\t\t\tcustomData:p13nData=\'\\{"columnKey":"OpTotalConfirmedYieldQty", "leadingProperty":["MfgOrderOperationText", "OpTotalConfirmedYieldQty", "OperationUnit","OpPlannedTotalQuantity","OperationExecutionEndIsLate","OperationExecutionStartIsLate","MfgOrderOperationReadyQuantity","MfgOrderOperationNotReadyQty"]\\}\'><header><Text id="typeOperation" text="{common_i18n>OperationProgressColumn}" tooltip="{common_i18n>OperationProgressColumnTooltip}"/></header></Column><Column hAlign="Center" customData:p13nData=\'\\{"columnKey":"CustStatus", "leadingProperty":["OperationStatusInternalID"]\\}\'><header><Text text="{common_i18n>Status}" tooltip="{common_i18n>StatusTooltip}"/></header></Column><Column hAlign="End"\r\n\t\t\t\t\tcustomData:p13nData=\'\\{"columnKey":"CustScheduleEnd", "leadingProperty":["OpLtstSchedldExecEndDte","OpLtstSchedldExecEndTme"]\\}\'><header><Text text="{common_i18n>ScheduledEnd}" tooltip="{common_i18n>ScheduledEndTooltip}"/></header></Column><Column hAlign="End"\r\n\t\t\t\t\tcustomData:p13nData=\'\\{"columnKey":"CustScheduleStart", "leadingProperty":["OpLtstSchedldExecStrtTme","OpLtstSchedldExecStrtDte"]\\}\'><header><Text text="{common_i18n>ScheduledStart}" tooltip="{common_i18n>ScheduledStartTooltip}"/></header></Column><Column hAlign="Left"\r\n\t\t\t\t\tcustomData:p13nData=\'\\{"columnKey":"CustIssue", "leadingProperty":["OperationHasProductionHold", "OperationExecutionStartIsLate", "OperationHasMissingComponents", "OperationYieldDeviationQty", "OperationHasScrapQualityIssue"]\\}\'><header><Text text="{common_i18n>IssueHeader}" tooltip="{common_i18n>IssueTooltip}"/></header></Column><Column visible="false" customData:p13nData=\'\\{"columnKey":"EffectivityParameterDesc", "leadingProperty":["EffectivityParameterDesc"]\\}\'><header><Text\r\n\t\t\t\t\t\t\ttext="{=${/#C_MfgProcgExecOperationType/EffectivityParameterDesc/@sap:customLabel} === undefined ? ${/#C_MfgProcgExecOperationType/EffectivityParameterDesc/@sap:label} : ${/#C_MfgProcgExecOperationType/EffectivityParameterDesc/@sap:customLabel}}"/></header></Column><Column hAlign="Center" width="8rem" demandPopin="true" minScreenWidth="1300px" popinDisplay="Inline"\r\n\t\t\t\t\tcustomData:p13nData=\'\\{"columnKey":"ExecuteColumn"\\}\'><header><Text text="{common_i18n>ExecuteColumnText}"></Text></header></Column></columns><ColumnListItem><Link class="sapMLabelBold" text="{ManufacturingOrder}" tooltip="{ManufacturingOrder}" press="handleOrderNumberPress"></Link><VBox class="sapUiTinyMarginTopBottom"><Link ariaLabelledBy="typeMaterial" text="{Material}" tooltip="{Material}" press="handleMaterialLinkPress"></Link><Text text="{MaterialName}" tooltip="{MaterialName}"></Text></VBox><VBox><Text text="{ZZWBSElement}"/></VBox><HBox><VBox><Link press="handleOperationPress" ariaLabelledBy="typeOperation"\r\n\t\t\t\t\t\t\ttext="{parts:[{path:\'ManufacturingOrderOperation\'},{path:\'MfgOrderOperationText\'}], formatter:\'.formatter.getManufactOrderOps\'}"/><microchart:StackedBarMicroChart size="XS" precision="0" press="handleCoverageChartPress"><microchart:bars><microchart:StackedBarMicroChartBar id="opTtlCnfrmYldQty" valueColor="sapUiChartPaletteSemanticNeutral"\r\n\t\t\t\t\t\t\t\t\tdisplayValue="{parts:[{path: \'OpTotalConfirmedYieldQty\'}], formatter:\'.formatter.formatMicroChartDisplayValueNull\'}"\r\n\t\t\t\t\t\t\t\t\tvalue="{parts: [\'OpTotalConfirmedYieldQty\'], formatter: \'.formatter.formatMicroChartValue\'}"\r\n\t\t\t\t\t\t\t\t\ttooltip="{parts: [\'OpTotalConfirmedYieldQty\'], formatter: \'.formatter.formatConfirmedYieldQty\'}"/><microchart:StackedBarMicroChartBar id="mfgOrderReady" valueColor="sapUiChartPaletteSemanticGood"\r\n\t\t\t\t\t\t\t\t\tdisplayValue="{parts:[{path: \'MfgOrderOperationReadyQuantity\'}], formatter:\'.formatter.formatMicroChartDisplayValueNull\'}"\r\n\t\t\t\t\t\t\t\t\tvalue="{parts: [\'MfgOrderOperationReadyQuantity\'], formatter: \'.formatter.formatMicroChartValue\'}"\r\n\t\t\t\t\t\t\t\t\ttooltip="{= ${/#C_MfgProcgExecOperationType/MfgOrderOperationReadyQuantity/@sap:label} + \' \' + ${MfgOrderOperationReadyQuantity} }"/><microchart:StackedBarMicroChartBar id="mfgOrderNotReady" valueColor="sapUiChartPaletteSemanticCritical"\r\n\t\t\t\t\t\t\t\t\tdisplayValue="{parts:[{path: \'MfgOrderOperationNotReadyQty\'}], formatter:\'.formatter.formatMicroChartDisplayValueNull\'}"\r\n\t\t\t\t\t\t\t\t\tvalue="{parts: [\'MfgOrderOperationNotReadyQty\'], formatter: \'.formatter.formatMicroChartValue\'}"\r\n\t\t\t\t\t\t\t\t\ttooltip="{= ${/#C_MfgProcgExecOperationType/MfgOrderOperationNotReadyQty/@sap:label} + \' \' + ${MfgOrderOperationNotReadyQty} }"/></microchart:bars></microchart:StackedBarMicroChart></VBox></HBox><Link press="handleStatusLinkPress" class="sapUiTinyMarginTopBottom"\r\n\t\t\t\t\ttext="{parts:[{path:\'OperationStatusInternalID\'}], formatter:\'.formatter.getOpStatusText\'}"></Link><VBox class="sapUiTinyMargin" alignContent="End" justifyContent="End"><Text text="{parts:[{path:\'OpLtstSchedldExecEndDte\'}], formatter:\'.formatter.DatePriorityForActualDate\'}"\r\n\t\t\t\t\t\ttooltip="{parts:[{path:\'OpLtstSchedldExecEndDte\'}], formatter:\'.formatter.DatePriorityForActualDate\'}"/><Text\r\n\t\t\t\t\t\ttext="{path: \'OpLtstSchedldExecEndTme\', type: \'sap.ui.model.odata.type.Time\', formatOptions: {style: \'short\', relativeScale: \'auto\' }}"\r\n\t\t\t\t\t\ttooltip="{path: \'OpLtstSchedldExecEndTme\', type: \'sap.ui.model.odata.type.Time\', formatOptions: {style: \'short\', relativeScale: \'auto\' }}"></Text></VBox><VBox class="sapUiTinyMargin" alignContent="End" justifyContent="End"><Text text="{parts:[{path:\'OpLtstSchedldExecStrtDte\'}], formatter:\'.formatter.DatePriorityForActualDate\'}"\r\n\t\t\t\t\t\ttooltip="{parts:[{path:\'OpLtstSchedldExecStrtDte\'}], formatter:\'.formatter.DatePriorityForActualDate\'}"/><Text\r\n\t\t\t\t\t\ttext="{path: \'OpLtstSchedldExecStrtTme\', type: \'sap.ui.model.odata.type.Time\', formatOptions: {style: \'short\', relativeScale: \'auto\' }}"\r\n\t\t\t\t\t\ttooltip="{path: \'OpLtstSchedldExecStrtTme\', type: \'sap.ui.model.odata.type.Time\', formatOptions: {style: \'short\', relativeScale: \'auto\' }}"></Text></VBox><core:Fragment fragmentName="sap.i2d.mpe.lib.commons1.fragments.IssuesHBox" type="XML"/><VBox><Text text="{EffectivityParameterDesc}"/></VBox><VBox alignItems="Center"><HBox justifyContent="Center"><Button text="{common_i18n>ButtonExecute}" press="onItemExecute" width="8rem" type="Transparent" class="sapUiTinyMarginBegin"/></HBox></VBox></ColumnListItem></Table></smartTable:SmartTable></mvc:View>',
    "customer/zmpe/wcque/mgs1/ext/blocks/OperationNotStartedControllerCustom.controller.js":
      function () {
        sap.ui.define(
          ["sap/ui/core/mvc/Controller", "../utils/util", "../utils/NavHelper"],
          function (e, t, r) {
            "use strict";
            return e.extend(
              "sap.i2d.mpe.wcqueue.manages1.blocks.OperationNotStartedControllerCustom",
              { reuseUtil: t }
            );
          }
        );
      },
    "customer/zmpe/wcque/mgs1/ext/i18n/i18n.properties":
      "# This is the resource bundle for Operations Activity\r\n# __ldi.translation.uuid=b4c57647-5786-4a3d-8cbd-0cfe9f7b89b8\r\n\r\n#XTIT: Application name\r\nappTitle=Manage Work Center Queue\r\n\r\n#YDES: Application description\r\nappDescription=Manage Work Center Queue\r\n\r\n#~~~ Worklist View ~~~~~~~~~~~~~~~~~~~~~~~~~~\r\n\r\n#XFLD: Plant label for Filter\r\nPlantFilter= Plant\r\n\r\n#XFLD: Work center label for Filter\r\nWorkCenterFilter= Work center\r\n\r\n#XBLI: Status filter dropdown option\r\nstatus_deleted=Deleted\r\n\r\n#XBLI: Status filter dropdown option\r\nstatus_closed=Closed\r\n\r\n#XBLI: Status filter dropdown option\r\nstatus_techCompleted=Technically Completed\r\n\r\n#XBLI: Status filter dropdown option\r\nstatus_delivered=Delivered\r\n\r\n#XBLI: Status filter dropdown option\r\nstatus_partdelivered=Partially Delivered\r\n\r\n#XBLI: Status filter dropdown option\r\nstatus_confirmed=Confirmed\r\n\r\n#XBLI: Status filter dropdown option\r\nstatus_partConfirmed=Partially Confirmed\r\n\r\n#XBLI: Status filter dropdown option\r\nstatus_released=Released\r\n\r\n#XBLI: Status filter dropdown option\r\nstatus_created=Created\r\n\r\n#XBLI: Status filter dropdown option\r\nstatus_scheduled=Scheduled\r\n\r\n#XFLD: Startdate label for Filter  \r\nStartDateFilter= Execution start date\r\n\r\n#XFLD: Error message when user is not assigned to any workcenter\r\nnoWorkCenterInUserDefault=User is not assigned to a work center. Please contact supervisor. \r\n\r\n#XFLD: Error message header when no workcenter is chosen in user defaults\r\nnoWorkCenterInUserDefaultHeader= No workcenter selected\r\n\r\n#XFLD: Operations label for Filter\r\nallOperations= All Operations\r\n\r\n#XFLD: Processed label for microchart\r\nprocessed= Processed   \r\n\r\n#XFLD: In progress label for microchart\r\ninProgress= In progress\r\n\r\n#XFLD: Ready label for microchart\r\nready= Ready\r\n\r\n#XFLD: Not ready label for microchart\r\nnotReady= Not ready\r\n\r\n#XFLD: Operations label for Filter\r\nreleasedOperations= Released Operations\r\n\r\n#XFLD: Operations label for Filter\r\nunReleasedOperations= Unreleased Operations\r\n\r\n#XFLD: Operations label for Filter\r\nOperations= Operations\r\n\r\n#XTIT: Table view title\r\nworklistViewTitle=Manage Work Center Queue\r\n\r\n#XTIT: Items title for table\r\nitems=Items\r\n\r\n#XTOL: Tooltip for the search field\r\nworklistSearchTooltip=Enter an <ObjectName> name or a part of it.\r\n\r\n#XBLI: text for a table with no data with filter or search\r\nworklistNoDataWithSearchText=No matching records found\r\n\r\n#XTIT: Table view title with placeholder for the number of items\r\nworklistTableTitleCount=Items ({0})\r\n\r\n#XTIT: Column label for Order\r\norder=Order\r\n\r\n#XTIT: Order number place holder\r\norderNumberplaceHolder=Order number\r\n\r\n#XTIT: Plant place holder\r\nplant=Plant\r\n\r\n\r\n#XTIT: Latest Start Date:\r\nlatestStartDate = Latest Start Date\r\n\r\n#XTIT: Released\r\nreleased = Released\r\n\r\n#XTIT: Column label for Operation\r\noperation=Operation\r\n\r\n#XTIT: Table label\r\noperations=Operations\r\n\r\n#XTIT: Column label for Material\r\nmaterial=Material\r\n\r\n#XTIT: Column label for Priority\r\npriority=Priority\r\n\r\n#XTIT: Column label for Workcenter\r\nworkCenter=Work Center\r\n\r\n#XTIT: Column label for Progress\r\nprogress=Progress\r\n\r\n#XTIT: Header label for title selector\r\nselectWcPlant=Select Workcenter\r\n\r\n#XTIT: Default label for default workcenter\r\ndefault=Default\r\n\r\n#XTIT: Column label for WIP\t\t\r\nWIP=WIP\t\t\r\n\r\n#XTIT: Column label for Quantity\t\t\r\nquantity=Quantity\r\n\r\n#XTIT: Column label for Released\r\nreleased=Released\r\n\r\n#XTIT: Column label for Operation/Quantity\t\t\r\nopQuantity=Operation/Quantity\r\n\r\n#XTIT: Column label for Operation/Progress\t\t\r\nopProgress=Operation/Progress\r\n\r\n#XTIT: Column label for Scheduled Start\r\nscheduledStart=Scheduled Start\r\n\r\n#XTIT: Column label for Scheduled End\r\nscheduledEnd=Scheduled End\r\n\r\n#XTIT: Column label for Status\r\nstatus=Status\r\n\t\t\t\r\n#XTIT: Column label for Actual Start\t\t\r\nactualStart=Actual Start\r\n\r\n#XTIT: Column label for Actual End\t\t\r\nactualEnd=Actual End\r\n\r\n#XBLI: text for a table with no data\r\ntableNoDataText=No operations are currently available\r\n\r\n#XLNK: text for link in 'not found' pages\r\nbackToWorklist=Show Manage Work Center Queue\r\n\r\n#XBLI: text for a table with no data\r\nnoItems = No items\r\n\r\n\r\n#XTOL: Tooltip for icon\r\nDelayTooltip=Delay\r\n\r\n#XTOL: Tooltip for icon\r\nComponentIssueTooltip=Missing Components\r\n\r\n#XTOL: Tooltip for icon\r\nToolIssueTooltip=Tool Issue\r\n\r\n#XTOL: Tooltip for icon\r\nQuantityIssueTooltip=Quantity Deviation\r\n\r\n#XTOL: Tooltip for icon\r\nQualityIssueTooltip=Quality Issue\r\n\r\n#XTIT: Operation Issues\r\noperationIssues=Operation Issues\r\n\r\n#XTIT: Issues\r\nIssue= Issues \r\n\r\n\r\n#~~~ Object View ~~~~~~~~~~~~~~~~~~~~~~~~~~\r\n\r\n#XTIT: Manage Work Center Queue Item title\r\nitem=Item\r\n\r\n#XTIT: Location in header Item title\t\t\r\nsupplyArea=Supply Area\t\t\r\n\r\n#XTIT: Location in header Item title\t\t\r\nresponsible=Responsible\t\t\r\n\r\n#XTIT: Location in header Item title\t\t\r\nplant=Plant\t\t\r\n\r\n#XTIT: Location in header Item title\t\t\r\nlocation=Location\t\t\r\n\r\n#XTIT: Label with colon\t\t\r\nLABEL_WITH_COLON={0}\\:\t\t\r\n\r\n#XTIT: Label for object page sections\t\t\r\noperationsInProgress = Operation In Progress\t\t\r\n\r\n#XTIT: Label for object page sections\t\t\r\noperationsNotStarted = Operation Not Started\t\t\r\n\r\n#XTIT: Label for object page sections\t\t\r\noperationsFinished = Operations Finished\t\t\r\n\r\n#XTIT: Label for all operations\t\t\r\nallOperations = All\t\t\r\n\r\n#XTIT: Label for released operations\t\t\r\nreleasedOperations = Released\t\t\r\n\r\n#XTIT: Label for ready to start operations\t\t\r\nreadyToStartOperations = Ready to Start\r\n\r\n#XTIT: Label for 'total' for Quantity in Operation In Progress block\t\t\r\ntotal = total:\r\n\r\n#XTIT: Label for 'open' for Quantity in Operation In Progress block\t\t\r\nopen = open:\r\n\r\n#XTIT: Label for 'pieces' for Quantity in Operation In Progress block\t\t\r\npieces = pcs\r\n\r\n#~~~ Footer Options ~~~~~~~~~~~~~~~~~~~~~~~\r\n\r\n#XTIT: Send E-Mail subject\r\nshareSendEmailWorklistSubject=<Email subject PLEASE REPLACE ACCORDING TO YOUR USE CASE>\r\n\r\n#YMSG: Send E-Mail message\r\nshareSendEmailWorklistMessage=<Email body PLEASE REPLACE ACCORDING TO YOUR USE CASE>\\r\\n{0}\r\n\r\n#XTIT: Send E-Mail subject\r\nshareSendEmailObjectSubject=<Email subject including object identifier PLEASE REPLACE ACCORDING TO YOUR USE CASE> {0}\r\n\r\n#YMSG: Send E-Mail message\r\nshareSendEmailObjectMessage=<Email body PLEASE REPLACE ACCORDING TO YOUR USE CASE> {0} (id: {1})\\r\\n{2}\r\n\r\n\r\n#~~~ Not Found View ~~~~~~~~~~~~~~~~~~~~~~~\r\n\r\n#XTIT: Not found view title\r\nnotFoundTitle=Not Found\r\n\r\n#YMSG: The MPE_OPERATION_LIST_SRV not found text is displayed when there is no MPE_OPERATION_LIST_SRV with this id\r\nnoObjectFoundText=This <ObjectName> is not available\r\n\r\n#YMSG: The MPE_OPERATION_LIST_SRV not available text is displayed when there is no data when starting the app\r\nnoObjectsAvailableText=No operations are currently available\r\n\r\n#YMSG: The not found text is displayed when there was an error loading the resource (404 error)\r\nnotFoundText=The requested resource was not found\r\n\r\n#~~~ Error Handling ~~~~~~~~~~~~~~~~~~~~~~~\r\n\r\n#YMSG: Error dialog description\r\nerrorText=Sorry, a technical error occurred! Please try again later.\r\n\r\n#YMSG: Error message, when no serial/batch number was entered\r\nSerialNumberMissing=Enter a Serial/Batch Number\r\n#YMSG: Error message, when no serial number was entered\r\nSerialNumberMissingII=Enter a Serial Number\r\n#YMSG: Error message, when no material number was entered\r\nMaterialMissing=Enter a Material\r\n#YMSG: Error message, when no order number was entered\r\nOrderMissing=Enter an Order\r\n#YMSG: Error message, when no operation number was entered\r\nOperationMissing=Enter an Operation\r\n#XMSG: Error message, when a too long order number was entered\r\nEnterValidOrderNumber = Enter a suitable Order Number\r\n#XMSG: Error message, when a too long operation number was entered\r\nEnterValidOperationNumber = Enter a suitable Operation Number\r\n\r\n\r\n#~~~ Perform Work View ~~~~~~~~~~~~~~~~~~~~~~~\r\n\r\n#XTIT: Perform Work view title\r\nperformWork=Perform Work\r\n\r\n#XFLD: Label for Material input field\r\nmaterialInput=Material:\r\n\r\n#XFLD: Label for Serial/Batch Number input field\r\nserialNumber=Serial/Batch Number:\r\n\r\n#XFLD: Label for Serial Number input field\r\nserialNumberII=Serial Number:\r\n\r\n#XFLD: Label for Order input field\r\norderInput=Order:\r\n\r\n#XFLD: Label for Operation Number input field\r\noperationNumber=Operation:\r\n\r\n#YINS: The text is displayed on the start page when order number and operation number have to be entered\r\norderStartPageMessage=Scan or type in\\nOrder and Operation\r\n\r\n#YINS: The text is displayed on the start page when material and serial number have to be entered\r\nmaterialStartPageMessage=Scan or type in\\nMaterial and Serial/Batch\\nNumber\r\n\r\n#YINS: The text is displayed on the start page when material and serial number have to be entered\r\nmaterialStartPageMessageII=Scan or type in\\nMaterial and Serial Number\r\n\r\n#XFLD: Column heading for Serial Number in suggestions table and value help table, about 18 characters space\r\nSerialNumber=Serial Number\r\n\r\n#XFLD: Column heading for Material Number in suggestions table and value help table, about 18 characters space\r\nMaterial=Material\r\n\r\n#XFLD: Column heading for Material Description in suggestions table and value help table, about 18 characters space\r\nMaterialDescription=Material Description\r\n\r\n#XFLD: Column heading for Manufacturing Order ID in suggestions table and value help table, about 18 characters space\r\nManufacturingOrder=Order ID\r\n\r\n#XFLD: Column heading for Manufacturing Order Operation in suggestions table and value help table, about 18 characters space\r\nManufacturingOrderOperation=Operation\r\n\r\n#XFLD: Column heading for Operation Activity Name in value help table\r\nOperationActivityName=Operation Activity\r\n\r\n#XFLD: Column heading for SASStatus  (SAS = Status and Action Schema) in in suggestions table and value help table, about 18 characters space\r\nSASStatusName=Status\r\n\r\n#XFLD: Column heading for ShopFloorItem in value help table, will not be displayed\r\nShopFloorItem=Shop Floor Item\r\n\r\n#XFLD: Column heading for OpActyNtwkInstance in value help table, will not be displayed\r\nOpActyNtwkInstance= Operation Activity Network Instance\r\n\r\n#XFLD: Column heading for OpActyNtwkElement in value help table, will not be displayed\r\nOpActyNtwkElement= Operation Activity Network Element\r\n\r\n#XTIT: Title for value help dialog\r\nMaterials=Materials\r\n\r\n#XTIT: Title for value help dialog\r\nSerialNumbers=Serial Numbers\r\n\r\n#XTIT: Title for value help dialog\r\nOrders=Orders\r\n\r\n#XTIT: Title for value help dialog\r\nOperations=Operations\r\n\r\n#XFLD: Title for value help dialog\r\nPlannedStartDate= Planned Start Date\r\n\r\n#XFLD: Title for value help dialog\r\nOperationQuantity= Operation Quantity\r\n\r\n#XTIT: Text for the Go Button\r\nGoButton=Go\r\n\r\n#XTOL: Tooltip for the Go Button\r\nGoButtonTooltip=Go\r\n\r\n#XTIT: Title for Serial Selection Popover\r\nSelectSerial=Select a Serial Number",
    "customer/zmpe/wcque/mgs1/ext/i18n/i18n_de.properties":
      "\r\n#XTIT: Application name\r\nappTitle=Arbeitsplatzvorrat abarbeiten\r\n\r\n#YDES: Application description\r\nappDescription=Arbeitsplatzvorrat abarbeiten\r\n\r\n#~~~ Worklist View ~~~~~~~~~~~~~~~~~~~~~~~~~~\r\n\r\n#XFLD: Plant label for Filter\r\nPlantFilter=Werk\r\n\r\n#XFLD: Work center label for Filter\r\nWorkCenterFilter=Arbeitsplatz\r\n\r\n#XBLI: Status filter dropdown option\r\nstatus_deleted=Gel\\u00F6scht\r\n\r\n#XBLI: Status filter dropdown option\r\nstatus_closed=Abgeschlossen\r\n\r\n#XBLI: Status filter dropdown option\r\nstatus_techCompleted=Technisch abgeschlossen\r\n\r\n#XBLI: Status filter dropdown option\r\nstatus_delivered=Geliefert\r\n\r\n#XBLI: Status filter dropdown option\r\nstatus_partdelivered=Teilgeliefert\r\n\r\n#XBLI: Status filter dropdown option\r\nstatus_confirmed=R\\u00FCckgemeldet\r\n\r\n#XBLI: Status filter dropdown option\r\nstatus_partConfirmed=Teilr\\u00FCckgemeldet\r\n\r\n#XBLI: Status filter dropdown option\r\nstatus_released=Freigegeben\r\n\r\n#XBLI: Status filter dropdown option\r\nstatus_created=Er\\u00F6ffnet\r\n\r\n#XBLI: Status filter dropdown option\r\nstatus_scheduled=Geplant\r\n\r\n#XFLD: Startdate label for Filter  \r\nStartDateFilter=Durchf\\u00FChrungsstartdatum\r\n\r\n#XFLD: Error message when user is not assigned to any workcenter\r\nnoWorkCenterInUserDefault=Ihr Benutzer ist keinem Standardarbeitsplatz zugeordnet. Bitte wenden Sie sich an den Fertigungssteurer.\r\n\r\n#XFLD: Error message header when no workcenter is chosen in user defaults\r\nnoWorkCenterInUserDefaultHeader=Kein Arbeitsplatz wurde definiert.\r\n\r\n#XFLD: Operations label for Filter\r\nallOperations=All Operations\r\n\r\n#XFLD: Processed label for microchart\r\nprocessed=Bearbeitet\r\n\r\n#XFLD: In progress label for microchart\r\ninProgress=In Bearbeitung\r\n\r\n#XFLD: Ready label for microchart\r\nready=Bereit\r\n\r\n#XFLD: Not ready label for microchart\r\nnotReady=Nicht bereit\r\n\r\n#XFLD: Operations label for Filter\r\nreleasedOperations=Released Operations\r\n\r\n#XFLD: Operations label for Filter\r\nunReleasedOperations=Nicht freigegebene Vorg\\u00E4nge\r\n\r\n#XFLD: Operations label for Filter\r\nOperations=Operations\r\n\r\n#XTIT: Table view title\r\nworklistViewTitle=Arbeitsplatzvorrat abarbeiten\r\n\r\n#XTIT: Items title for table\r\nitems=Positionen\r\n\r\n#XTOL: Tooltip for the search field\r\nworklistSearchTooltip=Geben Sie einen <ObjektNamen> oder einen Teil davon ein.\r\n\r\n#XBLI: text for a table with no data with filter or search\r\nworklistNoDataWithSearchText=Keine passenden Daten gefunden\r\n\r\n#XTIT: Table view title with placeholder for the number of items\r\nworklistTableTitleCount=Positionen ({0})\r\n\r\n#XTIT: Column label for Order\r\norder=Auftrag\r\n\r\n#XTIT: Order number place holder\r\norderNumberplaceHolder=Auftragsnummer\r\n\r\n#XTIT: Plant place holder\r\nplant=Plant\r\n\r\n\r\n#XTIT: Latest Start Date:\r\nlatestStartDate=Sp\\u00E4tester Starttermin\r\n\r\n#XTIT: Released\r\nreleased=Released\r\n\r\n#XTIT: Column label for Operation\r\noperation=Vorgang\r\n\r\n#XTIT: Table label\r\noperations=Vorg\\u00E4nge\r\n\r\n#XTIT: Column label for Material\r\nmaterial=Material\r\n\r\n#XTIT: Column label for Priority\r\npriority=Priorit\\u00E4t\r\n\r\n#XTIT: Column label for Workcenter\r\nworkCenter=Arbeitsplatz\r\n\r\n#XTIT: Column label for Progress\r\nprogress=Fortschritt\r\n\r\n#XTIT: Header label for title selector\r\nselectWcPlant=Arbeitsplatz ausw\\u00E4hlen\r\n\r\n#XTIT: Default label for default workcenter\r\ndefault=Standard\r\n\r\n#XTIT: Column label for WIP\t\t\r\nWIP=WIP\\t\\t\r\n\r\n#XTIT: Column label for Quantity\t\t\r\nquantity=Menge\r\n\r\n#XTIT: Column label for Released\r\nreleased=Freigegeben\r\n\r\n#XTIT: Column label for Operation/Quantity\t\t\r\nopQuantity=Vorgang/Menge\r\n\r\n#XTIT: Column label for Operation/Progress\t\t\r\nopProgress=Vorgang/Fortschritt\r\n\r\n#XTIT: Column label for Scheduled Start\r\nscheduledStart=Terminierter Start\r\n\r\n#XTIT: Column label for Scheduled End\r\nscheduledEnd=Terminiertes Ende\r\n\r\n#XTIT: Column label for Status\r\nstatus=Status\r\n\r\n#XTIT: Column label for Actual Start\t\t\r\nactualStart=Iststarttermin\r\n\r\n#XTIT: Column label for Actual End\t\t\r\nactualEnd=Istendtermin\r\n\r\n#XBLI: text for a table with no data\r\ntableNoDataText=Keine Vorg\\u00E4nge momentan verf\\u00FCgbar\r\n\r\n#XLNK: text for link in 'not found' pages\r\nbackToWorklist=Zur\\u00FCck zur App\r\n\r\n#XBLI: text for a table with no data\r\nnoItems=Keine Daten\r\n\r\n\r\n#XTOL: Tooltip for icon\r\nDelayTooltip=Verz\\u00F6gerung\r\n\r\n#XTOL: Tooltip for icon\r\nComponentIssueTooltip=Fehlende Komponenten\r\n\r\n#XTOL: Tooltip for icon\r\nToolIssueTooltip=Problem mit FHM\r\n\r\n#XTOL: Tooltip for icon\r\nQuantityIssueTooltip=Mengenabweichung\r\n\r\n#XTOL: Tooltip for icon\r\nQualityIssueTooltip=Qualit\\u00E4tsproblem\r\n\r\n#XTIT: Operation Issues\r\noperationIssues=Vorgangsprobleme\r\n\r\n#XTIT: Issues\r\nIssue=Probleme \r\n\r\n\r\n#~~~ Object View ~~~~~~~~~~~~~~~~~~~~~~~~~~\r\n\r\n#XTIT: Manage Work Center Queue Item title\r\nitem=Position\r\n\r\n#XTIT: Location in header Item title\t\t\r\nsupplyArea=Versorgungsbereich\\t\\t\r\n\r\n#XTIT: Location in header Item title\t\t\r\nresponsible=Verantwortlicher\\t\\t\r\n\r\n#XTIT: Location in header Item title\t\t\r\nplant=Werk\\t\\t\r\n\r\n#XTIT: Location in header Item title\t\t\r\nlocation=Standort\\t\\t\r\n\r\n#XTIT: Label with colon\t\t\r\nLABEL_WITH_COLON={0}\\:\\t\\t\r\n\r\n#XTIT: Label for object page sections\t\t\r\noperationsInProgress=Vorg\\u00E4nge in Arbeit\r\n\r\n#XTIT: Label for object page sections\t\t\r\noperationsNotStarted=Vorg\\u00E4nge nicht begonnen\r\n\r\n#XTIT: Label for object page sections\t\t\r\noperationsFinished=Abgeschlossene Vorg\\u00E4nge\\t\\t\r\n\r\n#XTIT: Label for all operations\t\t\r\nallOperations=Alle\\t\\t\r\n\r\n#XTIT: Label for released operations\t\t\r\nreleasedOperations=Freigegebene\\t\\t\r\n\r\n#XTIT: Label for ready to start operations\t\t\r\nreadyToStartOperations=Startbereit\r\n\r\n#XTIT: Label for 'total' for Quantity in Operation In Progress block\t\t\r\ntotal=Gesamt\\:\r\n\r\n#XTIT: Label for 'open' for Quantity in Operation In Progress block\t\t\r\nopen=Offen\\:\r\n\r\n#XTIT: Label for 'pieces' for Quantity in Operation In Progress block\t\t\r\npieces=Stk\r\n\r\n#~~~ Footer Options ~~~~~~~~~~~~~~~~~~~~~~~\r\n\r\n#XTIT: Send E-Mail subject\r\nshareSendEmailWorklistSubject=<E-Mail-Betreff\\: BITTE IHREM ANWENDUNGSFALL ENTSPRECHEND ERSETZEN>\r\n\r\n#YMSG: Send E-Mail message\r\nshareSendEmailWorklistMessage=<E-Mail-Text BITTE ENTSPRECHEND ANPASSEN>\\n{0}\r\n\r\n#XTIT: Send E-Mail subject\r\nshareSendEmailObjectSubject=<E-Mail-Betreff mit Objekt-ID\\: BITTE ENTSPRECHEND ANPASSEN> {0}\r\n\r\n#YMSG: Send E-Mail message\r\nshareSendEmailObjectMessage=<E-Mail-Text BITTE ENTSPRECHEND ANPASSEN> {0} (ID\\:\\u00A0 {1})\\n{2}\r\n\r\n\r\n#~~~ Not Found View ~~~~~~~~~~~~~~~~~~~~~~~\r\n\r\n#XTIT: Not found view title\r\nnotFoundTitle=Nicht gefunden\r\n\r\n#YMSG: The MPE_OPERATION_LIST_SRV not found text is displayed when there is no MPE_OPERATION_LIST_SRV with this id\r\nnoObjectFoundText=Dieses <ObjectName> ist nicht verf\\u00FCgbar.\r\n\r\n#YMSG: The MPE_OPERATION_LIST_SRV not available text is displayed when there is no data when starting the app\r\nnoObjectsAvailableText=Keine Vorg\\u00E4nge momentan verf\\u00FCgbar\r\n\r\n#YMSG: The not found text is displayed when there was an error loading the resource (404 error)\r\nnotFoundText=Die angeforderte Ressource wurde leider nicht gefunden.\r\n\r\n#~~~ Error Handling ~~~~~~~~~~~~~~~~~~~~~~~\r\n\r\n#YMSG: Error dialog description\r\nerrorText=Es ist leider ein technischer Fehler aufgetreten. Bitte versuchen Sie es sp\\u00E4ter erneut.\r\n\r\n#YMSG: Error message, when no serial/batch number was entered\r\nSerialNumberMissing=Geben Sie eine Serial- bzw. Chargennummer ein.\r\n#YMSG: Error message, when no serial number was entered\r\nSerialNumberMissingII=Geben Sie eine Serialnummer ein.\r\n#YMSG: Error message, when no material number was entered\r\nMaterialMissing=Geben Sie ein Material ein.\r\n#YMSG: Error message, when no order number was entered\r\nOrderMissing=Geben Sie einen Auftrag ein.\r\n#YMSG: Error message, when no operation number was entered\r\nOperationMissing=Geben Sie einen Vorgang ein.\r\n#XMSG: Error message, when a too long order number was entered\r\nEnterValidOrderNumber=Geben Sie eine g\\u00FCltige Auftragsnummer ein.\r\n#XMSG: Error message, when a too long operation number was entered\r\nEnterValidOperationNumber=Geben Sie eine g\\u00FCltige Vorgangsnummer ein.\r\n\r\n\r\n#~~~ Perform Work View ~~~~~~~~~~~~~~~~~~~~~~~\r\n\r\n#XTIT: Perform Work view title\r\nperformWork=Arbeit durchf\\u00FChren\r\n\r\n#XFLD: Label for Material input field\r\nmaterialInput=Material\\:\r\n\r\n#XFLD: Label for Serial/Batch Number input field\r\nserialNumber=Serial-/Chargennummer\\:\r\n\r\n#XFLD: Label for Serial Number input field\r\nserialNumberII=Serialnummer\\:\r\n\r\n#XFLD: Label for Order input field\r\norderInput=Auftrag\\:\r\n\r\n#XFLD: Label for Operation Number input field\r\noperationNumber=Vorgang\\:\r\n\r\n#YINS: The text is displayed on the start page when order number and operation number have to be entered\r\norderStartPageMessage=Auftrag und Vorgang\\neinscannen oder eingeben\r\n\r\n#YINS: The text is displayed on the start page when material and serial number have to be entered\r\nmaterialStartPageMessage=Material und \\nSerial-/Chargennummer\\neinscannen oder eingeben\r\n\r\n#YINS: The text is displayed on the start page when material and serial number have to be entered\r\nmaterialStartPageMessageII=Material- und Serialnummer\\neinscannen oder eingeben\r\n\r\n#XFLD: Column heading for Serial Number in suggestions table and value help table, about 18 characters space\r\nSerialNumber=Serialnummer\r\n\r\n#XFLD: Column heading for Material Number in suggestions table and value help table, about 18 characters space\r\nMaterial=Material\r\n\r\n#XFLD: Column heading for Material Description in suggestions table and value help table, about 18 characters space\r\nMaterialDescription=Materialbeschreibung\r\n\r\n#XFLD: Column heading for Manufacturing Order ID in suggestions table and value help table, about 18 characters space\r\nManufacturingOrder=Auftrag\r\n\r\n#XFLD: Column heading for Manufacturing Order Operation in suggestions table and value help table, about 18 characters space\r\nManufacturingOrderOperation=Vorgang\r\n\r\n#XFLD: Column heading for Operation Activity Name in value help table\r\nOperationActivityName=Vorgangsaktivit\\u00E4t\r\n\r\n#XFLD: Column heading for SASStatus  (SAS = Status and Action Schema) in in suggestions table and value help table, about 18 characters space\r\nSASStatusName=Status\r\n\r\n#XFLD: Column heading for ShopFloorItem in value help table, will not be displayed\r\nShopFloorItem=Serialisiertes Material\r\n\r\n#XFLD: Column heading for OpActyNtwkInstance in value help table, will not be displayed\r\nOpActyNtwkInstance=Vorgangsaktivit\\u00E4tsnetzinstanz\r\n\r\n#XFLD: Column heading for OpActyNtwkElement in value help table, will not be displayed\r\nOpActyNtwkElement=Vorgangsaktivit\\u00E4tsnetzelement\r\n\r\n#XTIT: Title for value help dialog\r\nMaterials=Materialien\r\n\r\n#XTIT: Title for value help dialog\r\nSerialNumbers=Serialnummern\r\n\r\n#XTIT: Title for value help dialog\r\nOrders=Auftr\\u00E4ge\r\n\r\n#XTIT: Title for value help dialog\r\nOperations=Vorg\\u00E4nge\r\n\r\n#XFLD: Title for value help dialog\r\nPlannedStartDate=Geplanter Starttermin\r\n\r\n#XFLD: Title for value help dialog\r\nOperationQuantity=Vorgangsmenge\r\n\r\n#XTIT: Text for the Go Button\r\nGoButton=Start\r\n\r\n#XTOL: Tooltip for the Go Button\r\nGoButtonTooltip=Start\r\n\r\n#XTIT: Title for Serial Selection Popover\r\nSelectSerial=W\\u00E4hlen Sie eine Serialnummer aus\r\n",
    "customer/zmpe/wcque/mgs1/ext/i18n/i18n_en.properties":
      "\r\n#XTIT: Application name\r\nappTitle=Manage Work Center Queue\r\n\r\n#YDES: Application description\r\nappDescription=Manage Work Center Queue\r\n\r\n#~~~ Worklist View ~~~~~~~~~~~~~~~~~~~~~~~~~~\r\n\r\n#XFLD: Plant label for Filter\r\nPlantFilter=Plant\r\n\r\n#XFLD: Work center label for Filter\r\nWorkCenterFilter=Work Center\r\n\r\n#XBLI: Status filter dropdown option\r\nstatus_deleted=Deleted\r\n\r\n#XBLI: Status filter dropdown option\r\nstatus_closed=Closed\r\n\r\n#XBLI: Status filter dropdown option\r\nstatus_techCompleted=Technically Completed\r\n\r\n#XBLI: Status filter dropdown option\r\nstatus_delivered=Delivered\r\n\r\n#XBLI: Status filter dropdown option\r\nstatus_partdelivered=Partially Delivered\r\n\r\n#XBLI: Status filter dropdown option\r\nstatus_confirmed=Confirmed\r\n\r\n#XBLI: Status filter dropdown option\r\nstatus_partConfirmed=Partially Confirmed\r\n\r\n#XBLI: Status filter dropdown option\r\nstatus_released=Released\r\n\r\n#XBLI: Status filter dropdown option\r\nstatus_created=Created\r\n\r\n#XBLI: Status filter dropdown option\r\nstatus_scheduled=Scheduled\r\n\r\n#XFLD: Startdate label for Filter  \r\nStartDateFilter=Execution Start Date\r\n\r\n#XFLD: Error message when user is not assigned to any workcenter\r\nnoWorkCenterInUserDefault=Your user is not assigned to a default work center. Please contact your supervisor.\r\n\r\n#XFLD: Error message header when no workcenter is chosen in user defaults\r\nnoWorkCenterInUserDefaultHeader=No work center has been defined.\r\n\r\n#XFLD: Operations label for Filter\r\nallOperations=All Operations\r\n\r\n#XFLD: Processed label for microchart\r\nprocessed=Processed\r\n\r\n#XFLD: In progress label for microchart\r\ninProgress=In Progress\r\n\r\n#XFLD: Ready label for microchart\r\nready=Ready\r\n\r\n#XFLD: Not ready label for microchart\r\nnotReady=Not Ready\r\n\r\n#XFLD: Operations label for Filter\r\nreleasedOperations=Released Operations\r\n\r\n#XFLD: Operations label for Filter\r\nunReleasedOperations=Unreleased Operations\r\n\r\n#XFLD: Operations label for Filter\r\nOperations=Operations\r\n\r\n#XTIT: Table view title\r\nworklistViewTitle=Manage Work Center Queue\r\n\r\n#XTIT: Items title for table\r\nitems=Items\r\n\r\n#XTOL: Tooltip for the search field\r\nworklistSearchTooltip=Enter an <ObjectName> name or a part of it.\r\n\r\n#XBLI: text for a table with no data with filter or search\r\nworklistNoDataWithSearchText=No matching records found\r\n\r\n#XTIT: Table view title with placeholder for the number of items\r\nworklistTableTitleCount=Items ({0})\r\n\r\n#XTIT: Column label for Order\r\norder=Order\r\n\r\n#XTIT: Order number place holder\r\norderNumberplaceHolder=Order Number\r\n\r\n#XTIT: Plant place holder\r\nplant=Plant\r\n\r\n\r\n#XTIT: Latest Start Date:\r\nlatestStartDate=Latest Start Date\r\n\r\n#XTIT: Released\r\nreleased=Released\r\n\r\n#XTIT: Column label for Operation\r\noperation=Operation\r\n\r\n#XTIT: Table label\r\noperations=Operations\r\n\r\n#XTIT: Column label for Material\r\nmaterial=Material\r\n\r\n#XTIT: Column label for Priority\r\npriority=Priority\r\n\r\n#XTIT: Column label for Workcenter\r\nworkCenter=Work Center\r\n\r\n#XTIT: Column label for Progress\r\nprogress=Progress\r\n\r\n#XTIT: Header label for title selector\r\nselectWcPlant=Select Work Center\r\n\r\n#XTIT: Default label for default workcenter\r\ndefault=Default\r\n\r\n#XTIT: Column label for WIP\t\t\r\nWIP=WIP\\t\\t\r\n\r\n#XTIT: Column label for Quantity\t\t\r\nquantity=Quantity\r\n\r\n#XTIT: Column label for Released\r\nreleased=Released\r\n\r\n#XTIT: Column label for Operation/Quantity\t\t\r\nopQuantity=Operation/Quantity\r\n\r\n#XTIT: Column label for Operation/Progress\t\t\r\nopProgress=Operation/Progress\r\n\r\n#XTIT: Column label for Scheduled Start\r\nscheduledStart=Scheduled Start\r\n\r\n#XTIT: Column label for Scheduled End\r\nscheduledEnd=Scheduled End\r\n\r\n#XTIT: Column label for Status\r\nstatus=Status\r\n\r\n#XTIT: Column label for Actual Start\t\t\r\nactualStart=Actual Start\r\n\r\n#XTIT: Column label for Actual End\t\t\r\nactualEnd=Actual End\r\n\r\n#XBLI: text for a table with no data\r\ntableNoDataText=No operations are currently available\r\n\r\n#XLNK: text for link in 'not found' pages\r\nbackToWorklist=Go back to app\r\n\r\n#XBLI: text for a table with no data\r\nnoItems=No items\r\n\r\n\r\n#XTOL: Tooltip for icon\r\nDelayTooltip=Delay\r\n\r\n#XTOL: Tooltip for icon\r\nComponentIssueTooltip=Missing Components\r\n\r\n#XTOL: Tooltip for icon\r\nToolIssueTooltip=PRT Issue\r\n\r\n#XTOL: Tooltip for icon\r\nQuantityIssueTooltip=Quantity Deviation\r\n\r\n#XTOL: Tooltip for icon\r\nQualityIssueTooltip=Quality Issue\r\n\r\n#XTIT: Operation Issues\r\noperationIssues=Operation Issues\r\n\r\n#XTIT: Issues\r\nIssue=Issues \r\n\r\n\r\n#~~~ Object View ~~~~~~~~~~~~~~~~~~~~~~~~~~\r\n\r\n#XTIT: Manage Work Center Queue Item title\r\nitem=Item\r\n\r\n#XTIT: Location in header Item title\t\t\r\nsupplyArea=Supply Area\\t\\t\r\n\r\n#XTIT: Location in header Item title\t\t\r\nresponsible=Person Responsible\\t\\t\r\n\r\n#XTIT: Location in header Item title\t\t\r\nplant=Plant\\t\\t\r\n\r\n#XTIT: Location in header Item title\t\t\r\nlocation=Location\\t\\t\r\n\r\n#XTIT: Label with colon\t\t\r\nLABEL_WITH_COLON={0}\\:\\t\\t\r\n\r\n#XTIT: Label for object page sections\t\t\r\noperationsInProgress=Operations in Progress\r\n\r\n#XTIT: Label for object page sections\t\t\r\noperationsNotStarted=Operations not Started\r\n\r\n#XTIT: Label for object page sections\t\t\r\noperationsFinished=Finished Operations\\t\\t\r\n\r\n#XTIT: Label for all operations\t\t\r\nallOperations=All\\t\\t\r\n\r\n#XTIT: Label for released operations\t\t\r\nreleasedOperations=Released\\t\\t\r\n\r\n#XTIT: Label for ready to start operations\t\t\r\nreadyToStartOperations=Ready to Start\r\n\r\n#XTIT: Label for 'total' for Quantity in Operation In Progress block\t\t\r\ntotal=total\\:\r\n\r\n#XTIT: Label for 'open' for Quantity in Operation In Progress block\t\t\r\nopen=open\\:\r\n\r\n#XTIT: Label for 'pieces' for Quantity in Operation In Progress block\t\t\r\npieces=pcs\r\n\r\n#~~~ Footer Options ~~~~~~~~~~~~~~~~~~~~~~~\r\n\r\n#XTIT: Send E-Mail subject\r\nshareSendEmailWorklistSubject=<E-Mail Subject PLEASE REPLACE ACCORDING TO YOUR USE CASE>\r\n\r\n#YMSG: Send E-Mail message\r\nshareSendEmailWorklistMessage=<Email body PLEASE REPLACE ACCORDING TO YOUR USE CASE>\\n{0}\r\n\r\n#XTIT: Send E-Mail subject\r\nshareSendEmailObjectSubject=<Email subject including object identifier PLEASE REPLACE ACCORDING TO YOUR USE CASE> {0}\r\n\r\n#YMSG: Send E-Mail message\r\nshareSendEmailObjectMessage=<Email body PLEASE REPLACE ACCORDING TO YOUR USE CASE> {0} (ID\\: {1})\\n{2}\r\n\r\n\r\n#~~~ Not Found View ~~~~~~~~~~~~~~~~~~~~~~~\r\n\r\n#XTIT: Not found view title\r\nnotFoundTitle=Not found\r\n\r\n#YMSG: The MPE_OPERATION_LIST_SRV not found text is displayed when there is no MPE_OPERATION_LIST_SRV with this id\r\nnoObjectFoundText=This <ObjectName> is not available.\r\n\r\n#YMSG: The MPE_OPERATION_LIST_SRV not available text is displayed when there is no data when starting the app\r\nnoObjectsAvailableText=No operations are currently available\r\n\r\n#YMSG: The not found text is displayed when there was an error loading the resource (404 error)\r\nnotFoundText=Sorry, we couldn't find the requested resource.\r\n\r\n#~~~ Error Handling ~~~~~~~~~~~~~~~~~~~~~~~\r\n\r\n#YMSG: Error dialog description\r\nerrorText=Sorry, a technical error occurred\\! Please try again later.\r\n\r\n#YMSG: Error message, when no serial/batch number was entered\r\nSerialNumberMissing=Enter a serial/batch number.\r\n#YMSG: Error message, when no serial number was entered\r\nSerialNumberMissingII=Enter a serial number.\r\n#YMSG: Error message, when no material number was entered\r\nMaterialMissing=Enter a material.\r\n#YMSG: Error message, when no order number was entered\r\nOrderMissing=Enter an order.\r\n#YMSG: Error message, when no operation number was entered\r\nOperationMissing=Enter an operation.\r\n#XMSG: Error message, when a too long order number was entered\r\nEnterValidOrderNumber=Enter a valid order number.\r\n#XMSG: Error message, when a too long operation number was entered\r\nEnterValidOperationNumber=Enter a valid operation number.\r\n\r\n\r\n#~~~ Perform Work View ~~~~~~~~~~~~~~~~~~~~~~~\r\n\r\n#XTIT: Perform Work view title\r\nperformWork=Perform Work\r\n\r\n#XFLD: Label for Material input field\r\nmaterialInput=Material\\:\r\n\r\n#XFLD: Label for Serial/Batch Number input field\r\nserialNumber=Serial/Batch Number\\:\r\n\r\n#XFLD: Label for Serial Number input field\r\nserialNumberII=Serial Number\\:\r\n\r\n#XFLD: Label for Order input field\r\norderInput=Order\\:\r\n\r\n#XFLD: Label for Operation Number input field\r\noperationNumber=Operation\\:\r\n\r\n#YINS: The text is displayed on the start page when order number and operation number have to be entered\r\norderStartPageMessage=Scan or type in\\norder and operation\r\n\r\n#YINS: The text is displayed on the start page when material and serial number have to be entered\r\nmaterialStartPageMessage=Scan or type in\\nmaterial and serial/batch\\nnumber\r\n\r\n#YINS: The text is displayed on the start page when material and serial number have to be entered\r\nmaterialStartPageMessageII=Scan or type in\\nmaterial and serial number\r\n\r\n#XFLD: Column heading for Serial Number in suggestions table and value help table, about 18 characters space\r\nSerialNumber=Serial Number\r\n\r\n#XFLD: Column heading for Material Number in suggestions table and value help table, about 18 characters space\r\nMaterial=Material\r\n\r\n#XFLD: Column heading for Material Description in suggestions table and value help table, about 18 characters space\r\nMaterialDescription=Material Description\r\n\r\n#XFLD: Column heading for Manufacturing Order ID in suggestions table and value help table, about 18 characters space\r\nManufacturingOrder=Order\r\n\r\n#XFLD: Column heading for Manufacturing Order Operation in suggestions table and value help table, about 18 characters space\r\nManufacturingOrderOperation=Operation\r\n\r\n#XFLD: Column heading for Operation Activity Name in value help table\r\nOperationActivityName=Operation Activity\r\n\r\n#XFLD: Column heading for SASStatus  (SAS = Status and Action Schema) in in suggestions table and value help table, about 18 characters space\r\nSASStatusName=Status\r\n\r\n#XFLD: Column heading for ShopFloorItem in value help table, will not be displayed\r\nShopFloorItem=Serialized Material\r\n\r\n#XFLD: Column heading for OpActyNtwkInstance in value help table, will not be displayed\r\nOpActyNtwkInstance=Operation Activity Network Instance\r\n\r\n#XFLD: Column heading for OpActyNtwkElement in value help table, will not be displayed\r\nOpActyNtwkElement=Operation Activity Network Element\r\n\r\n#XTIT: Title for value help dialog\r\nMaterials=Materials\r\n\r\n#XTIT: Title for value help dialog\r\nSerialNumbers=Serial Numbers\r\n\r\n#XTIT: Title for value help dialog\r\nOrders=Orders\r\n\r\n#XTIT: Title for value help dialog\r\nOperations=Operations\r\n\r\n#XFLD: Title for value help dialog\r\nPlannedStartDate=Planned Start Date\r\n\r\n#XFLD: Title for value help dialog\r\nOperationQuantity=Operation Quantity\r\n\r\n#XTIT: Text for the Go Button\r\nGoButton=Go\r\n\r\n#XTOL: Tooltip for the Go Button\r\nGoButtonTooltip=Go\r\n\r\n#XTIT: Title for Serial Selection Popover\r\nSelectSerial=Select a Serial Number\r\n",
    "customer/zmpe/wcque/mgs1/ext/manifest.json":
      '{"_version":"1.1.0","sap.app":{"_version":"1.1.0","id":"customer.zmpe.wcque.mgs1.ext","type":"application","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","sourceTemplate":{"id":"generator-extensibilty-sub","version":"1.0.0"},"i18n":"i18n/i18n.properties","dataSources":{}},"sap.ui":{"_version":"1.1.0","technology":"UI5","icons":{"icon":"sap-icon://task","favIcon":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":false},"supportedThemes":["sap_hcb","sap_bluecrystal"]},"sap.ui5":{"_version":"1.1.0","dependencies":{"minUI5Version":"1.90.2"},"extends":{"component":"i2d.mpe.wcqueue.manages1","extensions":{"sap.ui.viewReplacements":{"i2d.mpe.wcqueue.manages1.view.Object":{"viewName":"customer.zmpe.wcque.mgs1.ext.view.ObjectCustom","type":"XML"},"i2d.mpe.wcqueue.manages1.blocks.OperationInProgressBlock":{"viewName":"customer.zmpe.wcque.mgs1.ext.blocks.OperationInProgressBlockCustom","type":"XML"}},"sap.ui.controllerExtensions":{"i2d.mpe.wcqueue.manages1.blocks.OperationInProgressController":{"controllerName":"customer.zmpe.wcque.mgs1.ext.blocks.OperationInProgressControllerCustom"}}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"customer.zmpe.wcque.mgs1.ext.i18n.i18n"}}}}}',
    "customer/zmpe/wcque/mgs1/ext/view/ObjectCustom.view.xml":
      '\n<core:View controllerName="i2d.mpe.wcqueue.manages1.controller.Object" xmlns:core="sap.ui.core" xmlns="sap.uxap"\n\txmlns:layout="sap.ui.layout" xmlns:m="sap.m" xmlns:customBlock="i2d.mpe.wcqueue.manages1.blocks"\n\txmlns:smartVariants="sap.ui.comp.smartvariants" xmlns:smartFilterBar="sap.ui.comp.smartfilterbar"\n\txmlns:commonsBlock="sap.i2d.mpe.lib.commons1.blocks" height="100%"><ObjectPageLayout upperCaseAnchorBar="false" id="ObjectPageLayout" enableLazyLoading="true" useIconTabBar="true"><headerTitle><ObjectPageHeader id="idOpreationObjectPageHeader" objectTitle="{DetailModel>/WorkCenter}" objectSubtitle="{DetailModel>/WorkCenterText}"\n\t\t\t\theaderDesign="Light" showTitleSelector="true" titleSelectorPress="handleTitleSelectorPress"></ObjectPageHeader></headerTitle><headerContent><m:ObjectAttribute id="WorkCenterLocation" title="{i18n>location}" visible="{= ${DetailModel>/WorkCenterLocation} !== \'\'}"\n\t\t\t\ttext="{DetailModel>/WorkCenterLocation}" tooltip="{DetailModel>/WorkCenterLocation}"/><m:ObjectAttribute title="{i18n>supplyArea}" visible="{= ${DetailModel>/SupplyArea} !== \'\'}" text="{DetailModel>/SupplyArea}"\n\t\t\t\ttooltip="{DetailModel>/SupplyArea}"/><m:ObjectAttribute id="WorkCenterResponsible" title="{i18n>responsible}" visible="{= ${DetailModel>/WorkCenterResponsible} !== \'\'}"\n\t\t\t\ttext="{parts:[{path:\'DetailModel>/WorkCenterResponsible\'}, {path:\'DetailModel>/WorkCenterResponsibleName\'}], formatter:\'.formatter.formatTextWithBrackets\'}"\n\t\t\t\ttooltip="{parts:[{path:\'DetailModel>/WorkCenterResponsible\'}, {path:\'DetailModel>/WorkCenterResponsibleName\'}], formatter:\'.formatter.formatTextWithBrackets\'}"/><m:ObjectAttribute title="{i18n>plant}" visible="{= ${DetailModel>/ProductionPlant} !== \'\'}"\n\t\t\t\ttext="{parts:[{path:\'DetailModel>/ProductionPlant\'}, {path:\'DetailModel>/PlantName\'}], formatter:\'.formatter.formatTextWithBrackets\'}"\n\t\t\t\ttooltip="{parts:[{path:\'DetailModel>/ProductionPlant\'}, {path:\'DetailModel>/PlantName\'}], formatter:\'.formatter.formatTextWithBrackets\'}"/></headerContent><sections upperCaseAnchorBar="true" id="objectPageSection"><ObjectPageSection><subSections><ObjectPageSubSection><blocks><customBlock:OperationInProgressBlock id="idOperationInPrgrss2"/></blocks></ObjectPageSubSection></subSections></ObjectPageSection><ObjectPageSection title="{i18n>operationsNotStarted}"><subSections><ObjectPageSubSection visible="false"><blocks><customBlock:OperationNotStartedBlock columnLayout="4" id="idOperationNotStrtd2"/></blocks></ObjectPageSubSection></subSections></ObjectPageSection><ObjectPageSection title="{i18n>operationsFinished}"><subSections><ObjectPageSubSection visible="false"><blocks><customBlock:OperationFinishedBlock columnLayout="4" id="idOperationFnshd2"/></blocks></ObjectPageSubSection></subSections></ObjectPageSection></sections></ObjectPageLayout></core:View>',
    
    "customer/zmpe/wcque/mgs1/ext/utils/NavHelper.js":
      function () {
        sap.ui.define(
          ["sap/i2d/mpe/lib/commons1/utils/NavHelper"],
          function (t) {
            "use strict";
            let e = t;
            e.navToActivityDetail = function (t, e, s, o) {
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
            return e;
          }
        );
      },
    "customer/zmpe/wcque/mgs1/ext/utils/util.js":
      function () {
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
      },
  },
});
