import { Component, OnInit } from '@angular/core';
import {AppService}  from './app-service.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router:Router){

  }

  ngOnInit(){
    console.log("in app component")

  }
}
