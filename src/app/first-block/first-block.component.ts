import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-block',
  templateUrl: './first-block.component.html',
  styleUrls: ['./first-block.component.css']
})
export class FirstBlockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scroll() {
    // document.querySelector('#about').scrollIntoView({ behavior: 'smooth', block: 'center' });
    var elmnt = document.getElementById("portfolio");
    elmnt.scrollIntoView({block:'start',behavior:'smooth'});
  }
}
