import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClaimComponent } from './rad2/claim/claim.component'
import { PageComponent } from './layout/page/page.component';
import { SuccessComponent } from './rad2/success/success.component';

const routes: Routes = [
    {
        path: '',
        component: PageComponent,
        children: [
            {
                path:'',
                redirectTo: 'rad2',
                pathMatch: 'full' 
            },
            { path: 'rad2', component: ClaimComponent },
            { path: 'success', component: SuccessComponent }
        ]
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
