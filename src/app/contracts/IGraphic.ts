export type PrefixMethodLine = 'to' | 'from';

export interface IGraphic {
    drawRect(width: number, height: number): void;
    drawCircle(x: number, y: number, radius: number): void;
    drawLine(prefix: PrefixMethodLine, x: number, y: number): void;
    clearBody(width: number, height: number): void;
}