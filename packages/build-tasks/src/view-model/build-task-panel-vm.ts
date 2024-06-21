/// <reference path='../model/build-task.d.ts' />

class BuildTaskPanelVM {
    private _isConfig: boolean = false;
    public get isConfig() {
        return this._isConfig;
    }
    public set isConfig(newIsConfig: boolean) {
        this._isConfig = newIsConfig;
    }

    private _buildTasks: [] = [];
}
