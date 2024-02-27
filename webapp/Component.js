jQuery.sap.declare("customer.zmpe.wcque.mgs1.ext.Component");

// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "i2d.mpe.wcqueue.manages1",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	url: "/sap/bc/ui5_ui5/sap/MPE_WCQUE_MNGS1"

	// we use a URL relative to our own component
	// extension application is deployed with customer namespace
});

i2d.mpe.wcqueue.manages1.Component.extend("customer.zmpe.wcque.mgs1.ext.Component", {
	metadata: {
		manifest: "json"
	}	
});
