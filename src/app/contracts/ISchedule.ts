export type Coords = {
    x: number,
    y: number
}

export type Size = {
    width: number
    height: number
}

export interface ISchedule {
    setCoords(coords: Coords[]): void;
    renderGrid(): void;
    clearArea(): void;
    connectPointsTheLine(): void;
    renderPoints(): void;
    setSizeArea(size: Size): void;
}