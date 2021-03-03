import {TestBed} from '@angular/core/testing';

import {DashboardService} from './dashboard.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Part} from '../shared/model/part';

describe('DashboardService', () => {
    let service: DashboardService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ]
        });
        service = TestBed.inject(DashboardService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('getParts', () => {
        it('should call baseUrl as GET', () => {
            const expected: Part[] = [
                {
                    id: '0',
                    count: 1,
                    name: 'name',
                    weight: 1.1
                }
            ];
            let observableCalled = false;

            service.getParts().subscribe(parts => {
                    expect(parts).toEqual(expected);
                    observableCalled = true;
                },
                () => fail()
            );

            const request = httpMock.expectOne(`${service.baseUrl}`);
            expect(request.request.method).toBe('GET');
            request.flush(expected);
            expect(observableCalled).toBeFalsy();
        });
    });
});
