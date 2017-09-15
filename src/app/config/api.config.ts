export class ApiConfig {
    private _url: string;

    constructor(){
        this._url = 'https://json.gazetaesportiva.com/';
    }
    get url(): string {
        return this._url;
    }
}