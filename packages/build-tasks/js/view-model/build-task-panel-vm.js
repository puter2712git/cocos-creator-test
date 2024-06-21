"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BuildTaskPanelVM = (function () {
    function BuildTaskPanelVM() {
        this._isConfig = false;
        this._buildTasks = [];
    }
    Object.defineProperty(BuildTaskPanelVM.prototype, "isConfig", {
        get: function () {
            return this._isConfig;
        },
        set: function (newIsConfig) {
            this._isConfig = newIsConfig;
        },
        enumerable: false,
        configurable: true
    });
    return BuildTaskPanelVM;
}());
