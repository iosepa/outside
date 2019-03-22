import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeTrailsViewComponent } from './bike-trails-view.component';

describe('BikeTrailsViewComponent', () => {
  let component: BikeTrailsViewComponent;
  let fixture: ComponentFixture<BikeTrailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeTrailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeTrailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
