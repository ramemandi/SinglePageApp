import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  title = 'SinglePageApp';
  subMenu : boolean =false;
  constructor() { }

  ngOnInit(): void {
  }

  showDropMenu(e:any) {
    // const classList = e.target.classList;
    // const classes = e.target.className;
    // console.log(classList.DOMTokenList);
    // console.log(classes);
    this.subMenu = !this.subMenu;
    
    // classList.includes('dropdown-container') ? classList.remove('dropdown-container') : classList.add('dropdown-container-show');
  }

}
