import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoursesComponent } from "./courses/courses.component";
import { QuestionComponent } from "./question/question.component";


const childroutes: Routes = [
    { path: '', component: QuestionComponent },
    { path: 'course', component: CoursesComponent }
]

@NgModule({
    imports: [RouterModule.forChild(childroutes)],
    exports: [RouterModule]
})

export class QuestionRoutingModule { }