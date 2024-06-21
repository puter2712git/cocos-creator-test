class SceneInfo {
    private _path: string = '';
    public get path() {
        return this._path;
    }
    public set path(newPath: string) {
        this._path = newPath;
    }

    private _name: string = '';
    public get name() {
        return this._name;
    }
    public set name(newName: string) {
        this._name = newName;
    }

    private _uuid: string = '';
    public get uuid() {
        return this._uuid;
    }
    public set uuid(newUuid: string) {
        this._uuid = newUuid;
    }
}

module.exports = SceneInfo;
