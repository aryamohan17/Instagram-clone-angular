import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  
  signup( email_ph:any,fullname:any,uname:any,pass:any,img_url:any){
    const data = {email_ph,fullname,uname,pass,image_file:img_url}
    return this.http.post("http://localhost:3010/signup",data)
  }
  login(emails:any,pass:any){
    const data ={emails,pass}
    return this.http.post("http://localhost:3010/login",data)
  }

  viewAll(){
    
    return this.http.get("http://localhost:3010/viewAll")
  }
  // viewUser(username:any){
  //   const data = {username}
  //   return this.http.post("http://localhost:3010/viewUser",data)

  // }
  getUserByUsername(username:any){
    const data = {username}
    return this.http.post("http://localhost:3010/viewUser",data)

  }

  
}
