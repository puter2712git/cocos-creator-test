export class Assembler2D extends cc.Assembler {
    public verticesCount = 3;
    public indicesCount = 3;

    public floatsPerVert = 5;
    public uvOffset = 2;
    public colorOffset = 4;

    public get verticesFloats() {
        return this.verticesCount * this.floatsPerVert;
    }

    protected _renderData: cc.RenderData = null;
    protected _local: any = null;

    constructor() {
        super();

        this._renderData = new cc.RenderData();
        this._renderData.init(this);

        this.initData();
        this.initLocal();
    }

    public initData() {
        let data = this._renderData;
        data.createQuadData(0, this.verticesFloats, this.indicesCount);
    }

    public initLocal() {
        this._local = [];
        this._local.length = 4;
    }

    public updateColor(comp: cc.RenderComponent, color: number) {
        let uintVerts = this._renderData.uintVDatas[0];
        if (!uintVerts) return;
        color ??= comp.node.color['_val'];

        let floatsPerVert = this.floatsPerVert;
        let colorOffset = this.colorOffset;
        for (let i = colorOffset, l = uintVerts.length; i < l; i += floatsPerVert) {
            uintVerts[i] = color;
        }
    }

    public getBuffer() {
        return cc.renderer['_handle']._meshBuffer;
    }

    public updateWorldVerts(comp: cc.RenderComponent) {
        let local = this._local;
        let verts = this._renderData.vDatas[0];

        let mat = comp.node['_worldMatrix'];
        let matm = mat.m;
        let a = matm[0],
            b = matm[1],
            c = matm[4],
            d = matm[5],
            tx = matm[12],
            ty = matm[13];

        let vl = local[0],
            vr = local[2],
            vb = local[1],
            vt = local[3];

        let floatsPerVert = this.floatsPerVert;
        let vertexOffset = 0;
        let justTranslate = a === 1 && b === 0 && c === 0 && d === 1;

        if (justTranslate) {
            // Left Bottom
            verts[vertexOffset] = vl + tx;
            verts[vertexOffset + 1] = vb + ty;
            vertexOffset += floatsPerVert;
            // Right Bottom
            verts[vertexOffset] = vr + tx;
            verts[vertexOffset + 1] = vb + ty;
            vertexOffset += floatsPerVert;
            // Top Center
            verts[vertexOffset] = (vl + vr) / 2 + tx;
            verts[vertexOffset + 1] = vt + ty;
            vertexOffset += floatsPerVert;
        } else {
            let al = a * vl,
                ar = a * vr,
                bl = b * vl,
                br = b * vr,
                cb = c * vb,
                ct = c * vt,
                db = d * vb,
                dt = d * vt;

            // Left Bottom
            verts[vertexOffset] = al + cb + tx;
            verts[vertexOffset + 1] = bl + db + ty;
            vertexOffset += floatsPerVert;
            // Right Bottom
            verts[vertexOffset] = ar + cb + tx;
            verts[vertexOffset + 1] = br + db + ty;
            vertexOffset += floatsPerVert;
            // Top Center
            verts[vertexOffset] = (al + ar) / 2 + ct + tx;
            verts[vertexOffset + 1] = (bl + br) / 2 + dt + ty;
        }
    }

    public fillBuffers(comp: cc.RenderComponent, renderer) {
        if (renderer.worldMatDirty) {
            this.updateWorldVerts(comp);
        }

        let renderData = this._renderData;
        let vData = renderData.vDatas[0];
        let iData = renderData.iDatas[0];

        let buffer = this.getBuffer(/*renderer*/);
        let offsetInfo = buffer.request(this.verticesCount, this.indicesCount);

        // Buffer data may be realloc, need get reference after request.

        // Fill vertices.
        let vertexOffset = offsetInfo.byteOffset >> 2;
        let vbuf = buffer._vData;

        if (vData.length + vertexOffset > vbuf.length) {
            vbuf.set(vData.subarray(0, vbuf.length - vertexOffset), vertexOffset);
        } else {
            vbuf.set(vData, vertexOffset);
        }

        // Fill indices.
        let ibuf = buffer._iData;
        let indiceOffset = offsetInfo.indiceOffset;
        let vertexId = offsetInfo.vertexOffset;

        // Since the update of indicesCount may occur before the update of iData.length, indicesCount does not always equal iData.length.
        // It may be greater than or less than iData.length.
        for (let i = 0, l = Math.min(this.indicesCount, iData.length); i < l; i++) {
            ibuf[indiceOffset++] = vertexId + iData[i];
        }
    }

    public packToDynamicAtlas(comp: cc.RenderComponent, frame: cc.SpriteFrame) {
        if (CC_TEST) return;

        if (!frame['_original'] && cc.dynamicAtlasManager && frame['_texture'].packable && frame['_texture'].loaded) {
            let packedFrame = cc.dynamicAtlasManager.insertSpriteFrame(frame);
            if (packedFrame) {
                frame['_setDynamicAtlasFrame'](packedFrame);
            }
        }

        let material = comp['_materials'][0];
        if (!material) return;

        if (material.getProperty('texture') !== frame['_texture']['_texture']) {
            comp._vertsDirty = true;
            comp['_updateMaterial']();
        }
    }
}
