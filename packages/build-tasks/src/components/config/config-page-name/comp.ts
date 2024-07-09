import fs = require('fs');
import BuildTask = require('../../../models/build-task');

const ConfigPageName = window['Vue'].extend({
  template: fs.readFileSync(
    Editor.url('packages://build-tasks/src/components/config/config-page-name/comp.html'),
    'utf8',
  ),

  props: {
    buildTask: {
      type: BuildTask,
      required: true,
    },
  },

  data() {
    return {
      isModifying: false,
    };
  },

  methods: {
    onModifyButtonClick(event) {
      event.stopPropagation();
      this.isModifying = true;
    },

    onBuildTaskNameInputBlur(event) {
      event.stopPropagation();
      this.isModifying = false;
    },
  },
});

export = ConfigPageName;
