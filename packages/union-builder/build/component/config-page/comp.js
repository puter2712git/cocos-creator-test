"use strict";
var fs = require("fs");
var ConfigHeader = require("../config-header/comp");
var ConfigBody = require("../config-body/comp");
var ConfigPage = window['Vue'].extend({
    template: fs.readFileSync(Editor.url('packages://union-builder/src/component/config-page/comp.html'), 'utf8'),
    props: {
        buildTask: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
    },
    components: {
        ConfigHeader: ConfigHeader,
        ConfigBody: ConfigBody,
    },
});
module.exports = ConfigPage;
