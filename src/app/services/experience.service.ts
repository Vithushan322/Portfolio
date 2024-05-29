import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http: HttpClient) { }

  getExperienceData(): Observable<any[]> {
    return this.http.get<any[]>('assets/files/experience.json');
  }
}
