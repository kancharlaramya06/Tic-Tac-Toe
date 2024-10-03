import { Component } from '@angular/core';
import {NgIf,NgFor} from '@angular/common';
@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  squares :(string | null)[]=Array(9).fill(null);
  xIsNext: boolean = true;
  winner : string | null = null;

  getPlayer(): string{
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx:number):void{
    if(!this.squares[idx] && !this.winner){
      this.squares[idx]=this.getPlayer();
      this.xIsNext=!this.xIsNext;
      this.winner=this.calculateWinner();
    }
  }
  calculateWinner(): string | null{
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    for(let i=0;i < lines.length; i++){
      const [a,b,c] = lines[i];
      if(this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]){
        return this.squares[a];
      }
    }
    return null;

  }
  resetGame(): void{
    this.squares = Array(9).fill(null);
    this.xIsNext=true;
    this.winner = null;
  }

}
