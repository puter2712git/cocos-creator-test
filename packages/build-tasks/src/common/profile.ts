import BuildTask = require('../models/build-task');

interface Profile {
  buildTasks: BuildTask[];
}

export = Profile;
