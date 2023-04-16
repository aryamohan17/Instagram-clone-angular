import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  data_id:any
  datas:any
constructor(private ar:ActivatedRoute,private ds :DataService,private route:Router){}
ngOnInit():void{
  this.ar.params.subscribe((data:any)=>{
    this.data_id=data["username"]
  })
  this.ds.viewUser(this.data_id).subscribe((data:any)=>{
    this.datas=data
    console.log(this.datas);
    
  })
}
updateData(form:any){
  this.ds.updateData(this.data_id,this.datas).subscribe((result:any)=>{
    alert("updated")
    this.route.navigateByUrl("")
  })
}
}
