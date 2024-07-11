import ProfileManager = require('./common/profile-manager');
import { TestType } from './types/test';

function load() {
  ProfileManager.instance.StartUp();
}

let a: TestType = 'test';

function unload() {}

const app = {
  load,
  unload,

  // register your ipc messages here
  messages: {
    'open-build-tasks-panel'() {
      // open entry panel registered in package.json
      Editor.Panel.open('build-tasks');
      Editor.log(a);
    },
    reload() {
      Editor.Package.reload(Editor.Package.packagePath('build-tasks'));
    },
  },
};

module.exports = app;
