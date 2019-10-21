import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajetoriasSelecaoComponent } from './trajetorias-selecao.component';

describe('TrajetoriasSelecaoComponent', () => {
  let component: TrajetoriasSelecaoComponent;
  let fixture: ComponentFixture<TrajetoriasSelecaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrajetoriasSelecaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajetoriasSelecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
