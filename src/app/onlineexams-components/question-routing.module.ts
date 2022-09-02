import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoursesComponent } from "./courses/courses.component";
import { DurationComponent } from "./duration/duration.component";
import { QuestionComponent } from "./question/question.component";
DurationComponent

const childroutes: Routes = [
    { path: '', component: QuestionComponent },
    { path: 'course', component: CoursesComponent },
    { path: 'duration', component: DurationComponent }
]

@NgModule({
    imports: [RouterModule.forChild(childroutes)],
    exports: [RouterModule]
})

export class QuestionRoutingModule { }