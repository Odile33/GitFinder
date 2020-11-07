import { Component, OnInit } from '@angular/core';
import {GithubserviceService} from '../service/githubservice.service'
import {Profile} from '../profile';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  profiles:Profile[];
  constructor(public Githubservice: GithubserviceService) { }

  ngOnInit() {
    this.searchProf("Odile078");
  }
  searchProf(searchtxt){
    this.Githubservice.searchProfile(searchtxt).then(
      ()=>{
        this.profiles=this.Githubservice.profiles;
        console.log(this.profiles);

      },
      (error)=>{
        console.log(error)
      }
    )
    // console.log(searchTerm)
  }

}
