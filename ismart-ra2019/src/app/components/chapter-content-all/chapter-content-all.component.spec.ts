import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterContentAllComponent } from './chapter-content-all.component';

describe('ChapterContentAllComponent', () => {
  let component: ChapterContentAllComponent;
  let fixture: ComponentFixture<ChapterContentAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterContentAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterContentAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
