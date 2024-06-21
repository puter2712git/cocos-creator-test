const { ccclass, property } = cc._decorator;

async function delay(duration: number) {
    return new Promise<void>((resolve) => {
        cc.tween(cc.director.getScene()).delay(duration).call(resolve).start();
    });
}

@ccclass
export class AsyncAwaitSystem extends cc.Component {
    @property({ type: cc.Label, visible: true })
    private _label: cc.Label = null;
    public get label() {
        return this._label;
    }

    @property({ type: cc.Button, visible: true })
    private _btn: cc.Button = null;
    public get btn() {
        return this._btn;
    }

    protected onLoad(): void {
        this.label.string = '';
    }

    public async onBtnClicked() {
        this.btn.interactable = false;

        this.label.string = '3';
        await delay(1);

        this.label.string = '2';
        await delay(1);

        this.label.string = '1';
        await delay(1);

        this.label.string = 'Fire';

        this.btn.interactable = true;
    }
}
