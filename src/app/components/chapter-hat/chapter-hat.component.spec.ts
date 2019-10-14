import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterHatComponent } from './chapter-hat.component';

describe('ChapterHatComponent', () => {
  let component: ChapterHatComponent;
  let fixture: ComponentFixture<ChapterHatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterHatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterHatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
