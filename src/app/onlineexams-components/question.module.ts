import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionRoutingModule } from './question-routing.module';
import { QuestionComponent } from './question/question.component';
import { SharedModule } from 'src/app/shared.module';
import { QuestionViewComponent } from './question-view/question-view.component';



@NgModule({
  declarations: [QuestionComponent, QuestionViewComponent],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    SharedModule
  ],
  exports: []
})
export class QuestionModule { }
