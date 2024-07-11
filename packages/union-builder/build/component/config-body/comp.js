"use strict";
var fs = require("fs");
var ConfigBodySceneList = require("../config-body-scene-list/comp");
var ConfigBody = window['Vue'].extend({
    template: fs.readFileSync(Editor.url('packages://union-builder/src/component/config-body/comp.html'), 'utf8'),
    components: {
        ConfigBodySceneList: ConfigBodySceneList,
    },
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
    computed: {
        startScene: function () {
            return this.buildTask.scenes.find(function (scene) { return scene.isStart; });
        },
        includedScenes: function () {
            return this.buildTask.scenes.filter(function (scene) { return scene.isIncluded; });
        },
    },
    methods: {
        startSceneChange: function (event) {
            var currUuid = event.target.value;
            this.buildTask.scenes.forEach(function (scene) {
                scene.isStart = scene.uuid === currUuid;
            });
        },
    },
});
module.exports = ConfigBody;
