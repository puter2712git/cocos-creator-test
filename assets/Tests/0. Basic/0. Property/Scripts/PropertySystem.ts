const { ccclass, property } = cc._decorator;

enum TestEnum {
    ONE,
    TWO,
    THREE,
}

@ccclass
export class PropertySystem extends cc.Component {
    // Basic property
    @property(cc.Node)
    nodeA: cc.Node = null;

    // Invisible property
    @property(cc.Node)
    _nodeB: cc.Node = null;

    // Visible private property
    @property({ type: cc.Node, visible: true })
    private _nodeC: cc.Node = null;

    // Other attributes
    @property({
        type: cc.Node,
        visible: true,
        displayName: 'Attribute Node',
        tooltip: 'Tooltip of this node',
        serializable: true,
        formerlySerializedAs: 'attrNode',
    })
    private _nodeD: cc.Node = null;

    // Enum
    @property({ type: cc.Enum(TestEnum), visible: true })
    private _type: TestEnum = TestEnum.ONE;
}
