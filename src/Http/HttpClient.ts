import { HttpResponse } from "../Types/HttpResponse";
import { Stopwatch } from "../Helpers/Stopwatch";
import { StatusCodeMapper } from "../Mappers/StatusCodeMapper";
import { SizeCalculator } from "../Helpers/SizeCalculator";
import { HttpResponseHeadersMapper } from "../Mappers/HttpResponseHeadersMapper";

export class HttpClient {
    private _httpClient: XMLHttpRequest;
    private _stopWatch: Stopwatch;
    private _url: string;

    constructor(url: string) {
        this._httpClient = new XMLHttpRequest();
        this._stopWatch = new Stopwatch();
        this._url = url;
    }

    get(callback: any) {
        this._stopWatch.start();

        this._httpClient.open('GET', this._url);
        this._httpClient.send(null);

        this._httpClient.onreadystatechange = () => {
            this._handleResponse(callback);
        };
    }

    private _handleResponse(callback: any) {
        if (this._httpClient.readyState === 4) {
            this._stopWatch.stop();

            let response = new HttpResponse();
            response.status = this._httpClient.status;
            response.statusText = StatusCodeMapper.map(this._httpClient.status);
            response.content = this._httpClient.response;
            response.timeTaken = this._stopWatch.result();
            response.contentSize = SizeCalculator.bytesFrom(this._httpClient.response);
            response.headers = HttpResponseHeadersMapper.map(this._httpClient.getAllResponseHeaders().split('\r\n'));

            callback(response);
        }
    }
}