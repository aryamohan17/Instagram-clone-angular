import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  search = new BehaviorSubject("")

  constructor(private http:HttpClient) { }
  
  signup( email_ph:any,fullname:any,uname:any,pass:any,img_url:any){
    const data = {email_ph,fullname,uname,pass,image_file:img_url}
    return this.http.post("http://localhost:5050/signup",data)
  }
  login(emails:any,pass:any){
    const data ={emails,pass}
    return this.http.post("http://localhost:5050/login",data)
  }

  viewAll(){
    
    return this.http.get("http://localhost:5050/viewAll")
  }
  // viewUser(username:any){
  //   const data = {username}
  //   return this.http.post("http://localhost:3010/viewUser",data)

  // }
  viewUser(username:any){
    const data = {username}
    return this.http.post("http://localhost:5050/viewUser",data)

  }

  getCurrentUserData(_id:any){
          const data = {_id}
      return this.http.post("http://localhost:5050/viewCurrentUser",data)
  
    
  }
  delete_user(username:any){
    const data={username}
    return this.http.delete("http://localhost:5050/deleteuser"+data)
  }
  // search_users(username:any){
  //   const data={username}
  //   return this.http.post("http://localhost:5010/searchuser",data)

    
  // }
  search_user(username:any){
    const data={username}
    return this.http.post("http://localhost:5050/searchuser",data);

    // return this.http.post(, {
    //   params: { username: username }
    // });
  
  }
}
