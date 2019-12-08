import {
    IGraphic,
    PrefixMethodLine
} from "../contracts/IGraphic";



export class Graphic implements IGraphic {

    private ctx!: CanvasRenderingContext2D;
    private canvas!: HTMLCanvasElement;

    constructor() {
        this.init()
    }

    public getElement(): HTMLCanvasElement {
        return this.canvas
    }
    private init(): void {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
    }

    public drawRect(width: number, height: number): void {
        this.ctx.fillRect(0, 0, width, height);
    }

    public drawCircle(x: number, y: number, radius: number): void {
        this.ctx.beginPath();
        this.ctx.fillStyle = "red";
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        this.ctx.fill();
    }

    public drawLine(prefix: PrefixMethodLine, x: number, y: number, flag: boolean = false): void {

        if (flag) {
            this.ctx.strokeStyle = 'blue'
            this.ctx.lineWidth = 5
        }

        if (prefix == 'to') {
            this.ctx.lineTo(x, y);
            this.ctx.stroke();
        } else if (prefix == 'from') {
            this.ctx.beginPath();
            this.ctx.moveTo(x, y);
        }
    }

    public clearBody(width: number, height: number): void {
        this.ctx.clearRect(0, 0, width, height);
    }
}