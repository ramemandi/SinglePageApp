import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CiscoroomsService } from './ciscorooms.service';
 

import { QuestionService } from '../onlineexams-components/question/question.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  selectedRoomData: any;
  ciscoRooms: any;
  rooms: Array<any> = [];
  unique: Array<any> = [];
 
  constructor(public QS: QuestionService) { }
  
  ngOnInit(): void {
    this.QS.getCiscoRoomsData().subscribe((result) => {
      // console.log(result,'RESULT');
      this.ciscoRooms = result;
      //  this.rooms  = [...new Set(this.ciscoRooms.map((res: { msgData: { ciscoRoomName: any;roomId:any }[] }) => (res.msgData[0]?.ciscoRoomName,res.msgData[0].roomId)))];
      //   console.log(this.rooms,'unique');
      let array = (this.ciscoRooms.map((res: { msgData: { ciscoRoomName: any; roomId: any }[] }) => ({ "room": res.msgData[0]?.ciscoRoomName, "roomId": res.msgData[0].roomId })));
      this.unique = Array.from(new Set(array.map(JSON.stringify)));
      console.log(this.unique, 123455);
      this.unique.forEach((room) => {
        this.rooms.push(JSON.parse(room))
      })

      console.log(this.rooms, 1234);

    })
  }

  changeTheme(color: string, evnt: Event) {
    console.log(color);
    console.log(evnt);

  }

  getRoomDatabyId(roomId: any) {
    console.log(roomId, 'this.roomId');

    this.selectedRoomData = this.ciscoRooms.filter((ele: any) =>
      ele.msgData[0].roomId === roomId).map((res:{msgData:{files:any,personEmail:string,personId:string,text:string}[]})=>({"files": res.msgData[0].files,"personEmail":res.msgData[0].personEmail,"personId":res.msgData[0].personId,"text":res.msgData[0].text}));
    console.log(this.selectedRoomData, 'this.selecteRoomData');
     
  }

}
