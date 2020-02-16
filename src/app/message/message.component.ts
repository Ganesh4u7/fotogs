import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  messages:any = [];
  prev = null;
  bol = false;


  constructor( private db: AngularFirestore) { }

  ngOnInit() {
this.loadMessages();
  }
  loadMessages(){
    const snapsho =  this.db.collection('messages').get().toPromise().then(snapshot => {
      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }

      snapshot.forEach(doc => {
        let name = doc.data().name;
        let email= doc.data().email;
        let subject = doc.data().subject;
        let message = doc.data().message;
        let date = doc.data().date;

        this.messages.push({name: name, email : email, subject: subject,message:message,date:date,docId:doc.id});
        console.log('saved');
      });
    })
      .catch(err => {
        console.log('Error getting documents', err);
      });
  this.messages =  this.sortData;

  }



  showMessage(i){
    if(this.prev == null)
    {

      document.getElementsByClassName('content')[i]['style'].display = 'block';

      this.prev=i;
      this.bol = true;

    }
    else if(this.prev != null && this.prev == i && this.bol==true){

      document.getElementsByClassName('content')[i]['style'].display = 'none';
      this.bol = false;

    }
    else if(this.prev != null && this.prev == i && this.bol==false){

      document.getElementsByClassName('content')[i]['style'].display = 'block';
      this.bol = true;

    }
    else if(this.prev != null && this.prev != i ){

      document.getElementsByClassName('content')[i]['style'].display = 'block';
      document.getElementsByClassName('content')[this.prev]['style'].display = 'none';
      this.bol = true;
      this.prev = i;

    }

  }

  onDelete(i){
    var r = confirm('are you sure you want to delete ?');
    if(r ==true) {
      let id = this.messages[i].docId;
      this.db.collection('messages').doc(`${this.messages[i].docId}`).delete().then(function () {
        // File deleted successfully
        console.log('deleted: ' + id);
        document.getElementsByClassName('content')[i]['style'].display = 'none';
        this.bol = false;
      }).catch(function (error) {
        console.log('error deleting the message , please try again');
      });
      this.messages.splice(i,1);
    }
  }

  get sortData() {
    return this.messages.sort((a, b) => {
      return <any>new Date(b.date) - <any>new Date(a.date);
    });
  }

}
