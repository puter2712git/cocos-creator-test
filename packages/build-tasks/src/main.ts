import ProfileManager = require('./common/profile-manager');

function load() {
  ProfileManager.instance.StartUp();
}

function unload() {}

const app = {
  load,
  unload,

  // register your ipc messages here
  messages: {
    'open-build-tasks-panel'() {
      // open entry panel registered in package.json
      Editor.Panel.open('build-tasks');
    },
    reload() {
      Editor.Package.reload(Editor.Package.packagePath('build-tasks'));
    },
  },
};

module.exports = app;
