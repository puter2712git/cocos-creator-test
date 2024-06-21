const { ccclass, property } = cc._decorator;

@ccclass
export class DragAndDropSystem extends cc.Component {
    @property({ type: cc.Node, visible: true })
    private _dragObject: cc.Node = null;
    public get dragObject() {
        return this._dragObject;
    }

    @property({ type: cc.Collider, visible: true })
    private _dragArea: cc.Collider = null;
    public get dragArea() {
        return this._dragArea;
    }

    private _isCollided: boolean = false;
    public get isCollided() {
        return this._isCollided;
    }

    protected onEnable(): void {
        this.dragObject.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.dragObject.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.dragObject.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }

    protected onDisable(): void {
        this.dragObject.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.dragObject.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.dragObject.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }

    protected onLoad(): void {
        cc.director.getCollisionManager().enabled = true;
    }

    protected start(): void {
        this.dragArea['onCollisionEnter'] = this.onCollisionEnter.bind(this);
        this.dragArea['onCollisionExit'] = this.onCollisionExit.bind(this);
    }

    private onTouchMove(event: cc.Event.EventTouch) {
        let delta = event.getDelta();
        this.dragObject.x += delta.x;
        this.dragObject.y += delta.y;
    }

    private onTouchEnd(event: cc.Event.EventTouch) {
        if (this.isCollided) {
            this.dragObject.setPosition(this.dragArea.node.getPosition());
        } else {
            this.dragObject.setPosition(200, 0);
        }
    }

    private onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        this._isCollided = true;
    }

    private onCollisionExit(other: cc.Collider, self: cc.Collider) {
        this._isCollided = false;
    }
}
