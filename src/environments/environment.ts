// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyDy_fNQveRI87Ii414QdFs3QNZVk9K_YuM",
    authDomain: "myproject-8e8da.firebaseapp.com",
    databaseURL: "https://myproject-8e8da.firebaseio.com",
    projectId: "myproject-8e8da",
    storageBucket: "myproject-8e8da.appspot.com",
    messagingSenderId: "899088510843"
  },

  monthList:[
        {name:"January",id:"01"},
        {name:"February",id:"02"},
        {name:"March",id:"03"},
        {name:"April",id:"04"},
        {name:"May",id:"05"},
        {name:"June",id:"06"},
        {name:"July",id:"07"},
        {name:"August",id:"08"},
        {name:"September",id:"09"},
        {name:"October",id:"10"},
        {name:"November",id:"11"},
        {name:"December",id:"12"},
        

  ],

  yearList:["2019","2020","2021","2022"]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
