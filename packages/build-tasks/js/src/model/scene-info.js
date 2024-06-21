"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SceneInfo = (function () {
    function SceneInfo() {
        this._path = '';
        this._name = '';
        this._uuid = '';
    }
    Object.defineProperty(SceneInfo.prototype, "path", {
        get: function () {
            return this._path;
        },
        set: function (newPath) {
            this._path = newPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SceneInfo.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SceneInfo.prototype, "uuid", {
        get: function () {
            return this._uuid;
        },
        set: function (newUuid) {
            this._uuid = newUuid;
        },
        enumerable: false,
        configurable: true
    });
    return SceneInfo;
}());
module.exports = SceneInfo;
