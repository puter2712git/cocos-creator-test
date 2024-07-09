"use strict";
var fs = require("fs");
var ConfigPageSceneList = window['Vue'].extend({
    template: fs.readFileSync(Editor.url('packages://build-tasks/src/components/config/config-page-scene-list/comp.html'), 'utf8'),
});
module.exports = ConfigPageSceneList;
