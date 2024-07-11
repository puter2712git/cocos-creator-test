import IBuildTask = require('./build-task');

interface IProfile {
  buildTasks: IBuildTask[];
  cocosPath: string;
}

export = IProfile;
