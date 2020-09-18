sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("AggrBinding.controller.View1", {

		onOpenDialog: function(oEvent) {
			var oView = this.getView();
			//var oData = {
			//	recipient : {
			//		name : "How are you"
			//	}
			//};
			var fragmentData = {
				ProductName: "",
				Quantity: "",
				ExtendedPrice: "",
				ShipperName: "",
				ShippedDate: "",
				Status: ""
			};
			var oData = this.byId("idProductsTable").getSelectedItem();
			fragmentData.ProductName = this.byId("idProductsTable").getSelectedItems()[0].getCells()[0].getText();
			fragmentData.Quantity = this.byId("idProductsTable").getSelectedItems()[0].getCells()[1].getText();
			fragmentData.ExtendedPrice = this.byId("idProductsTable").getSelectedItems()[0].getCells()[2].getText();
			fragmentData.ShipperName = this.byId("idProductsTable").getSelectedItems()[0].getCells()[3].getText();
			fragmentData.ShippedDate = this.byId("idProductsTable").getSelectedItems()[0].getCells()[4].getText();
			var jsonModel = new JSONModel(fragmentData);
			// this.getView().setModel(jsonModel);
			var oDialog = oView.byId("helloDialog");

			var currencyModel = new JSONModel({
				currency: "EUR"
			});
			oView.setModel(oView, "view");

			// create dialog lazily
			if (!oDialog) {
				// create dialog via fragment factory
				this.oDialog = sap.ui.xmlfragment("helloDialog", "AggrBinding.view.HelloDialog", this);
				oView.addDependent(oDialog);
				var oTitle = sap.ui.core.Fragment.byId("helloDialog", "helloDialogTitle");
				oTitle.setModel(jsonModel, "invoices");
			}

			this.oDialog.open();
		},

		onCloseDialog: function(oEvent) {
			this.oDialog.close();
			this.oDialog.destroy();
		},

		onPress: function(oEvent) {

			var oView = this.getView();

			var fragmentData = {
				ProductName: "",
				Quantity: "",
				ExtendedPrice: "",
				ShipperName: "",
				ShippedDate: "",
				Status: ""
			};

			fragmentData.ProductName = oEvent.getSource().getParent().getCells()[0].getText();
			fragmentData.Quantity = oEvent.getSource().getParent().getCells()[1].getText();
			fragmentData.ExtendedPrice = oEvent.getSource().getParent().getCells()[2].getText();
			fragmentData.ShipperName = oEvent.getSource().getParent().getCells()[3].getText();
			fragmentData.ShippedDate = oEvent.getSource().getParent().getCells()[4].getText();

			var jsonModel = new JSONModel(fragmentData);
			// this.getView().setModel(jsonModel);
			var oDialog = oView.byId("helloDialog");

			if (!oDialog) {
				// create dialog via fragment factory
				this.oDialog = sap.ui.xmlfragment("helloDialog", "AggrBinding.view.HelloDialog", this);
				oView.addDependent(oDialog);
				var oTitle = sap.ui.core.Fragment.byId("helloDialog", "helloDialogTitle");
				oTitle.setModel(jsonModel, "invoices");
			}

			this.oDialog.open();
		},

		onGoToPage2Press: function(oEvent) {
			var dataToBePassed = {
				ProductName: "",
				Quantity: "",
				ExtendedPrice: "",
				ShipperName: "",
				ShippedDate: "",
				Status: ""
			};

			dataToBePassed.ProductName = this.byId("idProductsTable").getSelectedItem().getCells()[0].getText();
			dataToBePassed.Quantity = this.byId("idProductsTable").getSelectedItem().getCells()[1].getText();
			dataToBePassed.ExtendedPrice = this.byId("idProductsTable").getSelectedItem().getCells()[2].getText();
			dataToBePassed.ShipperName = this.byId("idProductsTable").getSelectedItem().getCells()[3].getText();
			dataToBePassed.ShippedDate = this.byId("idProductsTable").getSelectedItem().getCells()[4].getText();

			var oModel = new sap.ui.model.json.JSONModel();

			oModel.setData({
				ProductName: this.byId("idProductsTable").getSelectedItem().getCells()[0].getText(),
				Quantity: this.byId("idProductsTable").getSelectedItem().getCells()[1].getText(),
				ExtendedPrice: this.byId("idProductsTable").getSelectedItem().getCells()[2].getText(),
				ShipperName: this.byId("idProductsTable").getSelectedItem().getCells()[3].getText(),
				ShippedDate: this.byId("idProductsTable").getSelectedItem().getCells()[4].getText()
			});

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("view2", {
				ProductName: this.byId("idProductsTable").getSelectedItem().getCells()[1].getText(),
				Quantity: this.byId("idProductsTable").getSelectedItem().getCells()[1].getText()
			});
		}

	});
});