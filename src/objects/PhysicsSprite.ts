import * as Pixi from 'pixi.js';
import * as Planck from 'planck';

import { world } from '../main';

// A class you should extend for Sprites that are affected by physics
export class PhysicsSprite extends Pixi.Sprite {

    public body: Planck.Body;

    constructor(x: number, y: number, texture: Pixi.Texture, bodyType: Planck.BodyType) {
        super(texture);

        this.body = world.createBody({
            type: bodyType,
            position: new Planck.Vec2(x / 100, y / 100)
        });

        this.x = x;
        this.y = y;
    }

    public update(delta: number): void {
        const pos = this.body.getPosition();

        this.x = pos.x * 100;
        this.y = pos.y * 100;

        this.rotation = this.body.getAngle();
    }
}