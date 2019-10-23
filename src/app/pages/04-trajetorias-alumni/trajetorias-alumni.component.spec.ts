import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajetoriasAlumniComponent } from './trajetorias-alumni.component';

describe('TrajetoriasAlumniComponent', () => {
  let component: TrajetoriasAlumniComponent;
  let fixture: ComponentFixture<TrajetoriasAlumniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrajetoriasAlumniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajetoriasAlumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
