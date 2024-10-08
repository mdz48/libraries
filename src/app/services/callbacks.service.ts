import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CallbacksService {

  constructor() { }

  doCallback(callback: (result:string)=> void): void {
    setTimeout(() => {
      const result = 'Callback';
      callback(result); 
    }, 2000); 
  } 
}
