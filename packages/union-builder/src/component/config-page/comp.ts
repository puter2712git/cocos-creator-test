import fs = require('fs');
import ConfigHeader = require('../config-header/comp');
import IBuildTask = require('../../interface/build-task');
import ConfigBody = require('../config-body/comp');

const ConfigPage = window['Vue'].extend({
  template: fs.readFileSync(
    Editor.url('packages://union-builder/src/component/config-page/comp.html'),
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

  components: {
    ConfigHeader,
    ConfigBody,
  },
});

export = ConfigPage;
