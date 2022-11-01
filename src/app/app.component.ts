import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../Interfaces/User";
import {Locations} from "../Interfaces/Locations";
import {Organisations} from "../Interfaces/Organisations";
import {ID_Card} from "../Interfaces/ID_Card";
import {Location_Card} from "../Interfaces/Location_Card";
import {DriversLicenses} from "../Interfaces/DriversLicenses";
import {Messages} from "../Interfaces/Messages";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: '../Pages/Get.html',
  styleUrls: ['../styles.css']
})
export class AppComponent {
  title = 'Ügyfél Kapu';
  readonly ROOT_Url = 'http://127.0.0.1:8080/Ugyfel_Gate_Rest_war_exploded/rest/get'
  readonly ROOT_Url0 = 'http://jsonplaceholder.typicode.com'
  users: Observable<User[]> | undefined;
  locations : Observable<Locations[]> | undefined;
  organisations : Observable<Organisations[]> | undefined
  id_cards : Observable<ID_Card[]> | undefined
  location_cards : Observable<Location_Card[]> | undefined
  driversLicenses : Observable<DriversLicenses[]> | undefined
  messages : Observable<Messages[]> | undefined
  posts : any;
  constructor(private http:HttpClient) {}
  getUsers()
  {
    this.users = this.http.get<User[]>(this.ROOT_Url+'/users')
    console.log(this.http.get<User[]>(this.ROOT_Url+'/users'))
  }
  getLocations()
  {
    this.locations = this.http.get<Locations[]>(this.ROOT_Url+'/locations')
    console.log(this.http.get<Locations[]>(this.ROOT_Url+'/locations'))
  }
  getOrganisations()
  {
    this.organisations = this.http.get<Organisations[]>(this.ROOT_Url+'/organisations')
    console.log(this.http.get<Organisations[]>(this.ROOT_Url+'/organisations'))
  }
  getID_Cards()
  {
    this.id_cards = this.http.get<ID_Card[]>(this.ROOT_Url+'/idcards')
    console.log(this.http.get<ID_Card[]>(this.ROOT_Url+'/idcards'))
  }
  getLocation_Cards()
  {
    this.location_cards = this.http.get<Location_Card[]>(this.ROOT_Url+'/locationcards')
    console.log(this.http.get<Location_Card[]>(this.ROOT_Url+'/locationcards'))
  }
  getDrivers_Licenses()
  {
    this.driversLicenses = this.http.get<DriversLicenses[]>(this.ROOT_Url+'/driverslicenses')
    console.log(this.http.get<DriversLicenses[]>(this.ROOT_Url+'/driverslicenses'))
  }
  getMessages()
  {
    this.messages = this.http.get<Messages[]>(this.ROOT_Url+'/messages')
    console.log(this.http.get<Messages[]>(this.ROOT_Url+'/messages'))
  }
  getPosts()
  {
    this.posts = this.http.get(this.ROOT_Url0+'/posts')
  }
}
