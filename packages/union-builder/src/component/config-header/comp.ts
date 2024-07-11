import fs = require('fs');
import ConfigHeaderName = require('../config-header-name/comp');
import IBuildTask = require('../../interface/build-task');

const ConfigHeader = window['Vue'].extend({
  template: fs.readFileSync(
    Editor.url(
      'packages://union-builder/src/component/config-header/comp.html',
    ),
    'utf8',
  ),

  props: {
    buildTask: {
      type: Object as () => IBuildTask,
      required: true,
    },
  },

  components: {
    ConfigHeaderName,
  },

  methods: {
    exitConfigEmit() {
      this.$dispatch('exit-config');
    },
  },
});

export = ConfigHeader;
