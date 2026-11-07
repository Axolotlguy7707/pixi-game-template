import * as Pixi from 'pixi.js';
import { Camera } from './Camera';
import { game } from '../main';

export class Scene extends Pixi.Container {
    public camera: Camera;

    public world: Pixi.Container = new Pixi.Container(); // The world (different from the physics world) will be affected by camera movement
    public hud: Pixi.Container = new Pixi.Container(); // The HUD will not be affected by camera movement


    constructor() {
        super();

        this.camera = new Camera(this.world, game.screen.width, game.screen.height);
        
        this.addChild(this.world);
        this.addChild(this.hud);
    }

    public create(): void {}

    public update(delta: number): void {
        for (const child of this.children) {
            if ('update' in child && typeof child.update === 'function') {
                child.update(delta);
            }
        }
    }
}