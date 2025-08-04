import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App41 } from './app41';

describe('App41', () => {
  let component: App41;
  let fixture: ComponentFixture<App41>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App41]
    })
    .compileComponents();

    fixture = TestBed.createComponent(App41);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
