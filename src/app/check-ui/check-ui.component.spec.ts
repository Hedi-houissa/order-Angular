import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckUIComponent } from './check-ui.component';

describe('CheckUIComponent', () => {
  let component: CheckUIComponent;
  let fixture: ComponentFixture<CheckUIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckUIComponent]
    });
    fixture = TestBed.createComponent(CheckUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
