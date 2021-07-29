import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpResponse} from '@angular/common/http';
import { RacResponse } from '../models/racresponse.model';

@Injectable({
  providedIn: 'root'
})

export class BackendService {
  backendUrl:string = '/v1/lp/upload';
  httpOptions = {
    //headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' }),
    observe: 'events' as const,
    params: {} as any
  }
  constructor(private http: HttpClient) {}
  upload(data,token:string) {
    this.httpOptions.params = {token: token};
    return this.http.post<RacResponse>(this.backendUrl, data, this.httpOptions);
  }
}



