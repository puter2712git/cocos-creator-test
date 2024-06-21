const { ccclass, property } = cc._decorator;

@ccclass
export class NodeWalkerSystem extends cc.Component {
    @property
    public get revertAllPrefabs() {
        return false;
    }
    public set revertAllPrefabs(v) {
        this.Dfs();
    }

    private RevertPrefabNode(target: cc.Node) {
        if (!target['_prefab']) return;

        Editor.Ipc.sendToPanel('scene', 'scene:revert-prefab', target.uuid);
    }

    private Dfs(rootNode: cc.Node = cc.director.getScene()) {
        if (rootNode['_prefab']) {
            this.RevertPrefabNode(rootNode);
        }

        for (let i = 0; i < rootNode.childrenCount; i++) {
            this.Dfs(rootNode.children[i]);
        }
    }
}
