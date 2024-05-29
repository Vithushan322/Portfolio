import { Component } from '@angular/core';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experience: any = [];

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.experienceService.getExperienceData().subscribe(data => {
      this.experience = data;
    });
  }
}
