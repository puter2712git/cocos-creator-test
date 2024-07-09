class SceneInfo {
  private _path: string;
  public get path() {
    return this._path;
  }
  public set path(newPath: string) {
    this._path = newPath;
  }

  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(newName: string) {
    this._name = newName;
  }

  private _uuid: string;
  public get uuid() {
    return this._uuid;
  }
  public set uuid(newUuid: string) {
    this._uuid = newUuid;
  }

  constructor() {}

  public toJSON() {
    return {
      path: this.path,
      name: this.name,
      uuid: this.uuid,
    };
  }

  public static fromJSON(json: string): SceneInfo {
    let ret: SceneInfo = new SceneInfo();
    const data = JSON.parse(json);

    for (let prop in data) {
      ret[prop] = data[prop];
    }

    return ret;
  }
}

export = SceneInfo;
