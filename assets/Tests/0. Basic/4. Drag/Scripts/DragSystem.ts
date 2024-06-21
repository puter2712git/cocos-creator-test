const { ccclass, property } = cc._decorator;

@ccclass
export class DragSystem extends cc.Component {
    @property({ type: cc.Node, visible: true })
    private _target: cc.Node = null;
    public get target() {
        return this._target;
    }

    protected onEnable(): void {
        this.target.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }

    protected onDisable(): void {
        this.target.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }

    private onTouchMove(event: cc.Event.EventTouch) {
        let delta = event.getDelta();
        this.target.x += delta.x;
        this.target.y += delta.y;
    }
}
