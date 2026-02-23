import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private baseUrl = 'http://localhost:8085/activities';

  constructor(private http: HttpClient) {}

  getByGuide(guideId: number): Observable<Activity[]> {
    return this.http.get<Activity[]>(`${this.baseUrl}/guide/${guideId}`);
  }

  getById(id: number): Observable<Activity> {
    return this.http.get<Activity>(`${this.baseUrl}/${id}`);
  }

  create(guideId: number, a: Activity, userId: number): Observable<Activity> {
    return this.http.post<Activity>(`${this.baseUrl}/guide/${guideId}?userId=${userId}`, a);
  }

  update(id: number, a: Activity, userId: number): Observable<Activity> {
    return this.http.put<Activity>(`${this.baseUrl}/${id}?userId=${userId}`, a);
  }

  delete(id: number, userId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}?userId=${userId}`);
  }
}
