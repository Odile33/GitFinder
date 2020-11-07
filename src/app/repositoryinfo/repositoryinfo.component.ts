import { Component, OnInit } from '@angular/core';
import {GithubserviceService} from '../service/githubservice.service'
import {Repo} from '../repo';
@Component({
  selector: 'app-repositoryinfo',
  templateUrl: './repositoryinfo.component.html',
  styleUrls: ['./repositoryinfo.component.css']
})
export class RepositoryinfoComponent implements OnInit {
  repos:Repo;
  constructor(public Githubservice: GithubserviceService) {
  }

  
  ngOnInit() {
    this.searchRepo("Odile078");
  }

  searchRepo(searchtxt){
    this.Githubservice.searchRepo(searchtxt).then(
      ()=>{
        this.repos=this.Githubservice.repos;

      },
      (error)=>{
        console.log(error)
      }
    )
  }

}
