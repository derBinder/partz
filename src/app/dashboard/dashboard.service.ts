import {Injectable} from '@angular/core';
import {Part} from '../shared/model/part';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    readonly baseUrl = `${environment.api.partzService}/v1/parts`;

    constructor(private readonly httpClient: HttpClient) {
    }

    getParts(): Observable<Part[]> {
        return this.httpClient.get<Part[]>(this.baseUrl);
    }
}
