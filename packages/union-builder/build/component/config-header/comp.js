"use strict";
var fs = require("fs");
var ConfigHeaderName = require("../config-header-name/comp");
var ConfigHeader = window['Vue'].extend({
    template: fs.readFileSync(Editor.url('packages://union-builder/src/component/config-header/comp.html'), 'utf8'),
    props: {
        buildTask: {
            type: Object,
            required: true,
        },
    },
    components: {
        ConfigHeaderName: ConfigHeaderName,
    },
    methods: {
        exitConfigEmit: function () {
            this.$dispatch('exit-config');
        },
    },
});
module.exports = ConfigHeader;
