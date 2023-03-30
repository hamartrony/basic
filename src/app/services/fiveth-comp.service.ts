import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mesa } from '../Mesa';

@Injectable({
  providedIn: 'root'
})
export class FivethCompService {
  private apiUrl = 'http://localhost:3030/mesas'
 

  constructor(private http: HttpClient) { }

  getAll(): Observable<Mesa[]>{
    return this.http.get<Mesa[]>(this.apiUrl)

  }

  getId(id:any): Observable<Mesa>{
    return this.http.get<Mesa>(`${this.apiUrl}/${id}`)

  }



  removeMesa(mesa: Mesa, mesas: Mesa[]){
    console.log("removeu a mesa " + mesa.id)
    return mesas.filter((item) => mesa.id !== item.id );
  }
}
