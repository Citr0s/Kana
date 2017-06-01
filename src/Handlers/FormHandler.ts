import { HttpClient } from "../Http/HttpClient";

export class FormHandler {
    constructor() {
        let button = document.getElementsByClassName('request-card__submit-button')[0];
        button.addEventListener('click', () => {
            this.handleButtonPress();
        });
    }

    handleButtonPress() {
        let url = <HTMLFormElement>document.getElementsByClassName('request-card__url-input')[0];

        if (url.value.length <= 0)
            return;

        let httpClient = new HttpClient();
        httpClient.get(url.value, (data) => {
            let statusCodeIndicator = document.getElementsByClassName('stat__response-status')[0];
            statusCodeIndicator.innerHTML = `${data.status} ${data.statusText}`;

            let responseBody = document.getElementsByClassName('response-card__body')[0];
            responseBody.innerHTML = data.response;

            console.log(data);
        });
    }
}