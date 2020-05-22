import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpernoComponent } from './externo.component';

describe('ExpernoComponent', () => {
  let component: ExpernoComponent;
  let fixture: ComponentFixture<ExpernoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpernoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
