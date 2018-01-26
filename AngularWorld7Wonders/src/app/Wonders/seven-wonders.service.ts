import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWonder } from './wonders';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Injectable()
export class SevenWondersService {
  private _wonderUrl =  '/assets/json/wonders.json';
  constructor(private _http:HttpClient) { 
    
  }
  
  getAllWonders(): Observable<IWonder[]>{
      return this._http.get<IWonder[]>(this._wonderUrl)
      .do(data => console.log(JSON.stringify(data)))
      .catch(this.handleError);
  }
  getAllWonder(id:number):Observable<IWonder>{
         return this.getAllWonders()
         .map((wonders:IWonder[]) => wonders.find(p => p.WonderId === id))
  }

  private handleError(err:HttpErrorResponse){
    console.log("error encoutered");
    return Observable.throw(err.message);
    }
}
