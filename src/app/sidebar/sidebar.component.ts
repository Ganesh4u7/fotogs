import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  scroll() {
    // document.querySelector('#about').scrollIntoView({ behavior: 'smooth', block: 'center' });
    var elmnt = document.getElementById("footer");
    elmnt.scrollIntoView({block:'start',behavior:'smooth'});
  }

}
