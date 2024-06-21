const { ccclass, property } = cc._decorator;

@ccclass
export class PolyfillSystem extends cc.Component {
    @property({ type: cc.Node, visible: true })
    private _target: cc.Node = null;
    public get target() {
        return this._target;
    }

    protected onLoad(): void {
        this.schedule(() => this.target.rotateTween().start(), 2, cc.macro.REPEAT_FOREVER);
        this.schedule(() => this.target.scaleTween().start(), 2, 3);
    }
}
