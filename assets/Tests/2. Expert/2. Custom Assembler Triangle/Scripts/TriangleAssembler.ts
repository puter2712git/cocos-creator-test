import { Assembler2D } from './Assembler2D';

export class TriangleAssembler extends Assembler2D {
    public updateRenderData(sprite: cc.Sprite) {
        this.packToDynamicAtlas(sprite, sprite.spriteFrame);

        if (sprite._vertsDirty) {
            this.updateUVs(sprite);
            this.updateVerts(sprite);
            sprite._vertsDirty = false;
        }
    }

    public updateUVs(sprite: cc.Sprite) {
        let uv = sprite.spriteFrame['uv'];
        let uvOffset = this.uvOffset;
        let floatsPerVert = this.floatsPerVert;
        let verts = this._renderData.vDatas[0];
        for (let i = 0; i < 3; i++) {
            let srcOffset = i * 2;
            let dstOffset = floatsPerVert * i + uvOffset;
            verts[dstOffset] = uv[srcOffset];
            verts[dstOffset + 1] = uv[srcOffset + 1];

            if (i === 2) {
                verts[dstOffset] = 0.5;
                verts[dstOffset + 1] = 0;
            }
        }
    }

    public updateVerts(sprite: cc.Sprite) {
        let node = sprite.node;
        let cw = node.width,
            ch = node.height;
        let appx = node.anchorX * cw,
            appy = node.anchorY * ch;
        let l: number, b: number, r: number, t: number;

        if (sprite.trim) {
            l = -appx;
            b = -appy;
            r = cw - appx;
            t = ch - appy;
        } else {
            let frame = sprite.spriteFrame;
            let ow = frame['_originalSize'].width,
                oh = frame['_originalSize'].height;
            let rw = frame['_rect'].width,
                rh = frame['_rect'].height;
            let offset = frame['_offset'];
            let scaleX = cw / ow,
                scaleY = ch / oh;

            let trimLeft = offset.x + (ow - rw) / 2;
            let trimRight = offset.x - (ow - rw) / 2;
            let trimBottom = offset.y + (oh - rh) / 2;
            let trimTop = offset.y - (oh - rh) / 2;
            l = trimLeft * scaleX - appx;
            b = trimBottom * scaleY - appy;
            r = cw + trimRight * scaleX - appx;
            t = ch + trimTop * scaleY - appy;
        }

        let local = this._local;
        local[0] = l;
        local[1] = b;
        local[2] = r;
        local[3] = t;
        this.updateWorldVerts(sprite);
    }
}
