import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarItemsComponent } from './car-items.component';

describe('CarItemsComponent', () => {
  let component: CarItemsComponent;
  let fixture: ComponentFixture<CarItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
