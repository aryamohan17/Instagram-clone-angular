import { Component ,Input,OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  // @Input() isActive:boolean;
  searchResults:any
  searchTerm:any
  userName:any
  profile_pics:any
  postPic:any
  fname:any
  allUserDatas:any
  _id:any
  user:any
  constructor(private ds:DataService , private router:Router,private ar :ActivatedRoute,private http:HttpClient){
    if(localStorage.getItem("currentUserName")){
      this._id=JSON.parse(localStorage.getItem("currentId")||"")
      this.userName=JSON.parse(localStorage.getItem("currentUserName")||"")
      this.fname=JSON.parse(localStorage.getItem("currentFullname")||"")
            this.profile_pics=JSON.parse(localStorage.getItem("currentProfilePic")||"")
      // this.postPic=JSON.parse(localStorage.getItem("currentPostPic")||"")

    }
   
  }
 searchKey:any=""
 search(event:any){
  this.searchTerm=event.target.value
  this.ds.search.next(this.searchTerm)

 }
 
  ngOnInit(): void{
     
   
      this.ds.viewAll().subscribe((result:any)=>{
        this.allUserDatas=result.allPosts
      })
      console.log(this.allUserDatas);
      this.ds.search.subscribe((value:any)=>{
        this.searchKey=value
      })
   
    
  }
  like(){

  }
  followUser(username:any){
    this.router.navigate([`/suggestUser/${username}`])
  }
  viewProfile(){

  }
 
  logout(){
    localStorage.removeItem("currentUserName")
    localStorage.removeItem("currentFullname") 
    localStorage.removeItem("currentProfilePic") 
    localStorage.removeItem("currentId")
  }
  // delete(username:any){
  //   this.ds.delete_user(username).subscribe((result:any)=>{
  //     if(result.success===1){
  //       alert(result.message)
  //     }
  //   })
  // }
}























