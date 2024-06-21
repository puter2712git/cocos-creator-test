cc.Tween.prototype['pause'] = function () {
    this.paused = true;
    return this;
};

cc.Tween.prototype['resume'] = function () {
    this.paused = false;
    return this;
};

cc.Tween.constructor.prototype['pauseAll'] = function () {
    let actionMgr = cc.director.getActionManager();
    actionMgr.pauseAllRunningActions();
};

cc.Tween.constructor.prototype['resumeAll'] = function () {
    let actionMgr = cc.director.getActionManager();
    for (let i = 0; i < actionMgr._arrayTargets.length; i++) {
        let element = actionMgr._arrayTargets[i];
        if (element && element.paused) {
            element.paused = false;
        }
    }
};
