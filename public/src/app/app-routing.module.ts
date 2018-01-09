import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { PlayGameComponent } from './play-game/play-game.component';
import { GameContainerComponent } from './game-container/game-container.component';

const routes: Routes = [
  { path: '', component: GameContainerComponent, children: [
    { path: '', component: HomepageComponent },
    { path: 'addquestion', component: NewQuestionComponent },
    { path: 'letsplay', component: PlayGameComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
