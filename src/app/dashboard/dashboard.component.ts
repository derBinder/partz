import {Component, OnInit} from '@angular/core';
import {DashboardService} from './dashboard.service';
import {Part} from '../shared/model/part';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    public parts: Part[];

    constructor(private readonly dashboardService: DashboardService) {
        this.parts = [];
    }

    ngOnInit(): void {
        this.getParts();
    }

    private getParts() {
        this.dashboardService.getParts().subscribe(value => {
            this.parts = value;
        });
    }
}
