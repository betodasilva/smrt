import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajetoriasUniversidadeComponent } from './trajetorias-universidade.component';

describe('TrajetoriasUniversidadeComponent', () => {
  let component: TrajetoriasUniversidadeComponent;
  let fixture: ComponentFixture<TrajetoriasUniversidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrajetoriasUniversidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajetoriasUniversidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
