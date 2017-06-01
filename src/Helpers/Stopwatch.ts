export class Stopwatch {
    private _start: Date;
    private _end: Date;

    constructor() {
        this._start = new Date();
    }

    start() {
        this._start = new Date();
    }

    stop() {
        this._end = new Date();
    }

    result() {
        return this._end - this._start;
    }
}