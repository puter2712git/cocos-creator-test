"use strict";
var fs = require("fs");
var BuildTask = require("../../../models/build-task");
var ConfigPageName = require("../config-page-name/comp");
var ConfigPageSceneList = require("../config-page-scene-list/comp");
var ConfigPage = window['Vue'].extend({
    template: fs.readFileSync(Editor.url('packages://build-tasks/src/components/config/config-page/comp.html'), 'utf8'),
    components: {
        ConfigPageName: ConfigPageName,
        ConfigPageSceneList: ConfigPageSceneList,
    },
    props: {
        buildTask: {
            type: BuildTask,
            required: true,
        },
    },
    methods: {
        onExitButtonClick: function (event) {
            this.$dispatch('config-page-exit');
        },
    },
});
module.exports = ConfigPage;
