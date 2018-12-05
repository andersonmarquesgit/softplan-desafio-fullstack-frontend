import { User } from './../model/user.model';
import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public static instance : SharedService = null;
  user: User;
  token: string;
  showTemplate = new EventEmitter<boolean>();

  constructor() { 
    return SharedService.instance = SharedService.instance || this;
   }

   public static getInstance(){
     if(this.instance == null) {
       this.instance = new SharedService();
     }
     return this.instance;
   }

   isLoggedIn(){
     if(this.user == null){
       return false;
     } 

     return this.user.email != '';
   }
}
