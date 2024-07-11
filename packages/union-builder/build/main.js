"use strict";
var ProfileManager = require("./util/profile-manager");
function load() {
    ProfileManager.instance.initialize();
}
function unload() { }
var app = {
    load: load,
    unload: unload,
    messages: {
        open: function () {
            Editor.Panel.open('union-builder');
        },
        reload: function () {
            Editor.Package.reload(Editor.Package.packagePath('union-builder'));
        },
    },
};
module.exports = app;
