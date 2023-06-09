import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit{
  
id:number;
room:Room;
submitted = false;


constructor(private route: ActivatedRoute, private router: Router, private roomService:RoomService){
  
}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
