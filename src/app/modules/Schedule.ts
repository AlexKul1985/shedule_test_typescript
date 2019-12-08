import {
    Graphic
} from "./Graphic";
import {
    Point
} from "./Point";
import {
    ISchedule,
    Coords,
    Size
} from "../contracts/ISchedule";



export class Schedule implements ISchedule {

    private graphic!: Graphic;
    private width!: number;
    private height!: number;
    private points!: Point[];
    constructor(private root: HTMLElement) {
        this.graphic = new Graphic()
    }

    setCoords(coords: Coords[]): void {
        coords.forEach((c: Coords) => {
            let point = new Point(c);
            this.points.push(point);
        })
    }
    renderGrid(): void {
        this.graphic.drawRect(this.width, this.height)
    }
    clearArea(): void {
        this.graphic.clearBody(this.width, this.height)
    }
    connectPointsTheLine(): void {}
    renderPoints(): void {}
    setSizeArea(size: Size): void {
        let el: HTMLCanvasElement = this.graphic.getElement()
        this.width = el.width = size.width;
        this.height = el.height = size.height;
        this.root.appendChild(el)
    }


}