import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class AppService{

  constructor(private http:HttpClient,private db:AngularFireDatabase) { }

  list:AngularFireList<any>;

  

  getLeaveDetails(){
    //this.list= this.db.list("/resources");
    //return this.list.snapshotChanges();
     
    //return this.list.snapshotChanges();
  }

  insertLeaves(){
    this.list.push({
      "fname":"shubham",
      "lname":"khare"
    })
  }

  
}
