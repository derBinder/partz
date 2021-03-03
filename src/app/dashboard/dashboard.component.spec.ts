import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardComponent} from './dashboard.component';
import {DashboardService} from './dashboard.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Part} from '../shared/model/part';
import {of} from 'rxjs';

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                RouterTestingModule
            ],
            declarations: [
                DashboardComponent
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should initially load all parts', () => {
        const expected: Part[] = [
            {
                id: '0',
                count: 1,
                name: 'name',
                weight: 1.1
            }
        ];
        spyOn(TestBed.inject(DashboardService), 'getParts').and.returnValue(of(expected));

        component.ngOnInit();
        fixture.detectChanges();

        expect(component.parts).toEqual(expected);
    });
});
