import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajetoriasInternacionalComponent } from './trajetorias-internacional.component';

describe('TrajetoriasInternacionalComponent', () => {
  let component: TrajetoriasInternacionalComponent;
  let fixture: ComponentFixture<TrajetoriasInternacionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrajetoriasInternacionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajetoriasInternacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
