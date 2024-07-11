"use strict";
var fs = require("fs");
var PROFILE_PATH = Editor.url('profile://project/union-builder/profile.json');
var DEFAULT_DATA = {
    buildTasks: [],
    cocosPath: null,
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
    ProfileManager.prototype.initialize = function () {
        if (!fs.existsSync(PROFILE_PATH)) {
            fs.writeFileSync(PROFILE_PATH, JSON.stringify(DEFAULT_DATA));
        }
    };
    ProfileManager.prototype.update = function (profile) {
        fs.writeFileSync(PROFILE_PATH, JSON.stringify(profile));
    };
    ProfileManager.prototype.getProfile = function () {
        var ret = JSON.parse(fs.readFileSync(PROFILE_PATH, 'utf-8'));
        return ret;
    };
    ProfileManager.prototype.setCocosCreatorPath = function (path) {
        var profile = JSON.parse(fs.readFileSync(PROFILE_PATH, 'utf-8'));
        profile.cocosPath = path;
        fs.writeFileSync(PROFILE_PATH, JSON.stringify(profile));
    };
    ProfileManager._instance = null;
    return ProfileManager;
}());
module.exports = ProfileManager;
