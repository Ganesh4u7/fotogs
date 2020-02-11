import { Component,ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent  {

  isHovering: boolean;

  files: File[] = [];
  str : String ;

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    console.log(this.str);
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }
  ChangingValue(category:string){
    this.str = category;
  }
}
