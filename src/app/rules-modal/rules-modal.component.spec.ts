import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesModalComponent } from './rules-modal.component';

describe('RulesModalComponent', () => {
  let component: RulesModalComponent;
  let fixture: ComponentFixture<RulesModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RulesModalComponent]
    });
    fixture = TestBed.createComponent(RulesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
