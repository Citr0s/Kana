import { Header } from "./Header";

export class HttpResponse {
    status: number;
    statusText: string;
    content: any;
    timeTaken: number;
    contentSize: number;
    headers: Header[];
}