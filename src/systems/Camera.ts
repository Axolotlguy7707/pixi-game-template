import * as Pixi from 'pixi.js';

export class Camera {
    public x: number = 0;
    public y: number = 0;
    public zoom: number = 1;

    public viewportWidth: number;
    public viewportHeight: number;

    public target?: Pixi.Sprite;

    private world: Pixi.Container;

    constructor(world: Pixi.Container, width: number, height: number) {
        this.world = world;
        this.viewportWidth = width;
        this.viewportHeight = height;
    }


    update(delta: number): void {
        if (this.target) {
            this.x = this.target.x;
            this.y = this.target.y;
        }

        this.world.position.set(
            -this.x * this.zoom + this.viewportWidth / 2,
            -this.y * this.zoom + this.viewportHeight / 2
        );
    }
}