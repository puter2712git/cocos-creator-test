"use strict";
var BuildTask = require("../models/build-task");
var fs = require("fs");
var PROFILE_PATH = Editor.url('profile://project/build-tasks/profile.json');
var DEFAULT_DATA = {
    buildTasks: [],
};
var ProfileManager = (function () {
    function ProfileManager() {
    }
    Object.defineProperty(ProfileManager, "instance", {
        get: function () {
            var _a;
            (_a = this._instance) !== null && _a !== void 0 ? _a : (this._instance = new ProfileManager());
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    ProfileManager.prototype.StartUp = function () {
        if (!fs.existsSync(PROFILE_PATH)) {
            fs.writeFileSync(PROFILE_PATH, JSON.stringify(DEFAULT_DATA));
        }
    };
    ProfileManager.prototype.Update = function (buildTasks) {
        var data = JSON.parse(fs.readFileSync(PROFILE_PATH, 'utf-8'));
        data.buildTasks = buildTasks;
        fs.writeFileSync(PROFILE_PATH, JSON.stringify(data));
    };
    ProfileManager.prototype.GetBuildTasks = function () {
        var ret = [];
        var data = JSON.parse(fs.readFileSync(PROFILE_PATH, 'utf-8'));
        for (var i = 0; i < data.buildTasks.length; i++) {
            ret.push(BuildTask.fromJSON(JSON.stringify(data.buildTasks[i])));
        }
        return ret;
    };
    ProfileManager._instance = null;
    return ProfileManager;
}());
module.exports = ProfileManager;
