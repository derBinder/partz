import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NewPartComponent} from './new-part/new-part.component';
import {EditPartComponent} from './edit-part/edit-part.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        NewPartComponent,
        EditPartComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
