import fs = require('fs');
import IBuildTask = require('../../interface/build-task');

const ConfigHeaderName = window['Vue'].extend({
  template: fs.readFileSync(
    Editor.url(
      'packages://union-builder/src/component/config-header-name/comp.html',
    ),
    'utf8',
  ),

  props: {
    buildTask: {
      type: Object as () => IBuildTask,
      required: true,
    },
  },

  data() {
    return {
      isModifying: false,
    };
  },

  methods: {
    modify() {
      this.isModifying = true;
    },

    onBlur() {
      this.isModifying = false;
    },
  },
});

export = ConfigHeaderName;
