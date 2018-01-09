import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Player } from '../player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  playerListDisplay:Player[];
  searchString: string;
  lastGameResult: Player = null;
  playerList:Player[];
  constructor(private _questions:QuestionService, private _router:Router) { }

  ngOnInit() {
    this._questions.getPlayers((players)=>{
      this.playerList = players;
      this.playerListDisplay = this.playerList;
      this.sortPlayers();
    })

    this._questions.lastResultObs.subscribe((resp)=>{
      this.lastGameResult = resp;
    })

    // this._router.events.subscribe((event)=>{
    //   console.log(event.toString());
    //   if (event.toString() == "NavigationStart"){
    //     this._questions.clearResult();
    //   }
    // })
  }
  searchSet(){
    console.log(this.searchString.includes('%'), this.searchString);
    if (this.searchString == ''){
      this.playerListDisplay = this.playerList;
    } else if(this.searchString.includes('%')){
      let percentScore = Number(this.searchString.replace('%', ''))
      let score = Math.round(percentScore / 100 * 3 );
      console.log(score);
      this.playerListDisplay = [];
      for(let i=0; i< this.playerList.length; i++){
        if (this.playerList[i].score == score){
          this.playerListDisplay.push(this.playerList[i])
        }
      }
    }else if (isNaN(Number(this.searchString))){
      this.playerListDisplay = [];
      for(let i=0; i< this.playerList.length; i++){
        if (this.playerList[i].username.includes(this.searchString)){
          this.playerListDisplay.push(this.playerList[i])
        }
      }
    } else {
      this.playerListDisplay = [];
      for(let i=0; i< this.playerList.length; i++){
        if (this.playerList[i].score == Number(this.searchString)){
          this.playerListDisplay.push(this.playerList[i])
        }
      }
    }
    this.sortPlayers();
  }

  sortPlayers(){
    this.playerListDisplay.sort((a,b)=> b.score - a.score);
  }
  
}
