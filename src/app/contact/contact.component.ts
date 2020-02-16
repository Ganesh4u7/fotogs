import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  messageForm :FormGroup;

  constructor(private db :AngularFirestore) { }

  ngOnInit() {

    this.messageForm = new FormGroup({
      name : new FormControl(null),
      email: new FormControl(null),
      subject: new FormControl(null),
      message: new FormControl(null)
    })
  }


  onSendMessage(){
    let name = this.messageForm.value.name;
    let email = this.messageForm.value.email;
    let subject = this.messageForm.value.subject;
    let message = this.messageForm.value.message;
    let date = Date().toString().slice(0,24);

    this.db.collection('messages').add({name:name,email:email,subject:subject,message:message,date:date});

  }


}
