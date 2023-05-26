import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatspageComponent } from './statspage.component';

describe('StatspageComponent', () => {
  let component: StatspageComponent;
  let fixture: ComponentFixture<StatspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
