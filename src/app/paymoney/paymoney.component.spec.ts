import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymoneyComponent } from './paymoney.component';

describe('PaymoneyComponent', () => {
  let component: PaymoneyComponent;
  let fixture: ComponentFixture<PaymoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymoneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
