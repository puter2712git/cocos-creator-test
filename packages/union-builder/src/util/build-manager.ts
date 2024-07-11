import child_process = require('child_process');
import IBuildTask = require('../interface/build-task');
import ProfileManager = require('./profile-manager');

class BuildManager {
  public static build(buildTask: IBuildTask) {
    const startSceneUuid = buildTask.scenes.find((scene) => scene.isStart).uuid;

    child_process.exec(`${ProfileManager.instance.getProfile().cocosPath} --path ${Editor.Project.path} --build 
    \"title=${buildTask.title};platform=${buildTask.platform};buildPath=${buildTask.buildPath.basePath}/${buildTask.buildPath.folderPath};
    startScene=${buildTask.\"`)
  }
}
