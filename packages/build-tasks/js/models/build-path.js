"use strict";
var BuildPath = (function () {
    function BuildPath() {
        this._basePath = '';
        this._folderPath = '';
        this.basePath = Editor.Project.path + '/build';
        this.folderPath = 'web-mobile';
    }
    Object.defineProperty(BuildPath.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (newBasePath) {
            this._basePath = newBasePath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildPath.prototype, "folderPath", {
        get: function () {
            return this._folderPath;
        },
        set: function (newFolderPath) {
            this._folderPath = newFolderPath;
        },
        enumerable: false,
        configurable: true
    });
    BuildPath.prototype.toJSON = function () {
        return {
            basePath: this.basePath,
            folderPath: this.folderPath,
        };
    };
    BuildPath.fromJSON = function (json) {
        var ret = new BuildPath();
        var data = JSON.parse(json);
        for (var prop in data) {
            ret[prop] = data[prop];
        }
        return ret;
    };
    BuildPath.prototype.GetBuildPath = function () {
        return this.basePath + '/' + this.folderPath;
    };
    return BuildPath;
}());
module.exports = BuildPath;
