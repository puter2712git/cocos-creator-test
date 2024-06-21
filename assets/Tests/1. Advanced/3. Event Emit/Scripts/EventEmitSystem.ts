const { ccclass, property } = cc._decorator;

@ccclass
export class EventEmitSystem extends cc.Component {
    @property({ type: cc.Node, visible: true })
    private _target: cc.Node = null;
    public get target() {
        return this._target;
    }

    public static eventTarget: cc.EventTarget = new cc.EventTarget();

    protected onEnable(): void {
        EventEmitSystem.eventTarget.on('custom-event', this.onItemTouch, this);
    }

    protected onDisable(): void {
        EventEmitSystem.eventTarget.off('custom-event', this.onItemTouch, this);
    }

    private onItemTouch() {
        this.target.color = cc.color(Math.random() * 255, Math.random() * 255, Math.random() * 255);
    }
}
