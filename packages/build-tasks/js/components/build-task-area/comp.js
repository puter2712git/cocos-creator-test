"use strict";
var fs = require("fs");
var BuildTaskComponent = require("../build-task-component/comp");
var BuildTaskArea = window['Vue'].extend({
    template: fs.readFileSync(Editor.url('packages://build-tasks/src/components/build-task-area/comp.html'), 'utf8'),
    components: {
        BuildTaskComponent: BuildTaskComponent,
    },
    props: {
        buildTasks: {
            type: Array,
            required: true,
        },
    },
});
module.exports = BuildTaskArea;
