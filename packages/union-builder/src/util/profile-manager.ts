import IProfile = require('../interface/profile');
import fs = require('fs');

const PROFILE_PATH = Editor.url('profile://project/union-builder/profile.json');
const DEFAULT_DATA: IProfile = {
  buildTasks: [],
  cocosPath: null,
};

class ProfileManager {
  private static _instance: ProfileManager = null;
  public static get instance() {
    this._instance ??= new ProfileManager();
    return this._instance;
  }

  public initialize() {
    if (!fs.existsSync(PROFILE_PATH)) {
      fs.writeFileSync(PROFILE_PATH, JSON.stringify(DEFAULT_DATA));
    }
  }

  public update(profile: Omit<IProfile, 'cocosPath'>) {
    fs.writeFileSync(PROFILE_PATH, JSON.stringify(profile));
  }

  public getProfile(): IProfile {
    let ret: IProfile = JSON.parse(fs.readFileSync(PROFILE_PATH, 'utf-8'));
    return ret;
  }

  public setCocosCreatorPath(path: string) {
    let profile: IProfile = JSON.parse(fs.readFileSync(PROFILE_PATH, 'utf-8'));
    profile.cocosPath = path;
    fs.writeFileSync(PROFILE_PATH, JSON.stringify(profile));
  }
}

export = ProfileManager;
