import { Component, OnInit } from '@angular/core';
import { CiscoroomsService } from './ciscorooms.service';
 
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(public cr:CiscoroomsService) { }

  ngOnInit(): void {
     
  }

}
