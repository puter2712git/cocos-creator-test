import fs = require('fs');
import BuildTask = require('../component/build-task/comp');
import mockBuildTask = require('../mock/build-task');
import BuildToolbar = require('../component/build-toolbar/comp');
import ConfigPage = require('../component/config-page/comp');
import createMockBuildTask = require('../mock/build-task');
import IBuildTask = require('../interface/build-task');
import ProfileManager = require('../util/profile-manager');

Editor.Panel.extend({
  style: fs.readFileSync(
    Editor.url('packages://union-builder/src/panel/index.css'),
    'utf8',
  ),
  template: fs.readFileSync(
    Editor.url('packages://union-builder/src/panel/index.html'),
    'utf8',
  ),

  ready() {
    new window['Vue']({
      el: this.shadowRoot,

      components: {
        BuildToolbar,
        BuildTask,

        ConfigPage,
      },

      data() {
        return {
          buildTasks: ProfileManager.instance.getProfile().buildTasks,

          isConfig: false,
          currBuildTaskIndex: 0,
        };
      },

      computed: {
        currBuildTask() {
          return this.buildTasks[this.currBuildTaskIndex];
        },
      },

      watch: {
        buildTasks: {
          deep: true,
          handler() {
            ProfileManager.instance.update({ buildTasks: this.buildTasks });
          },
        },
      },

      methods: {
        async createBuildTask() {
          this.buildTasks.push(await createMockBuildTask());
        },

        removeBuildTask(index: number) {
          this.buildTasks.splice(index, 1);
        },

        setConfigPage(index: number) {
          this.currBuildTaskIndex = index;
          this.isConfig = true;
        },
      },

      events: {
        'exit-config'() {
          this.isConfig = false;
        },

        'update-build-task'(index: number, buildTask: IBuildTask) {
          this.buildTasks[index] = buildTask;
        },
      },
    });
  },
});
