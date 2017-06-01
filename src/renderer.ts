import { HttpClient } from "./Http/HttpClient";

let httpClient = new HttpClient();
httpClient.get('https://ci.miloszdura.com/api/usage', (data) => {
    console.log(data);
});