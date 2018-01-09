import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Player } from '../player';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.css']
})
export class GameContainerComponent implements OnInit {

  constructor(private _questions:QuestionService) { }

  ngOnInit() {

    if (!('currPlayer' in localStorage)){
      this.setPlayer();
    } else {
      this._questions.setCurrPlayer(localStorage.currPlayer);
    }
  }

  setPlayer(){
    let playerName = window.prompt("Enter a username for the Player.")
    this._questions.setCurrPlayer(playerName);

  }

  logout(){
    this._questions.logoutPlayer();
    this.setPlayer();
  }
}
