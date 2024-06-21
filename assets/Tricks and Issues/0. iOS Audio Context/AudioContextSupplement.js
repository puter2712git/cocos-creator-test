if (cc.sys.isBrowser && cc.sys.os === cc.sys.OS_IOS) {
    cc.game.on(cc.game.EVENT_GAME_INITED, () => {
        cc.game.on(cc.game.EVENT_SHOW, () => {
            cc.sys.__audioSupport.context.resume();
        });

        cc.game.on(cc.game.EVENT_HIDE, () => {
            cc.sys.__audioSupport.context.suspend();
        });
    });
}
