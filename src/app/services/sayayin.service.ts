import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Sayayin} from '../model/sayayin';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SayayinService {

  private baseUrl = 'http://localhost:8080/sayayins';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) {
    console.log('Servicio Sayayin Funcionando');
  }

  getSayayins(): Observable<Sayayin[]> {
    return this.http.get(this.baseUrl).pipe(
      map(data => data as Sayayin[])
    );
  }

  getSayayin(id: number): Observable<Sayayin> {
    return this.http.get<Sayayin>(`${this.baseUrl}/${id}`);
  }

  createSayayin(sayayin: Sayayin): Observable<Sayayin> {
    return this.http.post<Sayayin>(this.baseUrl, sayayin, {headers: this.httpHeaders});
  }

  updateSayayin(sayayin: Sayayin): Observable<Sayayin> {
    return this.http.put<Sayayin>(this.baseUrl, sayayin, {headers: this.httpHeaders});
  }

  deleteSayayin(id: number): Observable<Sayayin> {
    return this.http.delete<Sayayin>(`${this.baseUrl}/${id}`, {headers: this.httpHeaders});
  }
}