const { ccclass, property } = cc._decorator;

@ccclass
export class DrawSystem extends cc.Component {
    @property({ type: cc.Node, visible: true })
    private _panel: cc.Node = null;
    public get panel() {
        return this._panel;
    }

    @property({ type: cc.Graphics, visible: true })
    private _graphics: cc.Graphics = null;
    public get graphics() {
        return this._graphics;
    }

    private _currPos: cc.Vec2 = cc.Vec2.ZERO;

    protected onEnable(): void {
        this.panel.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.panel.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.panel.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.panel.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }

    protected onDisable(): void {
        this.panel.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.panel.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.panel.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.panel.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }

    private onTouchStart(event: cc.Event.EventTouch) {
        this._currPos = event.getLocation();
        this.panel.parent.convertToNodeSpaceAR(this._currPos, this._currPos);
    }

    private onTouchMove(event: cc.Event.EventTouch) {
        const pos = event.getLocation();
        this.panel.parent.convertToNodeSpaceAR(pos, pos);

        this.graphics.moveTo(this._currPos.x, this._currPos.y);
        this.graphics.lineTo(pos.x, pos.y);
        this.graphics.stroke();

        this._currPos = pos;
    }

    private onTouchEnd(event: cc.Event.EventTouch) {}
}
