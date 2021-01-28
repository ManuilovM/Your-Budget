import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HostService {
  private host:string = 'http://localhost:3000/';

  constructor() { }
  getHost(){
    return this.host;
  }
}
