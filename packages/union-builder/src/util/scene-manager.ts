import IScene = require('../interface/scene');

class SceneManager {
  private static _instance: SceneManager = null;
  public static get instance() {
    this._instance ??= new SceneManager();
    return this._instance;
  }

  public async GetScenes(): Promise<IScene[]> {
    let ret: IScene[] = [];

    return new Promise<IScene[]>((resolve, reject) => {
      Editor.assetdb.queryAssets(
        'db://assets/**/*',
        'scene',
        function (err, results) {
          if (err) {
            Editor.warn(err);
            reject();
          }

          results.forEach((result) => {
            let scene: IScene = {
              path: result.url,
              name: result.url,
              uuid: result.uuid,
            };
            ret.push(scene);
          });

          resolve(ret);
        },
      );
    });
  }
}

export = SceneManager;
