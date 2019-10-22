import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajetoriasEadComponent } from './trajetorias-ead.component';

describe('TrajetoriasEadComponent', () => {
  let component: TrajetoriasEadComponent;
  let fixture: ComponentFixture<TrajetoriasEadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrajetoriasEadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajetoriasEadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
