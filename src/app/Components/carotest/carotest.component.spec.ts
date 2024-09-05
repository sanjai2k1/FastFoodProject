import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarotestComponent } from './carotest.component';

describe('CarotestComponent', () => {
  let component: CarotestComponent;
  let fixture: ComponentFixture<CarotestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarotestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarotestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
