import { EventManager21 } from './EventManager21';

const { ccclass, property } = cc._decorator;

@ccclass
export class CustomObject21 extends cc.Component {
    protected start(): void {
        this.schedule(() => EventManager21.emit('rotate-object-21', this.node), 2, cc.macro.REPEAT_FOREVER);
    }
}
