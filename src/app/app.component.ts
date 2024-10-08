import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CallbacksService } from './services/callbacks.service';
import { PromisesService } from './services/promises.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule],
  template: `
   <div>
      <h1>Ejemplo de Callback en Angular</h1>
      <p-button (onClick)="iniciarOperacion()"  label="Iniciar Operación" icon="pi pi-check" [loading]="bcall" ></p-button>
      <p>{{ mensaje }}</p>
    </div>
    <div>
      <h1>Ejemplo de Promesa en Angular</h1>
      <p-button (click)="hacerPromesa()" label="Iniciar Operación" icon="pi pi-check" [loading]="bpromise" ></p-button>
      <p>{{ promesa }}</p>
    </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  mensaje = '';
  promesa = '';
  title = 'libraries';
  constructor(
    private callbackService : CallbacksService, 
    private promiseService: PromisesService
  ){}
  bcall = false;
  iniciarOperacion(): void {
    this.bcall = true
    this.callbackService.doCallback((resultado: string) => {
      this.mensaje = resultado;
      this.bcall = false;
    });
  }

  bpromise = false;
  hacerPromesa(){
    this.bpromise= true;
    this.promiseService.doPromise()
    .then((res: string) => {
      this.promesa = res
      this.bpromise = false
    })
  }


}
