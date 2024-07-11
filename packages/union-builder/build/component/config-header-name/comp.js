"use strict";
var fs = require("fs");
var ConfigHeaderName = window['Vue'].extend({
    template: fs.readFileSync(Editor.url('packages://union-builder/src/component/config-header-name/comp.html'), 'utf8'),
    props: {
        buildTask: {
            type: Object,
            required: true,
        },
    },
    data: function () {
        return {
            isModifying: false,
        };
    },
    methods: {
        modify: function () {
            this.isModifying = true;
        },
        onBlur: function () {
            this.isModifying = false;
        },
    },
});
module.exports = ConfigHeaderName;
