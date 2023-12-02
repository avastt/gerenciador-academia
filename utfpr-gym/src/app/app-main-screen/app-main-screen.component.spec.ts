import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainScreenComponent } from './app-main-screen.component';

describe('AppMainScreenComponent', () => {
  let component: AppMainScreenComponent;
  let fixture: ComponentFixture<AppMainScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppMainScreenComponent]
    });
    fixture = TestBed.createComponent(AppMainScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
