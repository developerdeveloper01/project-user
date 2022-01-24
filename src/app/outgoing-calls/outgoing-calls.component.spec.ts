import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutgoingCallsComponent } from './outgoing-calls.component';

describe('OutgoingCallsComponent', () => {
  let component: OutgoingCallsComponent;
  let fixture: ComponentFixture<OutgoingCallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutgoingCallsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutgoingCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
