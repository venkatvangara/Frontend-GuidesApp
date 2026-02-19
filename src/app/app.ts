import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Guideslist } from './guideslist/guideslist';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Guideslist],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('GuidesApp');
}
