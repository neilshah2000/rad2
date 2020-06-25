import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiServiceMock {
    url = '/mock'

    constructor() { }

    getClaim() {
        return of({
            amount: 50,
            prize: "Free Spins",
            game: "Gemix",
            countdown: 25
        });
    }

    getSuccess() {
        return of({
            amount: 50,
            prize: "Free Spins",
        });
    }
}
