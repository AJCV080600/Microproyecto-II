import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersFilterPageComponent } from './characters-filter-page.component';

describe('CharactersFilterPageComponent', () => {
  let component: CharactersFilterPageComponent;
  let fixture: ComponentFixture<CharactersFilterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersFilterPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersFilterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
