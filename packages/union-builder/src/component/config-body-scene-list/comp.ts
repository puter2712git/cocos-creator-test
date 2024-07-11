import fs = require('fs');
import IBuildTask = require('../../interface/build-task');

const ConfigBodySceneList = window['Vue'].extend({
  template: fs.readFileSync(
    Editor.url(
      'packages://union-builder/src/component/config-body-scene-list/comp.html',
    ),
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

  data() {
    return {
      isSelectAll: this.buildTask.scenes.every((scene) => scene.isIncluded),
    };
  },

  watch: {
    buildTask: {
      deep: true,
      handler() {
        this.isSelectAll = this.buildTask.scenes.every(
          (scene) => scene.isIncluded,
        );
      },
    },
  },

  methods: {
    onSelectAllChange(event, a) {
      if (this.isSelectAll) {
        this.buildTask.scenes.forEach((scene) => {
          scene.isIncluded = true;
        });
      } else {
        this.buildTask.scenes.forEach((scene) => {
          if (!scene.isStart) {
            scene.isIncluded = false;
          }
        });
      }
    },
  },
});

export = ConfigBodySceneList;
