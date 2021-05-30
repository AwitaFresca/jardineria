import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenpeaceComponent } from './greenpeace.component';

describe('GreenpeaceComponent', () => {
  let component: GreenpeaceComponent;
  let fixture: ComponentFixture<GreenpeaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenpeaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenpeaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
