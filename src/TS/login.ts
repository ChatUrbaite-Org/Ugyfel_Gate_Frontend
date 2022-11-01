import {Component} from "@angular/core";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {User} from "../Interfaces/User";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: '../Pages/Login.html',
  styleUrls: ['../CSS/loginStyle.css']
})
export class NewEditorComponent{
  username = new FormControl('');
  users: Observable<User[]> | undefined;
  readonly ROOT_Url = 'http://127.0.0.1:8080/Ugyfel_Gate_Rest_war_exploded/rest/get'
  constructor(private http:HttpClient) {}

  onSubmit() {
    //const users = this.http.get<User[]>(this.ROOT_Url+'/users');
    let users: Observable<User[]>[] = new Array(this.http.get<User[]>(this.ROOT_Url + '/users'));
    for(let i = 0; i < users.length; i++){
      if (users[i] === this.username) {
        console.log("yes");
      } else {
        console.log("no");
      }
    }
  }
}
