import { Injectable } from '@angular/core';
import { Profile } from '../profile';
import { Repo } from '../repo';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubserviceService {
  profiles:Profile[]=[];
  repos:Repo;

  constructor(private http:HttpClient) { }
  searchProfile(searchtxt: string){
    interface data {
      login:string;
      username:string;
      avatar: string;
      html_url: string;
      name: string;
      url: string;
    }

   
    let promise =  new Promise((resolve, reject)=>{

      this.http.get<data>('https://api.github.com/users/'+searchtxt+'?access_token='+environment.APIKEY).toPromise().then(
        (results)=>{
          this.profiles = [];
          this.profiles.push(results);
          console.log(results)
          resolve()
        },
        (error)=>{
          console.log(error)
          reject()
        }
      )
    })
    return promise;
  }


searchRepo(searchtxt:string){
  interface results {
    login:string;
    username:string;
    avatar_url: string;
    html_url: string;
    name: string;
    url: string;
  }

    
    let promise =  new Promise((resolve, reject)=>{
        this.http.get<results>('https://api.github.com/users/'+searchtxt+'/repos?access_token='+environment.APIKEY).toPromise().then(
          (results)=>{
            this.repos;
            this.repos = results;
            console.log(results)
            resolve()
          },
          (error)=>{
            console.log(error)
            reject()
          }
        )
    })
    return promise;
  }

}
