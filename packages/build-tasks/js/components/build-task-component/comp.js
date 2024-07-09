"use strict";
var fs = require("fs");
var BuildTask = require("../../models/build-task");
var BuildTaskComponent = window['Vue'].extend({
    template: fs.readFileSync(Editor.url('packages://build-tasks/src/components/build-task-component/comp.html'), 'utf8'),
    props: {
        index: {
            type: Number,
            required: true,
        },
        buildTask: {
            type: BuildTask,
            required: true,
            twoWay: true,
        },
    },
    methods: {
        onDeleteButtonClick: function (event) {
            this.$dispatch('build-task-delete', this.index);
        },
        onConfigButtonClick: function (event) {
            this.$dispatch('build-task-config', this.index);
        },
    },
});
module.exports = BuildTaskComponent;
