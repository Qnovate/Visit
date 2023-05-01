sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        CustomAction1: function(oEvent) {
        MessageToast.show("Custom handler invoked.");
        }
    };
});