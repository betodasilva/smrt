import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public show : boolean = false;

  constructor() { }

  ngOnInit() {
  }
  
  toggle($event) {
    this.show = !this.show;
    console.log($event);
  }
}