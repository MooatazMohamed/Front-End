import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPhone } from './about-phone';

describe('AboutPhone', () => {
  let component: AboutPhone;
  let fixture: ComponentFixture<AboutPhone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPhone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPhone);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
