import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PlayGameComponent } from './play-game/play-game.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { QuestionService } from './question.service';
import { HttpClientModule } from '@angular/common/http';
import { GameContainerComponent } from './game-container/game-container.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PlayGameComponent,
    NewQuestionComponent,
    GameContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
