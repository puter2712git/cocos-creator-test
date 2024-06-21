const { ccclass, property } = cc._decorator;

@ccclass
export class Item12 extends cc.Component {
    protected onEnable(): void {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    }

    protected onDisable(): void {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    }

    private onTouchStart(event: cc.Event.EventTouch) {
        let customEvent = new cc.Event.EventCustom('custom-event', true);
        this.node.dispatchEvent(customEvent);
    }
}
