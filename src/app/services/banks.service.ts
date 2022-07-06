import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bank } from '../Model/Bank';

@Injectable({
  providedIn: 'root'
})
export class BanksService {

  private baseURL = 'http://localhost:8080/api/v1/banks';

  constructor(private httpClient:HttpClient) { }

  getBanksList():Observable<Bank[]>{
    return this.httpClient.get<Bank[]>(`${this.baseURL}`);
  }

  createBank(bank:Bank):Observable<Bank>{
    return this.httpClient.post<Bank>(`${this.baseURL}`,bank);
  }

  getBankById(id:number):Observable<Bank>{
    return this.httpClient.get<Bank>(`${this.baseURL}/${id}`);
  }

  updateBank(id:number,bank:Bank):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,bank);
  }

  deleteBank(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
