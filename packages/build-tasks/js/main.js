"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProfileManager = require("./common/profile-manager");
function load() {
    ProfileManager.instance.StartUp();
}
var a = 'test';
function unload() { }
var app = {
    load: load,
    unload: unload,
    messages: {
        'open-build-tasks-panel': function () {
            Editor.Panel.open('build-tasks');
            Editor.log(a);
        },
        reload: function () {
            Editor.Package.reload(Editor.Package.packagePath('build-tasks'));
        },
    },
};
module.exports = app;
