import { Component } from '@angular/core';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills: any = [];

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.skillService.getSkillData().subscribe(data => {
      this.skills = data;
    });
  }
}
