const { ccclass, property } = cc._decorator;

@ccclass
export class MaskGraphicsSystem extends cc.Component {
    @property({ type: cc.Mask, visible: true })
    private _mask: cc.Mask = null;
    public get mask() {
        return this._mask;
    }

    protected start(): void {
        const graphics: cc.Graphics = this.mask['_graphics'];
        graphics.rect(0, 0, 200, 100);
        graphics.fill();
    }
}
