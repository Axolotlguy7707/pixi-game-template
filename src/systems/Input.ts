export class Input {
    private static keys = new Set<string>();
    private static justPressedKeys = new Set<string>();

    public static init() {
        window.addEventListener("keydown", (e) => {
            if (!this.keys.has(e.code)) {
                this.justPressedKeys.add(e.code);
            }

            this.keys.add(e.code);
        });

        window.addEventListener("keyup", (e) => {
            this.keys.delete(e.code);
        });
    }

    public static pressed(key: string): boolean {
        return this.keys.has(key);
    }

    public static justPressed(key: string): boolean {
        return this.justPressedKeys.has(key);
    }

    public static update(delta: number) {
        this.justPressedKeys.clear();
    }
}