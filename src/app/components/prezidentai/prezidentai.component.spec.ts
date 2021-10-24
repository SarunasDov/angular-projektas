import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrezidentaiComponent } from './prezidentai.component';

describe('PrezidentaiComponent', () => {
  let component: PrezidentaiComponent;
  let fixture: ComponentFixture<PrezidentaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrezidentaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrezidentaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
