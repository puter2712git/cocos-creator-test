"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProfileManager = require("./common/profile-manager");
function load() {
    ProfileManager.instance.StartUp();
}
function unload() { }
var app = {
    load: load,
    unload: unload,
    messages: {
        'open-build-tasks-panel': function () {
            Editor.Panel.open('build-tasks');
        },
        reload: function () {
            Editor.Package.reload(Editor.Package.packagePath('build-tasks'));
        },
    },
};
module.exports = app;
