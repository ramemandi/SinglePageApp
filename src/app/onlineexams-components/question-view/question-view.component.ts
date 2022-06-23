import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-view',
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.css']
})
export class QuestionViewComponent implements OnInit {

  @Input() item :any = {};
  items: any[] = [];
  constructor() { }


  ngOnInit(): void {
    console.log(this.item, this.item.question); 
 

  }

  ngOnChanges(changes: any) {
    console.log(changes.prop);

    this.items.push(changes.prop);
    console.log(this.items);

    // changes.prop contains the old and the new value...
  }

}
