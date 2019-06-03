import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  readonly baseUrl = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  getUser(id){
 return  this.httpClient.get(this.baseUrl+'/users/'+id);
  }
updatePassword(id,data){
  return this.httpClient.post(this.baseUrl+'/users/'+id,data);
}
updateProfile(id,data){
  return this.httpClient.post(this.baseUrl+'/users/'+id,data);
}
addShipping(id,data){
  return this.httpClient.post(this.baseUrl+'/users/'+id,data);
}
}
