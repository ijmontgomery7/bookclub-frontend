
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingResultsComponent } from './voting-results.component';

describe('VotingResultsComponent', () => {
  let component: VotingResultsComponent;
  let fixture: ComponentFixture<VotingResultsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VotingResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotingResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
