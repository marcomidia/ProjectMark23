import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStepComponent } from './top-step.component';

describe('TopStepComponent', () => {
  let component: TopStepComponent;
  let fixture: ComponentFixture<TopStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopStepComponent]
    });
    fixture = TestBed.createComponent(TopStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
