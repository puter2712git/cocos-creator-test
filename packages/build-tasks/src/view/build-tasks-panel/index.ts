const fs = require('fs');
const BuildTask = require('../../model/build-task');

Editor.Panel.extend({
    style: fs.readFileSync(Editor.url('packages://build-tasks/src/view/build-tasks-panel/index.css')),
    template: fs.readFileSync(Editor.url('packages://build-tasks/src/view/build-tasks-panel/index.html')),

    ready() {
        new window['Vue']({
            el: this.shadowRoot,

            data: {
                isConfig: false,
                buildTasks: [new BuildTask()],
                currBuildTaskIndex: 0,
            },

            watch: {
                buildTasks(newBuildTasks) {
                    this.buildTasks = newBuildTasks;
                    for (let i = 0; i < this.buildTasks.length; i++) {
                        this.buildTasks[i].index = i;
                        this.buildTasks[i].name = `Build Task ${i}`;
                    }
                },
            },

            methods: {
                onNewBuildTaskButtonClick(event) {
                    event.stopPropagation();
                    this.buildTasks.push(new BuildTask());
                },

                onBuildTaskDeleteButtonClick(index, event) {
                    event.stopPropagation();
                    delete this.buildTasks[index];
                    this.buildTasks = this.buildTasks.filter(Boolean);
                },

                onBuildTaskConfigButtonClick(index, event) {
                    event.stopPropagation();
                    this.currBuildTaskIndex = index;
                    this.isConfig = true;
                },

                onConfigExitButtonClick(event) {
                    event.stopPropagation();
                    this.isConfig = false;
                },
            },
        });
    },

    messages: {},
});
