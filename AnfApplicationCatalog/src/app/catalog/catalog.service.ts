import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable()
export class FlightService {

    constructor(private http: HttpClient) {
    }
}
