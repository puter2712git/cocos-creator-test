declare module 'build-platform' {
    enum BuildPlatform {
        WEB_MOBILE = 'web-mobile',
        WEB_DESKTOP = 'web-desktop',
        ANDROID = 'android',
        WIN32 = 'win32',
        IOS = 'ios',
        MAC = 'mac',
        WECHATGAME = 'wechatgame',
        WECHATGAME_SUBCONTEXT = 'wechatgame-subcontext',
        BAIDUGAME = 'baidugame',
        BAIDUGAME_SUBCONTEXT = 'baidugame-subcontext',
        XIAMOI = 'xiaomi',
        ALIPAY = 'alipay',
        QGAME = 'qgame',
        QUICKGAME = 'quickgame',
        HUAWEI = 'huawei',
        COCOSPLAY = 'cocosplay',
        FB_INSTANT_GAMES = 'fb-instant-games',
        ANDROID_INSTANT = 'android-instant',
    }
    export = BuildPlatform;
}
