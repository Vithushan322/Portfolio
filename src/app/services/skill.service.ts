import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }

  getSkillData(): Observable<any[]> {
    return this.http.get<any[]>('assets/files/skills.json');
  }
}
