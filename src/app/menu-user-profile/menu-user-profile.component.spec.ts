import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuUserProfileComponent } from './menu-user-profile.component';

describe('MenuUserProfileComponent', () => {
  let component: MenuUserProfileComponent;
  let fixture: ComponentFixture<MenuUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuUserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
