import { Component, signal } from '@angular/core';
import { Nav } from './components/nav/nav';
import { Home } from './components/home/home';
import { Products } from './components/products/products';
import { Cards } from './components/cards/cards';
import { RouterOutlet } from '@angular/router';
import { About } from './components/about/about';

@Component({
  selector: 'app-root',
  imports: [Nav , RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('session-5');
}
