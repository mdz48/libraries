import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromisesService {

  constructor() { }

  doPromise(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = 'Promisa en 2000 milisegundos';
        resolve(result); 
      }, 2000); 
    })
  }
}
