import fs = require('fs');

const ConfigPageSceneList = window['Vue'].extend({
  template: fs.readFileSync(
    Editor.url('packages://build-tasks/src/components/config/config-page-scene-list/comp.html'),
    'utf8',
  ),
});

export = ConfigPageSceneList;
