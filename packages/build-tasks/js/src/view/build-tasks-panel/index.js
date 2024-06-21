"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var BuildTask = require('../../model/build-task');
Editor.Panel.extend({
    style: fs.readFileSync(Editor.url('packages://build-tasks/src/view/build-tasks-panel/index.css')),
    template: fs.readFileSync(Editor.url('packages://build-tasks/src/view/build-tasks-panel/index.html')),
    ready: function () {
        new window['Vue']({
            el: this.shadowRoot,
            data: {
                isConfig: false,
                buildTasks: [new BuildTask()],
                currBuildTaskIndex: 0,
            },
            watch: {
                buildTasks: function (newBuildTasks) {
                    this.buildTasks = newBuildTasks;
                    for (var i = 0; i < this.buildTasks.length; i++) {
                        this.buildTasks[i].index = i;
                        this.buildTasks[i].name = "Build Task ".concat(i);
                    }
                },
            },
            methods: {
                onNewBuildTaskButtonClick: function (event) {
                    event.stopPropagation();
                    this.buildTasks.push(new BuildTask());
                },
                onBuildTaskDeleteButtonClick: function (index, event) {
                    event.stopPropagation();
                    delete this.buildTasks[index];
                    this.buildTasks = this.buildTasks.filter(Boolean);
                },
                onBuildTaskConfigButtonClick: function (index, event) {
                    event.stopPropagation();
                    this.currBuildTaskIndex = index;
                    this.isConfig = true;
                },
                onConfigExitButtonClick: function (event) {
                    event.stopPropagation();
                    this.isConfig = false;
                },
            },
        });
    },
    messages: {},
});
