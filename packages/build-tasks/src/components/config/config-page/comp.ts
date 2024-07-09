import fs = require('fs');
import BuildTask = require('../../../models/build-task');
import ConfigPageName = require('../config-page-name/comp');
import ConfigPageSceneList = require('../config-page-scene-list/comp');

const ConfigPage = window['Vue'].extend({
  template: fs.readFileSync(Editor.url('packages://build-tasks/src/components/config/config-page/comp.html'), 'utf8'),

  components: {
    ConfigPageName,
    ConfigPageSceneList,
  },

  props: {
    buildTask: {
      type: BuildTask,
      required: true,
    },
  },

  methods: {
    onExitButtonClick(event) {
      this.$dispatch('config-page-exit');
    },
  },
});

export = ConfigPage;
