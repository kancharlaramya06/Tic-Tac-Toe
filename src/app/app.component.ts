import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import {GameComponent} from './game/game.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tic-tac-toe';
}
