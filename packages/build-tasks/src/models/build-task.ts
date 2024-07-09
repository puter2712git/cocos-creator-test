import BuildPlatform = require('../types/build-platform');
import MainBundleCompressionType = require('../types/main-bundle-compression-type');
import WebOrientation = require('../types/web-orientation');
import BuildPath = require('./build-path');
import SceneInfo = require('./scene-info');

class BuildTask {
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(newName: string) {
    this._name = newName;
  }

  private _title: string;
  public get title() {
    return this._title;
  }
  public set title(newTitle: string) {
    this._title = newTitle;
  }

  private _platform: BuildPlatform;
  public get platform() {
    return this._platform;
  }
  public set platform(newPlatform: BuildPlatform) {
    this._platform = newPlatform;
  }

  private _buildPath: BuildPath;
  public get buildPath() {
    return this._buildPath;
  }
  public set buildPath(newBuildPath: BuildPath) {
    this._buildPath = newBuildPath;
  }

  private _startScene: SceneInfo;
  public get startScene() {
    return this._startScene;
  }
  public set startScene(newStartScene: SceneInfo) {
    this._startScene = newStartScene;
  }

  private _excludeScenes: SceneInfo[];
  public get excludeScenes() {
    return this._excludeScenes;
  }
  public set excludeScenes(newExcludeScenes: SceneInfo[]) {
    this._excludeScenes = newExcludeScenes;
  }

  private _mainBundleCompressionType: MainBundleCompressionType;
  public get mainBundleCompressionType() {
    return this._mainBundleCompressionType;
  }
  public set mainBundleCompressionType(newMainBundleCompressionType: MainBundleCompressionType) {
    this._mainBundleCompressionType = newMainBundleCompressionType;
  }

  private _isInlineSpriteFrames: boolean;
  public get isInlineSpriteFrames() {
    return this._isInlineSpriteFrames;
  }
  public set isInlineSpriteFrames(newIsInlineSpriteFrames: boolean) {
    this._isInlineSpriteFrames = newIsInlineSpriteFrames;
  }

  private _webOrientation: WebOrientation;
  public get webOrientation() {
    return this._webOrientation;
  }
  public set webOrientation(newWebOrientation: WebOrientation) {
    this._webOrientation = newWebOrientation;
  }

  private _isVConsole: boolean;
  public get isVConsole() {
    return this._isVConsole;
  }
  public set isVConsole(newIsVConsole: boolean) {
    this._isVConsole = newIsVConsole;
  }

  private _isMD5Cache: boolean;
  public get isMD5Cache() {
    return this._isMD5Cache;
  }
  public set isMD5Cache(newIsMD5Cache: boolean) {
    this._isMD5Cache = newIsMD5Cache;
  }

  private _isDebug: boolean;
  public get isDebug() {
    return this._isDebug;
  }
  public set isDebug(newIsDebug: boolean) {
    this._isDebug = newIsDebug;
  }

  private _isSourceMaps: boolean;
  public get isSourceMaps() {
    return this._isSourceMaps;
  }
  public set isSourceMaps(newIsSourceMaps: boolean) {
    this._isSourceMaps = newIsSourceMaps;
  }

  constructor() {
    this.name = 'web-mobile';
    this.title = 'Default Title';
    this.platform = BuildPlatform.WEB_MOBILE;
    this.buildPath = new BuildPath();
    this.startScene = null;
    this.excludeScenes = [];
    this.mainBundleCompressionType = 'default';
    this.isInlineSpriteFrames = false;
    this.webOrientation = 'auto';
    this.isVConsole = false;
    this.isMD5Cache = false;
    this.isDebug = false;
    this.isSourceMaps = false;
  }

  public toJSON() {
    return {
      name: this.name,
      title: this.title,
      platform: this.platform,
      buildPath: this.buildPath.toJSON(),
      startScene: this.startScene,
      excludeScenes: this.excludeScenes,
      mainBundleCompressionType: this.mainBundleCompressionType,
      isInlineSpriteFrames: this.isInlineSpriteFrames,
      webOrientation: this.webOrientation,
      isVConsole: this.isVConsole,
      isMD5Cache: this.isMD5Cache,
      isDebug: this.isDebug,
      isSourceMaps: this.isSourceMaps,
    };
  }

  public static fromJSON(json: string): BuildTask {
    let ret: BuildTask = new BuildTask();
    const data = JSON.parse(json);

    for (let prop in data) {
      if (prop === 'buildPath') {
        ret[prop] = BuildPath.fromJSON(JSON.stringify(data[prop]));
      } else {
        ret[prop] = data[prop];
      }
    }

    return ret;
  }
}

export = BuildTask;
