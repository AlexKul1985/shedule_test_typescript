import {
    Schedule
} from "./modules/Schedule";

export class App {

    private shedule!: Schedule;

    constructor() {
        this.shedule = new Schedule(document.getElementById('app'))
        this.shedule.setSizeArea({
            width: 500,
            height: 500
        })

        this.shedule.renderGrid()



    }
}