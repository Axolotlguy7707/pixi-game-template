import * as Pixi from 'pixi.js';

export class Scene extends Pixi.Container {
    constructor() {
        super();
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