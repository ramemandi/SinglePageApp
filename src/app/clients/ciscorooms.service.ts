import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
import * as ciscoRooms from '../../assets/ciscoRooms.json';
interface EMPLOYEE {
  _id: string;
  pmId: string;
  poId: string;
  poName: string;
  isGuestroom: Boolean;
  msgData: Array<MsgData>;
}
interface MsgData {
  _id: string;
  roomId: string;
  roomType: string;
  text: string;
  files: [];
  personId: string;
  personEmail: string;
  created: string;
}

 
@Injectable({
  providedIn: 'root'
})
export class CiscoroomsService {
  Employees = ciscoRooms;
  constructor() { 
    console.log(this.Employees,'TEEE');
  }
 
}
