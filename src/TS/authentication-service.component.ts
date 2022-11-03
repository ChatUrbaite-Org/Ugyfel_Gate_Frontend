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
export class AuthenticationService {
  username = new FormControl('');
  users: Observable<User[]> | undefined;
  readonly ROOT_Url = 'http://127.0.0.1:8080/Ugyfel_Gate_Rest_war_exploded/rest/get'

  constructor(private http: HttpClient) {
  }
/*
  onSubmit() {
    //const users = this.http.get<User[]>(this.ROOT_Url+'/users');
    let users: Observable<User[]>[] = new Array(this.http.get<User[]>(this.ROOT_Url + '/users'));
    console.log(users);
  }*/

  logIn(): void {
    let users = new Array(this.http.get<User[]>(this.ROOT_Url + '/users'));
    /*
    const usersName = document.getElementById("username");
    let textContent = usersName.textContent;
    console.log(users2.length);
    for (let i = 0; i < users2.length; i++) {
      if (textContent === users2[i]) {
        localStorage.setItem("token", "serverToken");
        return of(new HttpResponse({status: 200}));
      }
      return of(new HttpResponse({status: 401}));
    }*/
    /*
    const username2 = document.getElementById("username");
    username2?.addEventListener('username2',function (event) {
      let target = event.target as HTMLInputElement;
      console.log(target.value);
    })*/
    for(let i = 0; i < users.length; i++){
      const username2 = document.getElementById('username') as HTMLInputElement | null;
      username2?.addEventListener('username2',
        function (event) {
          let target = event.target as HTMLInputElement;
          console.log(target.value);
          users.toString();
          if (target === users[i]) {
            localStorage.setItem("token", "serverToken");
            return of(new HttpResponse({status: 200}));
          }
          return of(new HttpResponse({status: 401}));
        })
    }
  };

  logOut(): void {
    localStorage.removeItem("token");
  }

  isLoggedIn(): boolean {
    return localStorage.getItem("token") != null;
  }
}
