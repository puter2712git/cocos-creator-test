"use strict";
var fs = require("fs");
var BuildTask = require("../../../models/build-task");
var ConfigPageName = window['Vue'].extend({
    template: fs.readFileSync(Editor.url('packages://build-tasks/src/components/config/config-page-name/comp.html'), 'utf8'),
    props: {
        buildTask: {
            type: BuildTask,
            required: true,
        },
    },
    data: function () {
        return {
            isModifying: false,
        };
    },
    methods: {
        onModifyButtonClick: function (event) {
            event.stopPropagation();
            this.isModifying = true;
        },
        onBuildTaskNameInputBlur: function (event) {
            event.stopPropagation();
            this.isModifying = false;
        },
    },
});
module.exports = ConfigPageName;
