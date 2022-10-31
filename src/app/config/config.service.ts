import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Config} from "./Config";

@Injectable()
export class configService {
  constructor(private http: HttpClient) { }
  configUrl = 'assets/config.json';

  getConfig() {
    return this.http.get<Config>(this.configUrl);
  }
}
