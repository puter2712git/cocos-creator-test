const { ccclass, property } = cc._decorator;

@ccclass('CustomItem')
class CustomItem {
    @property({ type: cc.Node, visible: true })
    private _node: cc.Node = null;
    public get node() {
        return this._node;
    }

    @property({ type: cc.Sprite, visible: true })
    private _sprite: cc.Sprite = null;
    public get sprite() {
        return this._sprite;
    }

    @property({ type: cc.Label, visible: true })
    private _label: cc.Label = null;
    public get label() {
        return this._label;
    }
}

@ccclass
export class CustomDataSystem extends cc.Component {
    @property({ type: CustomItem, visible: true })
    private _items: CustomItem[] = [];
    public get items() {
        return this._items;
    }
}
