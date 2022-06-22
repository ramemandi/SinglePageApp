import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { QuestionComponent } from "./question/question.component";


const childroutes: Routes = [
    { path: '', component: QuestionComponent  }
]

@NgModule({
    imports: [RouterModule.forChild(childroutes)],
    exports: [RouterModule]
})

export class QuestionRoutingModule { }