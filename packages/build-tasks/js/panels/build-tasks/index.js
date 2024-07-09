"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var BuildTask = require("../../models/build-task");
var BuildTaskToolbar = require("../../components/build-task-toolbar/comp");
var BuildTaskArea = require("../../components/build-task-area/comp");
var ConfigPage = require("../../components/config/config-page/comp");
var ProfileManager = require("../../common/profile-manager");
var vueData = {
    isConfig: false,
    buildTasks: ProfileManager.instance.GetBuildTasks(),
    currIndex: -1,
};
Editor.Panel.extend({
    style: fs.readFileSync(Editor.url('packages://build-tasks/src/panels/build-tasks/index.css'), 'utf8'),
    template: fs.readFileSync(Editor.url('packages://build-tasks/src/panels/build-tasks/index.html'), 'utf8'),
    ready: function () {
        new window['Vue']({
            el: this.shadowRoot,
            components: {
                BuildTaskToolbar: BuildTaskToolbar,
                BuildTaskArea: BuildTaskArea,
                ConfigPage: ConfigPage,
            },
            data: vueData,
            watch: {
                buildTasks: {
                    deep: true,
                    handler: function (buildTasks, oldBuildTasks) {
                        ProfileManager.instance.Update(this.buildTasks);
                    },
                },
            },
            computed: {
                currTask: function () {
                    return this.buildTasks[this.currIndex];
                },
            },
            methods: {
                createBuildTask: function () {
                    var newBuildTask = new BuildTask();
                    this.buildTasks.push(newBuildTask);
                },
                closeConfigPage: function () {
                    this.isConfig = false;
                },
            },
            events: {
                'build-task-delete': function (index) {
                    this.buildTasks.splice(index, 1);
                },
                'build-task-config': function (index) {
                    this.currIndex = index;
                    this.isConfig = true;
                },
            },
        });
    },
    messages: {},
});
