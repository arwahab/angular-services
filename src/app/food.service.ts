import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFood } from './food';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class FoodService {

  private _url: string = "/assets/data/foods.json";

  constructor(private http: HttpClient) { }

  getFoods(): Observable<IFood[]>{
    return this.http.get<IFood[]>(this._url);
  }
}
