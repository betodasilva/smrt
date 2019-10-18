import { Component, OnInit, Inject } from '@angular/core';
import { WINDOW } from 'src/app/services/window.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
  private currentUrl: string;
  constructor(@Inject(WINDOW) private window: Window,) { }

  ngOnInit() {
    this.currentUrl = this.window.location.href;
  }

}
