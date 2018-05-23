import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  rootURL = '';

  getConfig() {
    return this.http.get(this.rootURL + '/shelf');
  }

}

