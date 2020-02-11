import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-mobile',
  templateUrl: './sidebar-mobile.component.html',
  styleUrls: ['./sidebar-mobile.component.css']
})
export class SidebarMobileComponent implements OnInit {
prev: string = 'first-block2';
  constructor() { }

  ngOnInit() {
  }

  scroll(category : string, category1 : string) {

    // document.querySelector('#about').scrollIntoView({ behavior: 'smooth', block: 'center' });
    var elmnt = document.getElementById(category);
    elmnt.scrollIntoView({block:'start',behavior:'smooth'});

    document.getElementById(this.prev).classList.remove('active');
    this.prev = category1;
    document.getElementById(category1).classList.add('active');
  }

}
