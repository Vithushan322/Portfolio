import { Component, Input } from '@angular/core';

@Component({
  selector: 'education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.scss']
})
export class EducationCardComponent {
  @Input() education: any;
}
