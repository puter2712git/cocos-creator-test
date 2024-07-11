import BuildPlatform = require('../type/build-task/build-platform');
import MainBundleCompressionType = require('../type/build-task/main-bundle-compression-type');
import WebOrientation = require('../type/build-task/web-orientation');
import IBuildPath = require('./build-path');
import IBuildTaskScene = require('./build-task-scene');

interface IBuildTask {
  name: string;
  title: string;
  platform: BuildPlatform;
  buildPath: IBuildPath;
  scenes: IBuildTaskScene[];
  mainBundleCompressionType: MainBundleCompressionType;
  isInlineSpriteFrames: boolean;
  webOrientation: WebOrientation;
  isVConsole: boolean;
  isMD5Cache: boolean;
  isDebug: boolean;
  isSourceMaps: boolean;
}

export = IBuildTask;
