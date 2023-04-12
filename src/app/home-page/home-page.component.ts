import { Component ,Input,OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  // @Input() isActive:boolean;
  onClick(){
    // this.isActive=!this.isActive
  }

id:any
  userName:any
  profile_pics:any
  postPic:any
  fname:any
  allUserDatas:any
  constructor(private ds:DataService , private router:Router,private ar :ActivatedRoute){
    if(localStorage.getItem("currentUserName")){
      this.userName=JSON.parse(localStorage.getItem("currentUserName")||"")
      this.fname=JSON.parse(localStorage.getItem("currentFullname")||"")
            this.profile_pics=JSON.parse(localStorage.getItem("currentProfilePic")||"")
      // this.postPic=JSON.parse(localStorage.getItem("currentPostPic")||"")

    }
   
  }
  ngOnInit(){
     
    
      this.ds.viewAll().subscribe((result:any)=>{
        this.allUserDatas=result.allPosts
      })
      console.log(this.allUserDatas);
      
   
    
  }
  like(){

  }
  followUser(username:any){
    this.router.navigate([`/suggestUser/${username}`])
  }
 
  logout(){
    localStorage.removeItem("currentUserName")
    
  }
}























 // if (localStorage.getItem("currentProfilePic")) {
    //   this.profile_pics=JSON.parse(localStorage.getItem("currentProfilePic")||"")
    // }
    // if(localStorage.getItem("currentPostPic")){
    //   this.postPic=JSON.parse(localStorage.getItem("currentPostPic")||"")
    // }