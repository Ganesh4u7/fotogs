import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fotogs';
  prev: string = 'first-block1';

  scroll( category:string,category1:string) {

    // document.querySelector('#about').scrollIntoView({ behavior: 'smooth', block: 'center' });
    var elmnt = document.getElementById(category);
    elmnt.scrollIntoView({block:'start',behavior:'smooth'});


    document.getElementById(this.prev).classList.remove('active');
    this.prev = category1;
    document.getElementById(category1).classList.add('active');
  }
}
