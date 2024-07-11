import fs = require('fs');
import ProfileManager = require('../../util/profile-manager');

const BuildToolbar = window['Vue'].extend({
  template: fs.readFileSync(
    Editor.url(
      'packages://union-builder/src/component/build-toolbar/comp.html',
    ),
    'utf8',
  ),

  computed: {
    cocosPath() {
      return ProfileManager.instance.getProfile().cocosPath;
    },
  },

  methods: {
    createBuildTaskEmit() {
      this.$emit('create');
    },

    setCocosCreatorPath() {
      let input = document.createElement('input');
      input.type = 'file';
      input.accept = '.exe';

      input.click();
      input.onchange = function (event) {
        // @ts-expect-error
        ProfileManager.instance.setCocosCreatorPath(event.target.files[0].path);
      };
    },
  },
});

export = BuildToolbar;
