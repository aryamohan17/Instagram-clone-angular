import { Component ,OnInit} from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent {
  
  userId:any
  userName:any
  // userData={
  //   username:'',
  //   profile_photo:'',
  //   fullName:''
  // }
  constructor(private ds:DataService,private ar:ActivatedRoute){
 

  }


  ngOnInit(){

    this.ar.params.subscribe((data:any)=>{
      this.userName=data["username"]
      this.ds.viewUser(this.userName).subscribe((data:any)=>{
        console.log(data);
        
      })
      // console.log(this.userName);
      

    })
    
      // this.userId=this.ar.snapshot.paramMap.get('_id')
      // console.log("id is",this.userId);
      // this.ds.getCurrentUserData(this.userId).subscribe((result:any)=>{
      //   console.log({result})
      //   this.userData=result.currentUserData
      // })
    
  
}
}
