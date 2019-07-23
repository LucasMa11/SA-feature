import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityAdvisorComponent } from './security-advisor.component';

describe('SecurityAdvisorComponent', () => {
  let component: SecurityAdvisorComponent;
  let fixture: ComponentFixture<SecurityAdvisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityAdvisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityAdvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
