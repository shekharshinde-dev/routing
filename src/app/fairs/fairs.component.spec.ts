import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairsComponent } from './fairs.component';

describe('FairsComponent', () => {
  let component: FairsComponent;
  let fixture: ComponentFixture<FairsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FairsComponent]
    });
    fixture = TestBed.createComponent(FairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
