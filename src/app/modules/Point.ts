import {
    Graphic
} from "./Graphic";
import {
    Coords
} from "../contracts/ISchedule";

export class Point {
    private graphic!: Graphic;
    private radius: number = 5;

    constructor(private coords: Coords) {
        this.graphic = new Graphic();
    }




    render() {

        this.graphic.drawCircle(this.coords.x, this.coords.y, this.radius)
    }
    setXY(coords: Coords) {
        this.coords.x = coords.x ? coords.x : this.coords.x
        this.coords.y = coords.y ? coords.y : this.coords.y
    }

    getX() {
        return this.coords.x;
    }
    getY() {
        return this.coords.y;
    }
    getRadius() {
        return this.radius
    }

    isColision(coords: Coords) {

        if (
            coords.x <= this.coords.x + this.radius &&
            coords.x >= this.coords.x - this.radius &&
            coords.y <= this.coords.x + this.radius &&
            coords.y >= this.coords.x - this.radius
        ) {
            return true;
        }
        return false;
    }
}