class Game {
    /**
     * @param {object} config
     * @param {number} [config.width=undefined]
     * @param {number} [config.height=undefined]
     * @param {HTMLCanvasElement} [config.canvas=undefined]
     * @param {string} [canvas.backgroundColor=undefined]
     */
    constructor(config) {
        if (config.canvas) {
            this.canvas = config.canvas;
            this.canvas.width = config.width || this.canvas.width;
            this.canvas.height = config.height || this.canvas.height;
        } else {
            this.canvas = document.createElement("canvas");
            this.canvas.width = config.width || 640;
            this.canvas.height = config.height || 480;
            document.body.appendChild();
        }
    }
}