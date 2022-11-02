import {Component} from "@angular/core";
import {FormControl} from "@angular/forms";
import {Observable, of} from "rxjs";
import {User} from "../Interfaces/User";
import {HttpClient, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: '../Pages/Login.html',
  styleUrls: ['../CSS/loginStyle.css']
})
export class AuthenticationService{
  username = new FormControl('');
  users: Observable<User[]> | undefined;
  readonly ROOT_Url = 'http://127.0.0.1:8080/Ugyfel_Gate_Rest_war_exploded/rest/get'
  constructor(private http:HttpClient) { }

  onSubmit() {
    //const users = this.http.get<User[]>(this.ROOT_Url+'/users');
    let users: Observable<User[]>[] = new Array(this.http.get<User[]>(this.ROOT_Url + '/users'));
    console.log(users);
  }

  logIn(username: HTMLInputElement): Observable<any>{
    let users: Observable<User[]>[] = new Array(this.http.get<User[]>(this.ROOT_Url + '/users'));
    const usersName = document.getElementById("username");
    for(let i = 0; i < users.length; i++){
      if(usersName == users[i]){
        localStorage.setItem("token", "serverToken");
        return of(new HttpResponse({status: 200}));
      }
      else{
        return of(new HttpResponse({status: 401}));
      }
    }
  }

  logOut(): void{
    localStorage.removeItem("token");
  }

  isLoggedIn(): boolean{
    if(localStorage.getItem("token") != null){
      return true;
    }
    return false;
  }
}
