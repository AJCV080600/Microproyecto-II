import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersChartComponent } from './characters-chart.component';

describe('CharactersChartComponent', () => {
  let component: CharactersChartComponent;
  let fixture: ComponentFixture<CharactersChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
