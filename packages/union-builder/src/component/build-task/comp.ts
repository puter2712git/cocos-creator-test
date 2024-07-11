import fs = require('fs');
import child_process = require('child_process');
import IBuildTask = require('../../interface/build-task');

const BuildTask = window['Vue'].extend({
  template: fs.readFileSync(
    Editor.url('packages://union-builder/src/component/build-task/comp.html'),
    'utf8',
  ),

  props: {
    buildTask: {
      type: Object as () => IBuildTask,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },

  methods: {
    removeBuildTaskEmit() {
      this.$emit('remove', this.index);
    },

    openBuildPathDirectory() {
      child_process.exec(
        'start "" ' +
          '"' +
          this.buildTask.buildPath.basePath +
          '/' +
          this.buildTask.buildPath.folderPath +
          '"',
      );
    },

    setConfigPageEmit() {
      this.$emit('config', this.index);
    },
  },
});

export = BuildTask;
