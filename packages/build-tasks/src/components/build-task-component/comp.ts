import fs = require('fs');
import BuildTask = require('../../models/build-task');

const BuildTaskComponent = window['Vue'].extend({
  template: fs.readFileSync(Editor.url('packages://build-tasks/src/components/build-task-component/comp.html'), 'utf8'),

  props: {
    index: {
      type: Number,
      required: true,
    },
    buildTask: {
      type: BuildTask,
      required: true,
      twoWay: true,
    },
  },

  methods: {
    onDeleteButtonClick(event) {
      this.$dispatch('build-task-delete', this.index);
    },
    onConfigButtonClick(event) {
      this.$dispatch('build-task-config', this.index);
    },
  },
});

export = BuildTaskComponent;
