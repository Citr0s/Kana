export class StatusCodeMapper {
    static map(code: number) {
        switch (code) {
            case 200:
                return 'OK';
            case 404:
                return 'Not Found';
            case 500:
                return 'Internal Server Error';
        }
    }
}