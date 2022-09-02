import { Component, OnInit } from '@angular/core';
import { Router,RouterLink, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'SinglePageApp';
  subMenu : boolean =false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  showDropMenu(e:any) {
    this.subMenu = !this.subMenu;
  }
  pageNavition(routeName:String='',id:number=0){
    this.router.navigate([routeName])
  }
}
