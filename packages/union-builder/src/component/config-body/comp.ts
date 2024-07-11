import fs = require('fs');
import IBuildTask = require('../../interface/build-task');
import ConfigBodySceneList = require('../config-body-scene-list/comp');

const ConfigBody = window['Vue'].extend({
  template: fs.readFileSync(
    Editor.url('packages://union-builder/src/component/config-body/comp.html'),
    'utf8',
  ),

  components: {
    ConfigBodySceneList,
  },

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

  computed: {
    startScene() {
      return this.buildTask.scenes.find((scene) => scene.isStart);
    },

    includedScenes() {
      return this.buildTask.scenes.filter((scene) => scene.isIncluded);
    },
  },

  methods: {
    startSceneChange(event) {
      const currUuid = event.target.value;

      this.buildTask.scenes.forEach((scene) => {
        scene.isStart = scene.uuid === currUuid;
      });
    },
  },
});

export = ConfigBody;
