import * as Pixi from 'pixi.js';
import { Scene } from '../systems/Scene';

export class PlayScene extends Scene {
    constructor() {
        super();
    }

    override create(): void {
        // Add things to the world using this.world.addChild(object)
        // Add things to the hud by using this.hud.addChild(object)
    }

    override update(delta: number): void {
        super.update(delta);
    }
}