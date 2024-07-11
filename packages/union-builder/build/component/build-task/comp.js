"use strict";
var fs = require("fs");
var child_process = require("child_process");
var BuildTask = window['Vue'].extend({
    template: fs.readFileSync(Editor.url('packages://union-builder/src/component/build-task/comp.html'), 'utf8'),
    props: {
        buildTask: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
    },
    methods: {
        removeBuildTaskEmit: function () {
            this.$emit('remove', this.index);
        },
        openBuildPathDirectory: function () {
            child_process.exec('start "" ' +
                '"' +
                this.buildTask.buildPath.basePath +
                '/' +
                this.buildTask.buildPath.folderPath +
                '"');
        },
        setConfigPageEmit: function () {
            this.$emit('config', this.index);
        },
    },
});
module.exports = BuildTask;
