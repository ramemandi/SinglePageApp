import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionRoutingModule } from './question-routing.module';
import { QuestionComponent } from './question/question.component';
import { SharedModule } from 'src/app/shared.module';
import { QuestionViewComponent } from './question-view/question-view.component';
import { CoursesComponent } from './courses/courses.component';
import { MaterialExampleModule } from '../material.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DurationComponent } from './duration/duration.component';
 
@NgModule({
  declarations: [QuestionComponent, QuestionViewComponent, CoursesComponent, DurationComponent],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    SharedModule,
    MaterialExampleModule,
    FormsModule,ReactiveFormsModule
  ],
  exports: []
})
export class QuestionModule { }
