import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingCallsComponent } from './incoming-calls.component';

describe('IncomingCallsComponent', () => {
  let component: IncomingCallsComponent;
  let fixture: ComponentFixture<IncomingCallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomingCallsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
