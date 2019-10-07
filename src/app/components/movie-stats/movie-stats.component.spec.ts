import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieStatsComponent } from './movie-stats.component';

describe('MovieStatsComponent', () => {
  let component: MovieStatsComponent;
  let fixture: ComponentFixture<MovieStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
