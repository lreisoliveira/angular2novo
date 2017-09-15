import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ApiConfig } from './../config/api.config';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

 constructor(@Inject(ApiConfig) private apiConfig: ApiConfig, private http: Http) {}

  public getRandom(){
    return Math.floor(Math.random() * (5000 - 1 + 1)) + 1;
  }

  public getRecurso (recurso) {
     let headers = new Headers();
     let url     = this.apiConfig.url + recurso + '.json?r_' + this.getRandom();
     return this.http.get(`${url}?r=${this.getRandom()}` , {
         headers: headers
       })
      .map((data: any) => data.json());
  }

  public getCampeonato(recurso) {
     let headers = new Headers();
     let url     = this.apiConfig.url + recurso + '.json?r_' + this.getRandom();
     return this.http.get(`${url}?r=${this.getRandom()}` , {
         headers: headers
       })
      .map((data: any) => data.json());
  }

}