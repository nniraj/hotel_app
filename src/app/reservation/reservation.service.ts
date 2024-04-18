import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: Reservation[] = [];

  private apiUrl = "http://localhost:3001";
  
  constructor(private http: HttpClient){}

  getreservations(): Observable<Reservation[]>{
    return this.http.get<Reservation[]>(this.apiUrl+'/reservations');
  }

  getreservation(id: string): Reservation | undefined {
    return this.reservations.find(res=>res.id===id);
  }

  addReservation(reservation: Reservation): void{
    reservation.id = Date.now().toString()
    this.reservations.push(reservation);
  }

  deleteReservation(id: string): void{
    let getIndex = this.reservations.findIndex(res => res.id===id)
    this.reservations.splice(getIndex, 1);
  }

  updateReservation(id: string, updatedReservation: Reservation):void{
    let getIndex = this.reservations.findIndex(res => res.id===id);
    this.reservations[getIndex] = updatedReservation
  }
}
