import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterInternSimpleComponent } from './chapter-intern-simple.component';

describe('ChapterInternSimpleComponent', () => {
  let component: ChapterInternSimpleComponent;
  let fixture: ComponentFixture<ChapterInternSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterInternSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterInternSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
