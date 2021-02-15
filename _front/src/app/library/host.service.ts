import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HostService {
  private host:string = '';

  constructor() { }
  getHost(){
    return this.host;
  }
}
