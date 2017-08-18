import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedFlightInfoComponent } from './selected-flight-info.component';

describe('SelectedFlightInfoComponent', () => {
  let component: SelectedFlightInfoComponent;
  let fixture: ComponentFixture<SelectedFlightInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedFlightInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedFlightInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
