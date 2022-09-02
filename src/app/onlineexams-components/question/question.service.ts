import { Injectable } from '@angular/core';
// import question from '../../../assets/json-question.json';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})

export class QuestionService {
  questions : any;
  constructor(private httpClient: HttpClient) { 
    // this.getQuestions();
  }

    getQuestions(){
      
     return this.httpClient.get('../../../assets/json-question.json').pipe();
    
      // let questions =   fetch('../../../assets/json-question.json').then((x)=>{
    //  x.json();
    // }).catch((e)=>e);
    // console.log(questions,'222222');

    // return questions;
      
  }

  getCiscoRoomsData(){
    return this.httpClient.get('../../../assets/ciscorooms.json').pipe();

  }
  //  getQuestions():any{
  //   let questions =  fetch('../../../assets/json-question.json')
  //   return questions;
   
    
  // }

}
