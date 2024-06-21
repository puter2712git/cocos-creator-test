cc.Node.prototype.rotateTween = function () {
    return cc.tween(this).by(1, { angle: 360 }, { easing: 'backIn' });
};

cc.Node.prototype.scaleTween = function () {
    return cc.tween(this).by(1, { scale: 0.5 }, { easing: 'backOut' });
};
