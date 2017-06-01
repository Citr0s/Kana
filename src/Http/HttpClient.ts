export class HttpClient {
    private _httpClient: XMLHttpRequest;

    constructor() {
        this._httpClient = new XMLHttpRequest();
    }

    get(url: string, callback: any) {
        this._httpClient.open('GET', url);
        this._httpClient.send(null);

        this._httpClient.onreadystatechange = () => {
            this._handleResponse(callback);
        };
    }

    private _handleResponse(callback: any) {
        if (this._httpClient.readyState === 4) {
            if (this._httpClient.status === 200) {
                callback(this._httpClient.responseText);
            } else {
                callback(this._httpClient.status);
            }
        }
    }
}