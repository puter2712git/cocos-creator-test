"use strict";
var fs = require("fs");
var BuildTaskToolbar = window['Vue'].extend({
    template: fs.readFileSync(Editor.url('packages://build-tasks/src/components/build-task-toolbar/comp.html'), 'utf8'),
    methods: {
        onNewBuildTaskButtonClick: function (event) {
            this.$dispatch('build-task-create');
        },
    },
});
module.exports = BuildTaskToolbar;
