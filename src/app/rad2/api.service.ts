import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    url = '/api'

    constructor(private httpClient: HttpClient) { }

    getClaim() {
        const endpoint = this.url + '/claim';
        return this.httpClient.get(endpoint);
    }

    getSuccess() {
        const endpoint = this.url + '/success';
        return this.httpClient.get(endpoint);
    }
}
