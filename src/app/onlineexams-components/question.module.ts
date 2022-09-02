import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionRoutingModule } from './question-routing.module';
import { QuestionComponent } from './question/question.component';
import { SharedModule } from 'src/app/shared.module';
import { QuestionViewComponent } from './question-view/question-view.component';
import { CoursesComponent } from './courses/courses.component';
// import {MatTableModule} from '@angular/material/table';
import { MaterialExampleModule } from '../material.module';
// import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [QuestionComponent, QuestionViewComponent, CoursesComponent],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    SharedModule,
    // MatTableModule,
    MaterialExampleModule,
     
  ],
  exports: []
})
export class QuestionModule { }
