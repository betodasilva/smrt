import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterInternComponent } from './chapter-intern.component';

describe('ChapterInternComponent', () => {
  let component: ChapterInternComponent;
  let fixture: ComponentFixture<ChapterInternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterInternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
