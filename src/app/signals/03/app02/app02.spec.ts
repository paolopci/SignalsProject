import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App02 } from './app02';

describe('App02', () => {
  let component: App02;
  let fixture: ComponentFixture<App02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App02]
    })
    .compileComponents();

    fixture = TestBed.createComponent(App02);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
