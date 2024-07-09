"use strict";
var SceneInfo = require("../models/scene-info");
var SceneManager = (function () {
    function SceneManager() {
        this._scenes = [];
    }
    Object.defineProperty(SceneManager, "instance", {
        get: function () {
            var _a;
            (_a = this._instance) !== null && _a !== void 0 ? _a : (this._instance = new SceneManager());
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    SceneManager.prototype.GetScenes = function () {
        this._scenes = [];
        Editor.assetdb.queryAssets('db://assets/**/*', 'scene', function (err, results) {
            var _this = this;
            results.forEach(function (result) {
                var sceneInfo = new SceneInfo();
                sceneInfo.path = result.url;
                sceneInfo.name = result.url;
                sceneInfo.uuid = result.uuid;
                _this._scenes.push(sceneInfo);
            });
        });
        return this._scenes;
    };
    SceneManager._instance = null;
    return SceneManager;
}());
module.exports = SceneManager;
