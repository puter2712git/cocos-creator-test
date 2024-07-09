"use strict";
var SceneInfo = (function () {
    function SceneInfo() {
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
    SceneInfo.prototype.toJSON = function () {
        return {
            path: this.path,
            name: this.name,
            uuid: this.uuid,
        };
    };
    SceneInfo.fromJSON = function (json) {
        var ret = new SceneInfo();
        var data = JSON.parse(json);
        for (var prop in data) {
            ret[prop] = data[prop];
        }
        return ret;
    };
    return SceneInfo;
}());
module.exports = SceneInfo;
