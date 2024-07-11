import ProfileManager = require('./util/profile-manager');

function load() {
  ProfileManager.instance.initialize();
}

function unload() {}

const app = {
  load,
  unload,

  messages: {
    open() {
      Editor.Panel.open('union-builder');
    },
    reload() {
      Editor.Package.reload(Editor.Package.packagePath('union-builder'));
    },
  },
};

export = app;
