class BuildManager {
  private static _instance: BuildManager = null;
  public static get instance() {
    this._instance ??= new BuildManager();
    return this._instance;
  }
}

export = BuildManager;
