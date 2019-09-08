import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent implements OnInit {

  constructor() { }

  // botMessage = {
  //   type: 'bot',
  //   message: ''
  // }
  // userMEssage = {
  //   type: 'user',
  //   message: ''
  // }


  allMessages: string[] = [];

  userMessages: string[] = [];

  ngOnInit() {
  }

  handleUserMesage(message) {
    console.log('Got user message ', message);
    // this.userMessages.push(message);
  
  }

}
