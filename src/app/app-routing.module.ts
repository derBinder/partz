import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NewPartComponent} from './new-part/new-part.component';
import {EditPartComponent} from './edit-part/edit-part.component';

const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'new', component: NewPartComponent},
    {path: 'edit', component: EditPartComponent},
    {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
