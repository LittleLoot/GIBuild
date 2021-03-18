import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddweaponComponent } from './addweapon.component';

describe('AddweaponComponent', () => {
  let component: AddweaponComponent;
  let fixture: ComponentFixture<AddweaponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddweaponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddweaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
