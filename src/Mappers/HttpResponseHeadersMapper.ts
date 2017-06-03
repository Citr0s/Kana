import { Header } from "../Types/Header";

export class HttpResponseHeadersMapper {

    static map(headers: string[]): Header[] {
        let response = [];

        for (let i = 0; i < headers.length; i++) {
            let headerArray = headers[i].split(': ');

            if (headerArray[0].length <= 0 || headerArray[1].length <= 0)
                continue;

            let mappedHeader = new Header();
            mappedHeader.name = headerArray[0];
            mappedHeader.value = headerArray[1];
            response.push(mappedHeader);
        }

        return response;
    }
}