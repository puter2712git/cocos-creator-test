import { EventEmitSystem } from './EventEmitSystem';

const { ccclass, property } = cc._decorator;

@ccclass
export class Item13 extends cc.Component {
    protected onEnable(): void {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    }

    protected onDisable(): void {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    }

    private onTouchStart(event: cc.Event.EventTouch) {
        EventEmitSystem.eventTarget.emit('custom-event');
    }
}
