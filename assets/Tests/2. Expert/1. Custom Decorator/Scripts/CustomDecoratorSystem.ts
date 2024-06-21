import { preloadEvents, register } from './EventManager21';

const { ccclass, property } = cc._decorator;

@ccclass
@preloadEvents
export class CusomDecoratorSystem extends cc.Component {
    @register('rotate-object-21')
    private Rotate(target: cc.Node) {
        target.rotateTween().start();
    }
}
