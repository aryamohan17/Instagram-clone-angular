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
  userData={
    username:'',
    profile_photo:'',
    fullName:''
  }
  constructor(private ds:DataService,private ar:ActivatedRoute){
 

  }


  ngOnInit(){
    
      this.userId=this.ar.snapshot.paramMap.get('_id')
      console.log("id is",this.userId);
      this.ds.getCurrentUserData(this.userId).subscribe((result:any)=>{
        console.log({result})
        this.userData=result.currentUserData
      })
    
  
}
}
