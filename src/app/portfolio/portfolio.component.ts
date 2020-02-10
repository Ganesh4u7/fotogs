import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  data:any = [{}];
  items: any;
  showSpinner: boolean = true;
  loadedImages = 0;

  str: string = null;
  prev: string = 'portrait';

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.items = this.loadImages('portrait');
  }
  loadImages(category: string) {
    this.showSpinner = true;
    this.loadedImages = 0;

    setTimeout( () => {

      this.showSpinner = false;
      console.log(this.data);
    },2500);

    document.getElementById(this.prev).classList.remove('active');
    this.prev =category;
  document.getElementById(category).classList.add('active');




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
  imagesLoaded(){
    var leng = this.data.length;
    this.loadedImages += 1;
    console.log(this.loadedImages ,leng);
    if(this.loadedImages == leng){
      this.showSpinner = false;
    }
  }

}

