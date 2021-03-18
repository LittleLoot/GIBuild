import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpersComponent } from './addpers.component';

describe('AddpersComponent', () => {
  let component: AddpersComponent;
  let fixture: ComponentFixture<AddpersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
