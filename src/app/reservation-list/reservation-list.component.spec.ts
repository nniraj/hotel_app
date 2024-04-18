import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from '../home/home.component';
import { ReservationListComponent } from './reservation-list.component';

describe('ReservationListComponent', () => {
  let component: ReservationListComponent;
  let fixture: ComponentFixture<ReservationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationListComponent, HomeComponent]
    });
    fixture = TestBed.createComponent(ReservationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
