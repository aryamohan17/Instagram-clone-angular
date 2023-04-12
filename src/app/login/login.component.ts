import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private route:Router,private fb:FormBuilder,private ds:DataService){  }

  loginForm=this.fb.group({
    emails:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    pass:['',[Validators.required,Validators.pattern('[A-Za-z0-9]+')]]
  })
  login(){
    var email_id=this.loginForm.value.emails
    var psw = this.loginForm.value.pass
    if(this.loginForm.valid){
      this.ds.login(email_id,psw).subscribe((result:any)=>{
        localStorage.setItem("currentUserName",JSON.stringify(result.currentUserName))
        localStorage.setItem("currentFullname",JSON.stringify(result.currentFullname))

        localStorage.setItem("currentProfilePic",JSON.stringify(result.currentProfilePic))
        localStorage.setItem("currentPostPic",JSON.stringify(result.currentPostPic))
        localStorage.setItem("currrentUserLike",JSON.stringify(result.currentUserLike))
        localStorage.setItem("currentFollower",JSON.stringify(result.currentFollower))
        localStorage.setItem("currentFollowing",JSON.stringify(result.currentFollowing))

        alert(result.message)
        this.route.navigateByUrl("home")
      },
      result=>{
        alert(result.error.message)
      }
      )
    }
  }
}
