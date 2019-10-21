import { Component, OnInit, Input, Inject, HostListener } from '@angular/core';
import { WINDOW } from 'src/app/services/window.service';
import { Subject } from 'rxjs';
import { throttleTime } from 'rxjs/operators';


interface chapterData {
  image,
  imageMobile,
  title,
  subtitle
}

@Component({
  selector: 'app-chapter-hat',
  templateUrl: './chapter-hat.component.html',
  styleUrls: ['./chapter-hat.component.scss']
})
export class ChapterHatComponent implements OnInit {

  @Input('data') data: chapterData;
  private windowWidth: any;
  private resize$: Subject<any> = new Subject();

  constructor(@Inject(WINDOW) private window: Window,) { }

  ngOnInit() {
    this.resize$
      .asObservable()
      .pipe(
        throttleTime(500)
      )
      .subscribe( innerWidth => {
        this.windowWidth = innerWidth
      });
  }

  get backgroundImage(){
    let styles = {}
    const isMobile = this.window.innerWidth < 768;
    if ( isMobile ) {
      styles = {
        'background-image': `url(${this.data.imageMobile})`
      }
    } else {
      styles = {
        'background-image': `url(${this.data.image})`
      }
    }

    return styles;
  }

  @HostListener('window:resize', ['$event.target'])
  onResize(target) {
    this.resize$.next(target.innerWidth);
  }


}
