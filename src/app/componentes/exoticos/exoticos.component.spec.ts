import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoticosComponent } from './exoticos.component';

describe('ExoticosComponent', () => {
  let component: ExoticosComponent;
  let fixture: ComponentFixture<ExoticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoticosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
