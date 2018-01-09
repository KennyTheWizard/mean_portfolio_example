import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';
import { Player } from '../player';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit {

  username: string;
  questionList: Question[];
  answers: string[] = ['','','']
  constructor(private _questions:QuestionService, private _routes:Router) { }

  ngOnInit() {
    this._questions.clearResult();
    this._questions.getQuestions((questions)=>{
      this.questionList = questions;
      this.randQuestions();
      this.username = localStorage.currPlayer;
    })

  }

  randQuestions(){
    for(let i=0; i<this.questionList.length;i++){
      let randInd = Math.floor(Math.random()*this.questionList.length);
      let temp = this.questionList[randInd];
      this.questionList[randInd] = this.questionList[i];
      this.questionList[i] = temp;
    }
  }

  submitAnswers(){
    let score = 0;
    for(let i = 0; i < this.answers.length; i++){
      if (this.questionList[i].answer == this.answers[i]){
        score++;
      }
    }
    this._questions.saveResult(score);
    this._routes.navigate(['/']);
  }

  

}
