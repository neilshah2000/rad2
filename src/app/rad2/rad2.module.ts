import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimComponent } from '../rad2/claim/claim.component';
import { SuccessComponent } from '../rad2/success/success.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [ClaimComponent, SuccessComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        ApiService
    ]
})
export class Rad2Module { }
