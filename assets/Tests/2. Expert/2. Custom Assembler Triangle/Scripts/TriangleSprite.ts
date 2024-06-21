import { TriangleAssembler } from './TriangleAssembler';

const { ccclass, property } = cc._decorator;

@ccclass
export class TriangleSprite extends cc.Sprite {
    _resetAssembler(): void {
        this.setVertsDirty();
        let assembler = (this._assembler = new TriangleAssembler());
        assembler.init(this);
        console.log(this);
    }
}
