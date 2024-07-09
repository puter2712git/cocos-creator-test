import BuildTask = require('../models/build-task');
import fs = require('fs');
import Profile = require('./profile');

const PROFILE_PATH = Editor.url('profile://project/build-tasks/profile.json');
const DEFAULT_DATA: Profile = {
  buildTasks: [],
};

class ProfileManager {
  private static _instance: ProfileManager = null;
  public static get instance() {
    this._instance ??= new ProfileManager();
    return this._instance;
  }

  public StartUp() {
    if (!fs.existsSync(PROFILE_PATH)) {
      fs.writeFileSync(PROFILE_PATH, JSON.stringify(DEFAULT_DATA));
    }
  }

  public Update(buildTasks: BuildTask[]) {
    let data: Profile = JSON.parse(fs.readFileSync(PROFILE_PATH, 'utf-8'));
    data.buildTasks = buildTasks;

    fs.writeFileSync(PROFILE_PATH, JSON.stringify(data));
  }

  public GetBuildTasks(): BuildTask[] {
    let ret: BuildTask[] = [];
    let data: Profile = JSON.parse(fs.readFileSync(PROFILE_PATH, 'utf-8'));

    for (let i = 0; i < data.buildTasks.length; i++) {
      ret.push(BuildTask.fromJSON(JSON.stringify(data.buildTasks[i])));
    }

    return ret;
  }
}

export = ProfileManager;
