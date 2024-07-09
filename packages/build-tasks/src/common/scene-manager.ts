import SceneInfo = require('../models/scene-info');

class SceneManager {
  private static _instance: SceneManager = null;
  public static get instance() {
    this._instance ??= new SceneManager();
    return this._instance;
  }

  private _scenes: SceneInfo[] = [];

  public GetScenes() {
    this._scenes = [];
    Editor.assetdb.queryAssets('db://assets/**/*', 'scene', function (err, results) {
      results.forEach((result) => {
        let sceneInfo = new SceneInfo();
        sceneInfo.path = result.url;
        sceneInfo.name = result.url;
        sceneInfo.uuid = result.uuid;
        this._scenes.push(sceneInfo);
      });
    });

    return this._scenes;
  }
}

export = SceneManager;
