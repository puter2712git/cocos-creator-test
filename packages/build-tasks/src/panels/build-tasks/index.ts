import fs = require('fs');
import BuildTask = require('../../models/build-task');
import BuildTaskToolbar = require('../../components/build-task-toolbar/comp');
import BuildTaskArea = require('../../components/build-task-area/comp');
import ConfigPage = require('../../components/config/config-page/comp');
import ProfileManager = require('../../common/profile-manager');

let vueData: {
  isConfig: boolean;
  buildTasks: BuildTask[];
  currIndex: number;
} = {
  isConfig: false,
  buildTasks: ProfileManager.instance.GetBuildTasks(),
  currIndex: -1,
};

Editor.Panel.extend({
  style: fs.readFileSync(Editor.url('packages://build-tasks/src/panels/build-tasks/index.css'), 'utf8'),
  template: fs.readFileSync(Editor.url('packages://build-tasks/src/panels/build-tasks/index.html'), 'utf8'),

  ready() {
    new window['Vue']({
      el: this.shadowRoot,

      components: {
        BuildTaskToolbar,
        BuildTaskArea,
        ConfigPage,
      },

      data: vueData,

      watch: {
        buildTasks: {
          deep: true,
          handler(buildTasks: BuildTask[], oldBuildTasks: BuildTask[]) {
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
        createBuildTask() {
          let newBuildTask: BuildTask = new BuildTask();
          this.buildTasks.push(newBuildTask);
        },

        closeConfigPage() {
          this.isConfig = false;
        },
      },

      events: {
        'build-task-delete'(index: number) {
          this.buildTasks.splice(index, 1);
        },

        'build-task-config'(index: number) {
          this.currIndex = index;
          this.isConfig = true;
        },
      },
    });
  },

  messages: {},
});
