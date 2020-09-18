sap.ui.define([
			"sap/ui/core/mvc/Controller",
			"sap/ui/model/json/JSONModel"
		], function(Controller, JSONModel) {
			"use strict";

			return Controller.extend("AggrBinding.controller.View2", {
				
				onInit: function(oEvent){
					var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("view2").attachPatternMatched(this._onObjectMatched, this);
				},
					_onObjectMatched: function(oEvent) {
						var a = "1";
						var test = {};
						test.productName = oEvent.getParameters().arguments.ProductName;
						test.quantity = oEvent.getParameters().arguments.Quantity;
						var jsonModel = new JSONModel(test);
						this.getView().byId("idProductName").setValue(test.productName);
						this.getView().byId("idQuantity").setValue(test.quantity);
					},
					
					onNavBack: function(oEvent){
						var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				        oRouter.navTo("view1", {}, true);
					}
						/**
						 * Called when a controller is instantiated and its View controls (if available) are already created.
						 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
						 * @memberOf AggrBinding.view.view.View2
						 */
						//	onInit: function() {
						//
						//	},

						/**
						 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
						 * (NOT before the first rendering! onInit() is used for that one!).
						 * @memberOf AggrBinding.view.view.View2
						 */
						//	onBeforeRendering: function() {
						//
						//	},

						/**
						 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
						 * This hook is the same one that SAPUI5 controls get after being rendered.
						 * @memberOf AggrBinding.view.view.View2
						 */
						//	onAfterRendering: function() {
						//
						//	},

						/**
						 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
						 * @memberOf AggrBinding.view.view.View2
						 */
						//	onExit: function() {
						//
						//	}

					});

			});