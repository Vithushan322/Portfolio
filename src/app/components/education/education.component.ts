import { Component } from '@angular/core';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  education: any = [];

  constructor(private educationService: EducationService) { }

  ngOnInit(): void {
    this.educationService.getEducationData().subscribe(data => {
      this.education = data;
    });
  }
}
