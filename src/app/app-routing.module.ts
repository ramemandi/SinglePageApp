import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'dashboard', component: BodyComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'clients', component: ClientsComponent, pathMatch: 'full' },
  { path: 'contact/:id', component: ContactsComponent, pathMatch: 'full' },
  { path: 'question', loadChildren: './onlineexams-components/question.module#QuestionModule' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
