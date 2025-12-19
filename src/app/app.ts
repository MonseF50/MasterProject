import { Component, effect, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MasterProject');
  count: WritableSignal<number> = signal(0)
  constructor() {
    effect(() => {
      console.log('the new count is =' + this.count())
    })
  }
  changeNumber(): void {
    this.count.set(5)
  }
}
