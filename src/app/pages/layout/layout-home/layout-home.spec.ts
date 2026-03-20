import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { LayoutHome } from './layout-home';

describe('LayoutHome', () => {
  let component: LayoutHome;
  let fixture: ComponentFixture<LayoutHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutHome],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
