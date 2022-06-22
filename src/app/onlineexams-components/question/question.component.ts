import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  currentItem = 'Sample';
  listItem = ['Random','Random1','Random2','Random3','Random4']
  constructor() { }

  ngOnInit(): void {
    this.currentItem = 'Sample1'
  }

  ngOnChanges(){
 
  }
  addItem(){
    this.currentItem = this.listItem[Math.floor(Math.random() * this.listItem.length)]
  }
}
