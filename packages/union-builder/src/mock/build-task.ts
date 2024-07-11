import IBuildTask = require('../interface/build-task');
import IBuildTaskScene = require('../interface/build-task-scene');
import IScene = require('../interface/scene');
import SceneManager = require('../util/scene-manager');
import mockBuildPath = require('./build-path');

async function createMockBuildTask() {
  const scenes: IScene[] = await SceneManager.instance.GetScenes();
  const buildTaskScenes: IBuildTaskScene[] = scenes.map((scene) => {
    let ret: IBuildTaskScene = { ...scene, isStart: false, isIncluded: false };
    return ret;
  });

  buildTaskScenes[0].isIncluded = true;
  buildTaskScenes[0].isStart = true;

  const mockBuildTask: IBuildTask = {
    name: 'web-mobile',
    title: 'default title',
    platform: 'web-mobile',
    buildPath: mockBuildPath,
    scenes: buildTaskScenes,
    mainBundleCompressionType: 'default',
    isInlineSpriteFrames: false,
    webOrientation: 'auto',
    isVConsole: false,
    isMD5Cache: false,
    isDebug: false,
    isSourceMaps: false,
  };

  return mockBuildTask;
}

export = createMockBuildTask;
