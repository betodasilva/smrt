import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajetoriasPraticaComponent } from './trajetorias-pratica.component';

describe('TrajetoriasPraticaComponent', () => {
  let component: TrajetoriasPraticaComponent;
  let fixture: ComponentFixture<TrajetoriasPraticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrajetoriasPraticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajetoriasPraticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
