"use strict";
var BuildPlatform = require("../types/build-platform");
var BuildPath = require("./build-path");
var BuildTask = (function () {
    function BuildTask() {
        this.name = 'web-mobile';
        this.title = 'Default Title';
        this.platform = BuildPlatform.WEB_MOBILE;
        this.buildPath = new BuildPath();
        this.startScene = null;
        this.excludeScenes = [];
        this.mainBundleCompressionType = 'default';
        this.isInlineSpriteFrames = false;
        this.webOrientation = 'auto';
        this.isVConsole = false;
        this.isMD5Cache = false;
        this.isDebug = false;
        this.isSourceMaps = false;
    }
    Object.defineProperty(BuildTask.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildTask.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (newTitle) {
            this._title = newTitle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildTask.prototype, "platform", {
        get: function () {
            return this._platform;
        },
        set: function (newPlatform) {
            this._platform = newPlatform;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildTask.prototype, "buildPath", {
        get: function () {
            return this._buildPath;
        },
        set: function (newBuildPath) {
            this._buildPath = newBuildPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildTask.prototype, "startScene", {
        get: function () {
            return this._startScene;
        },
        set: function (newStartScene) {
            this._startScene = newStartScene;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildTask.prototype, "excludeScenes", {
        get: function () {
            return this._excludeScenes;
        },
        set: function (newExcludeScenes) {
            this._excludeScenes = newExcludeScenes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildTask.prototype, "mainBundleCompressionType", {
        get: function () {
            return this._mainBundleCompressionType;
        },
        set: function (newMainBundleCompressionType) {
            this._mainBundleCompressionType = newMainBundleCompressionType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildTask.prototype, "isInlineSpriteFrames", {
        get: function () {
            return this._isInlineSpriteFrames;
        },
        set: function (newIsInlineSpriteFrames) {
            this._isInlineSpriteFrames = newIsInlineSpriteFrames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildTask.prototype, "webOrientation", {
        get: function () {
            return this._webOrientation;
        },
        set: function (newWebOrientation) {
            this._webOrientation = newWebOrientation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildTask.prototype, "isVConsole", {
        get: function () {
            return this._isVConsole;
        },
        set: function (newIsVConsole) {
            this._isVConsole = newIsVConsole;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildTask.prototype, "isMD5Cache", {
        get: function () {
            return this._isMD5Cache;
        },
        set: function (newIsMD5Cache) {
            this._isMD5Cache = newIsMD5Cache;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildTask.prototype, "isDebug", {
        get: function () {
            return this._isDebug;
        },
        set: function (newIsDebug) {
            this._isDebug = newIsDebug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildTask.prototype, "isSourceMaps", {
        get: function () {
            return this._isSourceMaps;
        },
        set: function (newIsSourceMaps) {
            this._isSourceMaps = newIsSourceMaps;
        },
        enumerable: false,
        configurable: true
    });
    BuildTask.prototype.toJSON = function () {
        return {
            name: this.name,
            title: this.title,
            platform: this.platform,
            buildPath: this.buildPath.toJSON(),
            startScene: this.startScene,
            excludeScenes: this.excludeScenes,
            mainBundleCompressionType: this.mainBundleCompressionType,
            isInlineSpriteFrames: this.isInlineSpriteFrames,
            webOrientation: this.webOrientation,
            isVConsole: this.isVConsole,
            isMD5Cache: this.isMD5Cache,
            isDebug: this.isDebug,
            isSourceMaps: this.isSourceMaps,
        };
    };
    BuildTask.fromJSON = function (json) {
        var ret = new BuildTask();
        var data = JSON.parse(json);
        for (var prop in data) {
            if (prop === 'buildPath') {
                ret[prop] = BuildPath.fromJSON(JSON.stringify(data[prop]));
            }
            else {
                ret[prop] = data[prop];
            }
        }
        return ret;
    };
    return BuildTask;
}());
module.exports = BuildTask;
