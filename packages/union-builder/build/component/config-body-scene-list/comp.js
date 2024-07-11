"use strict";
var fs = require("fs");
var ConfigBodySceneList = window['Vue'].extend({
    template: fs.readFileSync(Editor.url('packages://union-builder/src/component/config-body-scene-list/comp.html'), 'utf8'),
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
    data: function () {
        return {
            isSelectAll: this.buildTask.scenes.every(function (scene) { return scene.isIncluded; }),
        };
    },
    watch: {
        buildTask: {
            deep: true,
            handler: function () {
                this.isSelectAll = this.buildTask.scenes.every(function (scene) { return scene.isIncluded; });
            },
        },
    },
    methods: {
        onSelectAllChange: function (event, a) {
            if (this.isSelectAll) {
                this.buildTask.scenes.forEach(function (scene) {
                    scene.isIncluded = true;
                });
            }
            else {
                this.buildTask.scenes.forEach(function (scene) {
                    if (!scene.isStart) {
                        scene.isIncluded = false;
                    }
                });
            }
        },
    },
});
module.exports = ConfigBodySceneList;
