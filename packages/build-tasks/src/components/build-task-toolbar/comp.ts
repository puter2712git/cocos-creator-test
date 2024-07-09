import fs = require('fs');

const BuildTaskToolbar = window['Vue'].extend({
  template: fs.readFileSync(Editor.url('packages://build-tasks/src/components/build-task-toolbar/comp.html'), 'utf8'),

  methods: {
    onNewBuildTaskButtonClick(event) {
      this.$dispatch('build-task-create');
    },
  },
});

export = BuildTaskToolbar;
