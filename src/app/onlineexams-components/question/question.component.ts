import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  currentItems= [
    {
    "questionno": 1,
    "question": "What is capital city of Andhra Pradesh",
    "choice1":"Vizag",
    "choice2":"Vijayanagaram",
    "choice3":"Tirupathi",
    "choice4":"Vijayawada",
  },{
    "questionno": 2,
    "question": "Who is cheif minister of Andhra Pradesh",
    "choice1":"Pawan Kalyan",
    "choice2":"Chandra Babu",
    "choice3":"YS Jagan",
    "choice4":"Sanjay",
  },{
    "questionno": 3,
    "question": "Which city is called as city of destiny in ap",
    "choice1":"Visakhapatnam",
    "choice2":"Nellore",
    "choice3":"Tirupathi",
    "choice4":"Vizianagaram",
  }];
  currentItem = {}
  listItem = ['Random','Random1','Random2','Random3','Random4']
  constructor() { }

  ngOnInit(): void {
    this.currentItem =  this.currentItems[0];
  }

  ngOnChanges(){
 
  }
  addItem(){
    this.currentItem = this.currentItems[Math.floor(Math.random() * this.currentItems.length)]
  }
}
