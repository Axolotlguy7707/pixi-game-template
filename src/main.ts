import * as Pixi from 'pixi.js';
import * as Planck from 'planck';
import { Scene } from './systems/Scene';
import { Input } from './systems/Input';
import { PlayScene } from './scenes/PlayScene';

import './style.css';

export const game = new Pixi.Application();

// init game
await game.init({
    width: 800,
    height: 600,
    background: '#1099bb'
});

document.body.appendChild(game.canvas);

// PRELOAD STUFF VIA
// await Pixi.Assets.load("./path/to/image");

// Input stuff
Input.init();

// physics stuff
export const physicsWorld: Planck.World = new Planck.World({
    gravity: new Planck.Vec2(0, 10)
})

// scene stuff
let currentScene: Scene;

currentScene = new PlayScene();

game.stage.addChild(currentScene);

currentScene.create();

game.ticker.add((ticker) => {
    const delta: number = ticker.deltaMS / 1000;

    currentScene.update(delta);

    physicsWorld.step(delta);

    Input.update(delta);
});

export function switchScene(scene: Scene) {
    if (currentScene) {
        game.stage.removeChild(currentScene);
        currentScene.destroy({ children: true });
    }

    currentScene = scene;
    game.stage.addChild(currentScene);
    currentScene.create();
}