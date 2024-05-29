import { Component, Input } from '@angular/core';

@Component({
  selector: 'experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent {
  @Input() experience: any;
}
