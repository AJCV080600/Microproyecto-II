import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInfoPageComponent } from './character-info-page.component';

describe('CharacterInfoPageComponent', () => {
  let component: CharacterInfoPageComponent;
  let fixture: ComponentFixture<CharacterInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterInfoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
