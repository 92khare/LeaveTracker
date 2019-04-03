import { Component, OnInit } from '@angular/core';
import {AppService} from '../app-service.service';
import { Router } from "@angular/router";
import { FormGroup, FormControl ,Validators} from '@angular/forms';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[AngularFireDatabase]
})
export class UserComponent implements OnInit {
  monthList:any=environment.monthList;
  yearList:any=environment.yearList;
  dataList:any=[];
  viewList:any=[];
  showData:boolean=false;
  selectedResource:any;
  dataListLength:number=0;
  userForm = new FormGroup({
   
    month: new FormControl('',[Validators.required]),
    year: new FormControl('',[Validators.required]),
   
    
  });

  constructor(private appService:AppService,private router :Router, 
    private db:AngularFireDatabase){
      var dateToday=new Date();
      console.log(dateToday.getFullYear());
      console.log(dateToday.getMonth());
      var monthToday=dateToday.getMonth();
      let monthCurrent="01"
      if(monthToday>10){
        monthCurrent=monthToday.toString();
      }else{
        monthCurrent="0"+((monthToday+1).toString());
      }
    
    this.userForm.controls['year'].setValue(dateToday.getFullYear(), {onlySelf: true});
    this.userForm.controls['month'].setValue(monthCurrent, {onlySelf: true});

    }
  
  
    onSubmit(){
      this.showData=false;
  this.db.list("/resources/"+this.userForm.value.month).valueChanges().subscribe(list=>{

    this.setData(list);
    
   });
  
  
 }
 
setData(data){
this.dataList=data;
this.dataListLength=this.dataList.length;
console.log(this.dataListLength);
let emailIdArray=[];
this.dataList.forEach(element => {
  if(!emailIdArray.includes(element.emailId)){
  emailIdArray.push(element.emailId);
}
});
this.createViewData(emailIdArray)

}

setSelected(obj){
this.selectedResource=obj;
}

createViewData(emailIdArray:any){
this.viewList=[];
emailIdArray.forEach(emailId=>{
  let leaveDataArray=[];
  let name="";
  let Obj={};
  this.dataList.forEach(record=>{
     if(record.emailId==emailId){
       leaveDataArray.push(record.leaveDetails)
      name=record.name;
     }
     Obj={
      "name":name,
      "emailId":emailId,
      "leaveData":leaveDataArray
    }  
console.log(Obj);
  })
  this.viewList.push(Obj);
  this.showData=true;

})
console.table(this.viewList);
}



ngOnInit(){
 

}




createDisplayData(resObj,idArray){
  

}

  
}
