import fs = require('fs');
import BuildTaskComponent = require('../build-task-component/comp');

const BuildTaskArea = window['Vue'].extend({
  template: fs.readFileSync(Editor.url('packages://build-tasks/src/components/build-task-area/comp.html'), 'utf8'),

  components: {
    BuildTaskComponent,
  },

  props: {
    buildTasks: {
      type: Array,
      required: true,
    },
  },
});

export = BuildTaskArea;
