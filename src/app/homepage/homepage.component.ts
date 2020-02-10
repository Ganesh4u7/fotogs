import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{

  title = 'Fotogs';
  prev: string = 'first-block1';
ngOnInit() {

  setTimeout(() => {
      document.getElementById('preload-video').style.display = 'none';
      document.getElementById('main-container').style.display = 'block';
    }, 4500
  );
 }

  scroll( category:string,category1:string) {

    // document.querySelector('#about').scrollIntoView({ behavior: 'smooth', block: 'center' });
    var elmnt = document.getElementById(category);
    elmnt.scrollIntoView({block:'start',behavior:'smooth'});


    document.getElementById(this.prev).classList.remove('active');
    this.prev = category1;
    document.getElementById(category1).classList.add('active');
  }


}
