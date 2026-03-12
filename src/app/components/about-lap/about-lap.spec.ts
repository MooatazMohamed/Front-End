import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLap } from './about-lap';

describe('AboutLap', () => {
  let component: AboutLap;
  let fixture: ComponentFixture<AboutLap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutLap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutLap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
