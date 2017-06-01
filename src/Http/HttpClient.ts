import { HttpResponse } from "../Types/HttpResponse";
import { Stopwatch } from "../Helpers/Stopwatch";
import { StatusCodeMapper } from "../Mappers/StatusCodeMapper";

export class HttpClient {
    private _httpClient: XMLHttpRequest;
    private _stopWatch: Stopwatch;

    constructor() {
        this._httpClient = new XMLHttpRequest();
        this._stopWatch = new Stopwatch();
    }

    get(url: string, callback: any) {
        this._stopWatch.start();

        this._httpClient.open('GET', url);
        this._httpClient.send(null);

        this._httpClient.onreadystatechange = () => {
            this._handleResponse(callback);
        };
    }

    private _handleResponse(callback: any) {
        let response = new HttpResponse();

        if (this._httpClient.readyState === 4) {
            this._stopWatch.stop();

            response.status = this._httpClient.status;
            response.statusText = StatusCodeMapper.map(this._httpClient.status);
            response.content = this._httpClient.response;
            response.timeTaken = this._stopWatch.result();

            callback(response);
        }
    }
}