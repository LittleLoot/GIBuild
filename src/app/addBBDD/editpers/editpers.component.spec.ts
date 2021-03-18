import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpersComponent } from './editpers.component';

describe('EditpersComponent', () => {
  let component: EditpersComponent;
  let fixture: ComponentFixture<EditpersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
