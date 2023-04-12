import { Component ,OnInit} from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent {
  viewUser:any
  constructor(private ds:DataService,private ar:ActivatedRoute){
 

  }


  ngOnInit(){
    // this.ds.viewUser(JSON.parse(localStorage.getItem("currentUserName")||"")).subscribe((result:any)=>{
    //   this.viewUser=result.userData
    // })
    // console.log(
    //   this.viewUser
    // );
    
    // this.username=this.ar.snapshot.paramMap.get('username')
    // console.log("id is",this.username);
    // this.ds.getUserByUsername(this.username).subscribe((result:any)=>{
    //   console.log({result})
    //   this.data=result.userData
    // })
    
  }
}
