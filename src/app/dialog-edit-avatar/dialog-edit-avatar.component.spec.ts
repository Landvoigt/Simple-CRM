import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditAvatarComponent } from './dialog-edit-avatar.component';

describe('DialogEditAvatarComponent', () => {
  let component: DialogEditAvatarComponent;
  let fixture: ComponentFixture<DialogEditAvatarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogEditAvatarComponent]
    });
    fixture = TestBed.createComponent(DialogEditAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
