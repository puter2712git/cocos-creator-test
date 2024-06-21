const { ccclass, property } = cc._decorator;

@ccclass
export class EventDispatchSystem extends cc.Component {
    @property({ type: cc.Node, visible: true })
    private _target: cc.Node = null;
    public get target() {
        return this._target;
    }

    protected onEnable(): void {
        this.node.on('custom-event', this.onItemTouch, this);
    }

    protected onDisable(): void {
        this.node.off('custom-event', this.onItemTouch, this);
    }

    private onItemTouch(event: cc.Event.EventCustom) {
        this.target.color = cc.color(Math.random() * 255, Math.random() * 255, Math.random() * 255);
    }
}
