import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTimeBoxComponent } from './dialog-time-box.component';

describe('DialogTimeBoxComponent', () => {
  let component: DialogTimeBoxComponent;
  let fixture: ComponentFixture<DialogTimeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTimeBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTimeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
