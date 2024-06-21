const { ccclass, property } = cc._decorator;

@ccclass
export class PhysicsAccumulator extends cc.Component {
    protected onLoad(): void {
        cc.director.getPhysicsManager().enabledAccumulator = true;
    }
}
