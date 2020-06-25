import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-claim',
    templateUrl: './claim.component.html',
    styleUrls: ['./claim.component.sass']
})
export class ClaimComponent implements OnInit {
    claim;
    success;

    constructor(
        private apiService: ApiService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.getData();
    }

    getData() {
        this.apiService.getClaim().subscribe((data) => {
            this.claim = data;
        }, (err) => {
            this.launchErrorToast(err);
        })
    }

    launchErrorToast(err) {
        console.error(err);
    }

    formatCountDown(seconds) {
        const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0')
        return `${minutes}:${secs}`;
    }

    onSuccessClicked() {
        this.apiService.getSuccess().subscribe((data) => {
            this.success = data;
        }, (err) => {
            this.launchErrorToast(err);
        })
    }
}
