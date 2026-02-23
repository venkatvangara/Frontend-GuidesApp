import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guide } from '../models/guide';

@Injectable({ providedIn: 'root' })
export class GuideService {

  private baseUrl = 'http://localhost:8085/guides';

  constructor(private http: HttpClient) {}

  getAll(userId: number): Observable<Guide[]> {
    return this.http.get<Guide[]>(`${this.baseUrl}?userId=${userId}`);
  }

  getById(id: number, userId: number): Observable<Guide> {
    return this.http.get<Guide>(`${this.baseUrl}/${id}?userId=${userId}`);
  }
  create(g: Guide, userId: number) {
  return this.http.post<Guide>(`${this.baseUrl}?userId=${userId}`, g);
}

update(id: number, g: Guide, userId: number) {
  return this.http.put<Guide>(`${this.baseUrl}/${id}?userId=${userId}`, g);
}

delete(id: number, userId: number) {
  return this.http.delete(`${this.baseUrl}/${id}?userId=${userId}`);
}

}
