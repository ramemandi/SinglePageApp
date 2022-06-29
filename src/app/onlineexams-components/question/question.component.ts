import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  currentItemss = [
    {
      "questionno": 1,
      "question": "What is capital city of Andhra Pradesh",
      "choice1": "Vizag",
      "choice2": "Vijayanagaram",
      "choice3": "Tirupathi",
      "choice4": "Vijayawada",
    }, {
      "questionno": 2,
      "question": "Who is cheif minister of Andhra Pradesh",
      "choice1": "Pawan Kalyan",
      "choice2": "Chandra Babu",
      "choice3": "YS Jagan",
      "choice4": "Sanjay",
    }, {
      "questionno": 3,
      "question": "Which city is called as city of destiny in ap",
      "choice1": "Visakhapatnam",
      "choice2": "Nellore",
      "choice3": "Tirupathi",
      "choice4": "Vizianagaram",
    }, {
      "questionno": 4,
      "question": "Which city is called as city of destiny in ap",
      "choice1": "Visakhapatnam",
      "choice2": "Nellore",
      "choice3": "Tirupathi",
      "choice4": "Vizianagaram",
    }, {
      "questionno": 5,
      "question": "Which city is called as city of destiny in ap",
      "choice1": "Visakhapatnam",
      "choice2": "Nellore",
      "choice3": "Tirupathi",
      "choice4": "Vizianagaram",
    }, {
      "questionno": 6,
      "question": "Which city is called as city of destiny in ap",
      "choice1": "Visakhapatnam",
      "choice2": "Nellore",
      "choice3": "Tirupathi",
      "choice4": "Vizianagaram",
    }, {
      "questionno": 7,
      "question": "Which city is called as city of destiny in ap",
      "choice1": "Visakhapatnam",
      "choice2": "Nellore",
      "choice3": "Tirupathi",
      "choice4": "Vizianagaram",
    }, {
      "questionno": 8,
      "question": "Which city is called as city of destiny in ap",
      "choice1": "Visakhapatnam",
      "choice2": "Nellore",
      "choice3": "Tirupathi",
      "choice4": "Vizianagaram",
    }, {
      "questionno": 9,
      "question": "Which city is called as city of destiny in ap",
      "choice1": "Visakhapatnam",
      "choice2": "Nellore",
      "choice3": "Tirupathi",
      "choice4": "Vizianagaram",
    }, {
      "questionno": 10,
      "question": "Which city is called as city of destiny in ap",
      "choice1": "Visakhapatnam",
      "choice2": "Nellore",
      "choice3": "Tirupathi",
      "choice4": "Vizianagaram",
    }, {
      "questionno": 11,
      "question": "Which city is called as city of destiny in ap",
      "choice1": "Visakhapatnam",
      "choice2": "Nellore",
      "choice3": "Tirupathi",
      "choice4": "Vizianagaram",
    }, {
      "questionno": 12,
      "question": "Which city is called as city of destiny in ap",
      "choice1": "Visakhapatnam",
      "choice2": "Nellore",
      "choice3": "Tirupathi",
      "choice4": "Vizianagaram",
    }, {
      "questionno": 13,
      "question": "Which city is called as city of destiny in ap",
      "choice1": "Visakhapatnam",
      "choice2": "Nellore",
      "choice3": "Tirupathi",
      "choice4": "Vizianagaram",
    }, {
      "questionno": 14,
      "question": "Which city is called as city of destiny in ap",
      "choice1": "Visakhapatnam",
      "choice2": "Nellore",
      "choice3": "Tirupathi",
      "choice4": "Vizianagaram",
    }, {
      "questionno": 15,
      "question": "Which city is called as city of destiny in ap",
      "choice1": "Visakhapatnam",
      "choice2": "Nellore",
      "choice3": "Tirupathi",
      "choice4": "Vizianagaram",
    }];
  currentItem: any = {}
  listItem = ['Random', 'Random1', 'Random2', 'Random3', 'Random4']
  lists: any = [];
  activeBtn: number = -1;
  currentItems: any = [];
  activeTab: string = 'tab1';
  totQuestions: any = [];
  constructor(public QS: QuestionService) {

  }

  ngOnInit(): void {
    this.QS.getQuestions().subscribe((result) => {
      // this.currentItems =  result;
      this.totQuestions = result;
      this.currentItems = this.totQuestions.filter((item: { type: string; }) => item.type === 'eng');;
      this.currentItem = this.currentItems[0];
    });
    this.lists = Array.from({ length: 25 }, (v, k) => (k))
    console.log(this.lists, 'dddd');

  }

  ngOnChanges() {

  }
  nextOrPrevious(param: string) {
    // this.currentItem = this.currentItems[Math.floor(Math.random() * this.currentItems.length)]
    if (param === 'previous') {
      let itemIndex = this.currentItems.findIndex((item: any) => item.questionno === this.currentItem.questionno);
      if (itemIndex > -1) {
        this.currentItem = this.currentItems[itemIndex - 1];
        this.activeBtn = itemIndex - 1;
      }
    } else {
      let itemIndex = this.currentItems.findIndex((item: any) => item.questionno === this.currentItem.questionno);
      if (itemIndex > -1) {
        this.currentItem = this.currentItems[itemIndex + 1];
        this.activeBtn = itemIndex + 1;
      }
    }
  }
  getSelectedQuestion(list: number, event: any) {
    console.log(event, 'event');
    this.currentItem = this.currentItems[list];
    if (event.target.value) {
      this.activeBtn = event.target.value;
    }
  }

  markAsRead(currentItem: any) {

  }
  activateTab(param: string) {
    console.log(param, 'tst');

    this.activeTab = param;
    switch (param) {
      case 'tab1':
        this.currentItems = this.totQuestions.filter((item: { type: string; }) => item.type === 'eng');
        this.currentItem = this.currentItems[0];
        break;
      case 'tab2':
        this.currentItems = this.totQuestions.filter((item: { type: string; }) => item.type === 'gk');
        this.currentItem = this.currentItems[0];
        break;
      case 'tab3':
        this.currentItems = this.totQuestions.filter((item: { type: string; }) => item.type === 'reasoning');
        this.currentItem = this.currentItems[0];
        break;
      case 'tab4':
        this.currentItems = this.totQuestions.filter((item: { type: string; }) => item.type === 'mat');
        this.currentItem = this.currentItems[0];
        break;
      default: this.currentItems = this.totQuestions.filter((item: { type: string; }) => item.type === 'eng');
        this.currentItem = this.currentItems[0];
        break;
    }
  }
}
