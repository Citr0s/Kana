import { HttpResponse } from "../Types/HttpResponse";
import { Stopwatch } from "../Helpers/Stopwatch";
import { StatusCodeMapper } from "../Mappers/StatusCodeMapper";
import { SizeCalculator } from "../Helpers/SizeCalculator";

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
        if (this._httpClient.readyState === 4) {
            this._stopWatch.stop();

            let response = {
                status: this._httpClient.status,
                statusText: StatusCodeMapper.map(this._httpClient.status),
                content: this._httpClient.response,
                timeTaken: this._stopWatch.result(),
                contentSize: SizeCalculator.bytesFrom(this._httpClient.response)
            };

            callback(response);
        }
    }
}