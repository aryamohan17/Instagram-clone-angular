import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestUserComponent } from './suggest-user.component';

describe('SuggestUserComponent', () => {
  let component: SuggestUserComponent;
  let fixture: ComponentFixture<SuggestUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
