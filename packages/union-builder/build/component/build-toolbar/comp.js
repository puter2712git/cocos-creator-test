"use strict";
var fs = require("fs");
var ProfileManager = require("../../util/profile-manager");
var BuildToolbar = window['Vue'].extend({
    template: fs.readFileSync(Editor.url('packages://union-builder/src/component/build-toolbar/comp.html'), 'utf8'),
    computed: {
        cocosPath: function () {
            return ProfileManager.instance.getProfile().cocosPath;
        },
    },
    methods: {
        createBuildTaskEmit: function () {
            this.$emit('create');
        },
        setCocosCreatorPath: function () {
            var input = document.createElement('input');
            input.type = 'file';
            input.accept = '.exe';
            input.click();
            input.onchange = function (event) {
                ProfileManager.instance.setCocosCreatorPath(event.target.files[0].path);
            };
        },
    },
});
module.exports = BuildToolbar;
