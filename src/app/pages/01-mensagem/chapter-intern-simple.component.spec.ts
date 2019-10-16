import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterInternSimpleComponentm } from './chapter-intern-simple.component';

describe('ChapterInternSimpleComponentm', () => {
  let component: ChapterInternSimpleComponentm;
  let fixture: ComponentFixture<ChapterInternSimpleComponentm>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterInternSimpleComponentm ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterInternSimpleComponentm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
