import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from './shared.module';
import { QuestionModule } from './onlineexams-components/question.module';
 
@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    FooterComponent,
    BodyComponent,
    LoginComponent,
    ServicesComponent,
    ClientsComponent,
    ContactsComponent,
    PageNotFoundComponent,
 
    //QuestionViewComponent    // QuestionComponent
  ],
  imports: [
     
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    QuestionModule
  ],
  exports:[
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
