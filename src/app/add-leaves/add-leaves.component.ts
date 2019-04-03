import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,Validators} from '@angular/forms';
import { DatePipe } from '@angular/common'
import {environment} from '../../environments/environment';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';


@Component({
  selector: 'app-add-leaves',
  templateUrl: './add-leaves.component.html',
  styleUrls: ['./add-leaves.component.css'],
  providers:[DatePipe]
})
export class AddLeavesComponent implements OnInit {

  leaveObject:any={};
  successMsg:boolean=false;
  msgBlock:boolean=false;
  
  userForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    emailId: new FormControl('',[Validators.required,Validators.email]),
    month: new FormControl('',[Validators.required]),
    year: new FormControl('',[Validators.required]),
    totalLeaves: new FormControl('',[Validators.required]),
    leaveDates: new FormControl('',[Validators.required]),
    desc: new FormControl('',[Validators.required]),
    
  });


  
  monthList:any=environment.monthList;
  yearList:any=environment.yearList;
  constructor(public datepipe: DatePipe,private db:AngularFireDatabase) { 
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

  ngOnInit() {
  }
reset(){
  this.userForm.reset();
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
  this.msgBlock=false;
  
}
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.userForm.value.name);
    this.leaveObject={};

  let date=new Date();
 let dateToday =this.datepipe.transform(date, 'yyyy-MM-dd')+"  "+ date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    this.leaveObject={
      "name":this.userForm.value.name,
      "emailId":this.userForm.value.emailId,
     
      "leaveDetails":{
        "totalLeaves":this.userForm.value.totalLeaves,
        "leaveDates":this.userForm.value.leaveDates,
        "leaveDesc":this.userForm.value.desc,
        "updateDate":dateToday.toString() 
       
      }
    }
    console.log(this.leaveObject);
    this.addLeaveObject(this.leaveObject);

    
  }

  addLeaveObject(obj){

    try{
    var a=this.db.list('resources/'+this.userForm.value.month).push(
      obj
  
    );

  if(a.key){
 this.msgBlock=true;   
this.successMsg=true;

  }else{
    this.msgBlock=true;  
  } 
}catch(e){
  console.log(e);
  this.msgBlock=true; 

} 


  }  

}
