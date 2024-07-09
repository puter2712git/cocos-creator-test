class BuildPath {
  private _basePath: string = '';
  public get basePath() {
    return this._basePath;
  }
  public set basePath(newBasePath: string) {
    this._basePath = newBasePath;
  }

  private _folderPath: string = '';
  public get folderPath() {
    return this._folderPath;
  }
  public set folderPath(newFolderPath: string) {
    this._folderPath = newFolderPath;
  }

  constructor() {
    this.basePath = Editor.Project.path + '/build';
    this.folderPath = 'web-mobile';
  }

  public toJSON() {
    return {
      basePath: this.basePath,
      folderPath: this.folderPath,
    };
  }

  public static fromJSON(json: string): BuildPath {
    let ret: BuildPath = new BuildPath();
    const data = JSON.parse(json);

    for (let prop in data) {
      ret[prop] = data[prop];
    }

    return ret;
  }

  public GetBuildPath() {
    return this.basePath + '/' + this.folderPath;
  }
}

export = BuildPath;
