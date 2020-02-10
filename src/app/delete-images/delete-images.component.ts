import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';


import * as firebase from 'firebase';



@Component({
  selector: 'app-delete-images',
  templateUrl: './delete-images.component.html',
  styleUrls: ['./delete-images.component.css']
})
export class DeleteImagesComponent implements OnInit {

 data:any = [{}];

 str: String =null;

  constructor(private db: AngularFirestore, private storage: AngularFireStorage) { }

  ngOnInit() {
  }
loadImages(category: string) {
  this.str = category;
    console.log(category);
this.data = [];
   const snapsho =  this.db.collection(`${category}`).get().toPromise().then(snapshot => {
     if (snapshot.empty) {
       console.log('No matching documents.');
       return;
     }

     snapshot.forEach(doc => {
       const url = doc.data().downloadURL;
       this.data.push({url: url, docId : doc.id, path: doc.data().path});


     });
   })
     .catch(err => {
       console.log('Error getting documents', err);
     });

}

  ChangingValue(category:string){
    this.str = category;
  }


  onDelete(index: number) {
    var r = confirm('are you sure you want to delete ?');
    if (r == true) {
      const id = this.data[index].docId;
      const path = this.data[index].path;
      const storageRef = firebase.storage().ref();
      this.db.collection(`${this.str}`).doc(`${id}`).delete().then(function () {
        // File deleted successfully
        console.log('deleted');
      }).catch(function (error) {
        // Uh-oh, an error occurred!
      });
      const desertRef = storageRef.child(`${path}`);

// Delete the file
      desertRef.delete().then(function () {
        // File deleted successfully
        console.log('deleted');
      }).catch(function (error) {
        // Uh-oh, an error occurred!
      });
      this.data.splice(index, 1);

    }

  }

}
