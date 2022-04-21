import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostbillingComponent } from './postbilling.component';

describe('PostbillingComponent', () => {
  let component: PostbillingComponent;
  let fixture: ComponentFixture<PostbillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostbillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostbillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
