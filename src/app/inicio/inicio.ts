import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-inicio',
  styleUrl: './inicio.css',
  templateUrl: './inicio.html',
})

export class Inicio {
  protected readonly segundos = signal(0);

  constructor() {
    setInterval(() => this.segundos.update((s) => s + 1), 1000);
  }
}
