import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Player } from './player';
import { Question } from './question';
import { BehaviorSubject } from 'rxjs';

import 'rxjs'
import 'rxjs/add/operator/map'

@Injectable()
export class QuestionService {

  currPlayer: Player;
  questionList: Question[];
  playerList: Player[];
  lastResultPlayer: Player;
  _lastResultSubject = new BehaviorSubject(null);
  lastResultObs = this._lastResultSubject.asObservable();

  constructor(private _http: HttpClient) { }

  setCurrPlayer(username: string){
    this.currPlayer = new Player;
    this.currPlayer.username = username;
    localStorage.currPlayer = username;
    console.log(this.currPlayer);
  }

  logoutPlayer(){
    this.currPlayer = null;
    localStorage.clear;
  }

  saveResult(score:number){
    let scoredPlayer = new Player();
    console.log(localStorage);
    scoredPlayer.username = localStorage.currPlayer;
    scoredPlayer.score = score;
    this._http.post('/players', scoredPlayer).subscribe();
    this.lastResultPlayer = scoredPlayer;
    this._lastResultSubject.next(this.lastResultPlayer);
  }

  clearResult(){
    this._lastResultSubject.next(null);
  }
  getPlayers(callback){
    this._http.get('/players').map(resp=><Player[]>resp).subscribe((resp)=>{
      this.playerList = resp;
      callback(resp);
    });
  }

  addQuestion(question:Question){
    this._http.post('/questions', question).subscribe();
  }

  getQuestions(callback){
    this._http.get('questions').map(resp=><Question[]>resp).subscribe((resp)=>{
      this.questionList = resp;
      callback(resp);
    })
  }
}
