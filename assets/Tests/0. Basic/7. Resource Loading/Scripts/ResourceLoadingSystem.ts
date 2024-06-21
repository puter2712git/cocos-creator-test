const { ccclass, property } = cc._decorator;

@ccclass
export class ResourceLoadingSystem extends cc.Component {
    @property({ type: cc.Sprite, visible: true })
    private _sprite: cc.Sprite = null;
    public get sprite() {
        return this._sprite;
    }

    protected start(): void {
        cc.resources.load('HelloWorld', cc.SpriteFrame, (error, spriteFrame) => {
            if (error) {
                cc.warn(error);
                return;
            }

            this.sprite.spriteFrame = spriteFrame;
            cc.log(`Set ${spriteFrame.name} to ${this.sprite.node.name}.`);
        });
    }
}
