import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatContainerComponent } from './float-container.component';

describe('FloatContainerComponent', () => {
  let component: FloatContainerComponent;
  let fixture: ComponentFixture<FloatContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
