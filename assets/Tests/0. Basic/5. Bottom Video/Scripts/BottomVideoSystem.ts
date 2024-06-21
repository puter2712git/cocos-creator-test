const { ccclass, property } = cc._decorator;

cc.macro.ENABLE_TRANSPARENT_CANVAS = true;

@ccclass
export class BottomVideoSystem extends cc.Component {
    @property({ type: cc.VideoPlayer, visible: true })
    private _videoPlayer: cc.VideoPlayer = null;
    public get videoPlayer() {
        return this._videoPlayer;
    }

    protected start(): void {
        this.videoPlayer.play();
    }
}
