import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../question';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  newQuestion: Question = new Question();
  constructor(private _questions:QuestionService,private _router:Router) { }

  ngOnInit() {
    this._questions.clearResult();
  }

  saveQuestion(){
    this._questions.addQuestion(this.newQuestion);
    this._router.navigate(['/']);
  }
}
