import { Component, OnInit } from '@angular/core';
import {AppService} from '../app-service.service';
import { Router } from "@angular/router";
import { forEach } from '@angular/router/src/utils/collection';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[AngularFireDatabase]
})
export class UserComponent implements OnInit {
  list1:any;
  leaveDataArray:any=[];
  leaveDataObject:any={};

  constructor(private appService:AppService,private router :Router, 
    private db:AngularFireDatabase){
  this.db.list("/resources").valueChanges().subscribe(list=>{

     
     console.log(list[0])
    });
    console.log(this.list1);
   //var a=this.list1[0];
   // console.log(a);
  }
  
  
addData(){
  console.log(this.db.list('resources/ankit').auditTrail);
  
  this.db.list('resources/ankit').push({
    "01":{
      "dates":"22,23",
      "totalLeaves":"2",
      "Desc":"N/A"

    }

  });

  alert("data added");
}


ngOnInit(){
 //this.appService.getLeaveDetails().subscribe(list=>{
//console.log(list);

 //});

 
//console.log(this.list1 );

}

/*getLeaveData(){
  this.appService.getLeaveDetails().subscribe(res=>{
  console.log(res);
  var a=Object.keys(res);
  console.table(a);
  this.createDisplayData(res,a)
  },
  
  err=>{
    console.log(err);
  });

  }*/


createDisplayData(resObj,idArray){
  this.leaveDataArray=[];

idArray.forEach(item=>{
  
  this.leaveDataObject={
    "empId":item,
    "name":resObj[item].fname+" "+resObj[item].lname,
    "emailId":resObj[item].emailId,
    
  }
this.leaveDataArray.push(this.leaveDataObject);
},
this.leaveDataObject={}
)

console.table(this.leaveDataArray);
}

  
}
