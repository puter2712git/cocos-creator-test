import BuildPlatform = require('build-platform');

declare module BuildTask {
    declare interface IBuildTask {
        index: number;

        name: string;
        title: string;
        platform: BuildPlatform;
        buildPath: string;

        startScene;
        excludeScenes;

        mainBundleCompressionType: string;
        isInlineSpriteFrames: boolean;

        orientation;

        isVConsole: boolean;
        isMD5Cache: boolean;
        isDebug: boolean;
        isSourceMaps: boolean;
    }
}
