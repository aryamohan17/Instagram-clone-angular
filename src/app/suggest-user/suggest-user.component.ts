import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-suggest-user',
  templateUrl: './suggest-user.component.html',
  styleUrls: ['./suggest-user.component.css']
})
export class SuggestUserComponent {
  userName:any
  // data={
  //   fullName:'',
  //   username:'',
  //   profile_photo:''
  // }
  
  constructor(private ds:DataService,private ar:ActivatedRoute){}
  ngOnInit(){
    this.ar.params.subscribe((data:any)=>{
      this.userName=data["username"]
      this.ds.viewUser(this.userName).subscribe((data:any)=>{
        console.log(data);
        
      })
      // console.log(this.userName);
      

    })
    // this.username=this.ar.snapshot.paramMap.get('username')
    // console.log("id is",this.username);
    // this.ds.getUserByUsername(this.username).subscribe((result:any)=>{
    //   console.log({result})
    //   this.data=result.userData
    // })
  }
}
