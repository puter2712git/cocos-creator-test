const { ccclass, property } = cc._decorator;

@ccclass('CustomItemEGSS')
class CustomItemEGSS {
    @property({ type: cc.Node, visible: true })
    private _node: cc.Node = null;
    public get node() {
        return this._node;
    }
    public set node(newNode: cc.Node) {
        this._node = newNode;
    }

    @property({ type: cc.Label, visible: true })
    private _titleLabel: cc.Label = null;
    public get titleLabel() {
        return this._titleLabel;
    }
    public set titleLabel(newTitleLabel: cc.Label) {
        this._titleLabel = newTitleLabel;
    }

    @property({ type: cc.Label, visible: true })
    private _descriptionLabel: cc.Label = null;
    public get descriptionLabel() {
        return this._descriptionLabel;
    }
    public set descriptionLabel(newDescriptionLabel: cc.Label) {
        this._descriptionLabel = newDescriptionLabel;
    }
}

@ccclass
export class EditorGetterSetterSystem extends cc.Component {
    @property({ type: cc.Node, visible: true })
    private _customItemRoot: cc.Node = null;
    public get customItemRoot() {
        return this._customItemRoot;
    }

    @property({ type: CustomItemEGSS, visible: true })
    private _customItems: CustomItemEGSS[] = [];
    public get customItems() {
        return this._customItems;
    }

    @property
    private _isSetting: boolean = false;
    @property
    public get setItems() {
        return this._isSetting;
    }
    public set setItems(v) {
        if (this._isSetting) return;

        this._isSetting = true;

        for (let i = 0; i < this.customItemRoot.childrenCount; i++) {
            const child = this.customItemRoot.children[i];
            child.name = i.toString();

            this._customItems[i] = new CustomItemEGSS();
            this._customItems[i].node = child;
            this._customItems[i].titleLabel = child.children[0].getComponent(cc.Label);
            this._customItems[i].descriptionLabel = child.children[1].getComponent(cc.Label);
        }

        this._isSetting = false;
    }
}
