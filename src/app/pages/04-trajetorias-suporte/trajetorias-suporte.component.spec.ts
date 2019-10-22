import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajetoriasSuporteComponent } from './trajetorias-suporte.component';

describe('TrajetoriasSuporteComponent', () => {
  let component: TrajetoriasSuporteComponent;
  let fixture: ComponentFixture<TrajetoriasSuporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrajetoriasSuporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajetoriasSuporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
