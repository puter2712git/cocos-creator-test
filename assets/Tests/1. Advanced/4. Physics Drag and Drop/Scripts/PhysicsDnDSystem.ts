const { ccclass, property } = cc._decorator;

@ccclass
export class PhysicsDnDSystem extends cc.Component {
    @property({ type: cc.Node, visible: true })
    private _target: cc.Node = null;
    public get target() {
        return this._target;
    }

    private _rigidbody: cc.RigidBody = null;
    public get rigidbody() {
        this._rigidbody ??= this.target.getComponent(cc.RigidBody);
        return this._rigidbody;
    }

    private _isTouching: boolean = false;
    public get isTouching() {
        return this._isTouching;
    }

    private _movePos: cc.Vec2 = cc.Vec2.ZERO;
    public get movePos() {
        return this._movePos;
    }

    protected onLoad(): void {
        cc.director.getPhysicsManager().enabled = true;
    }

    protected onEnable(): void {
        this.target.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.target.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.target.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.target.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }

    protected onDisable(): void {
        this.target.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.target.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.target.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.target.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }

    protected update(dt: number): void {
        if (!this.isTouching) return;

        let currPos = this.target.getPosition();
        let dir = this.movePos.sub(currPos);
        let distance = cc.Vec2.distance(currPos, this.movePos);

        let velocity = dir.multiplyScalar(distance);

        this.rigidbody.linearVelocity = velocity;
    }

    private onTouchStart(event: cc.Event.EventTouch) {
        if (this.isTouching) return;

        this._isTouching = true;
    }

    private onTouchMove(event: cc.Event.EventTouch) {
        if (!this.isTouching) return;

        let movePos = event.getLocation();
        this.target.parent.convertToNodeSpaceAR(movePos, movePos);

        this._movePos = movePos;
    }

    private onTouchEnd(event: cc.Event.EventTouch) {
        if (!this.isTouching) return;

        this._isTouching = false;
        this.rigidbody.linearVelocity = cc.Vec2.ZERO;
    }
}
