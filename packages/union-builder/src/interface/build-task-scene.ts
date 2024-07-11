import IScene = require('./scene');

interface IBuildTaskScene extends IScene {
  isStart: boolean;
  isIncluded: boolean;
}

export = IBuildTaskScene;
