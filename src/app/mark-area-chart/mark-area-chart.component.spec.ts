import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkAreaChartComponent } from './mark-area-chart.component';

describe('MarkAreaChartComponent', () => {
  let component: MarkAreaChartComponent;
  let fixture: ComponentFixture<MarkAreaChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkAreaChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkAreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
