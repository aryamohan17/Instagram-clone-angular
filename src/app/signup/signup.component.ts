import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private fb:FormBuilder,private ds:DataService,private route:Router){}

  signupForm=this.fb.group({
    emailPhone:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    fullname:['',[Validators.required,Validators.pattern('[a-zA-Z ]+')]],
    username:['',[Validators.required,Validators.pattern('[a-zA-Z_]+')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
    img_url:['',[Validators.required]]
  })
  register(){
    var email_ph = this.signupForm.value.emailPhone
    var fullname = this.signupForm.value.fullname
    var username = this.signupForm.value.username
    var password = this.signupForm.value.password
    var img_url = this.signupForm.value.img_url
    if (this.signupForm.valid) {
      this.ds.signup(email_ph,fullname,username,password,img_url).subscribe((result:any)=>{
        alert(result.message)
        this.route.navigateByUrl("")
      },
      result=>{
        alert(result.error.message)
      
      })
    }
    
  }
}
