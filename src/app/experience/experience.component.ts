import { Component, OnInit, Input } from '@angular/core';
import { ExperienceInterface } from '../cv/ElementCursus';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input() data: ExperienceInterface | undefined;
  type_activite: string = "missions";
  constructor() { 
  }

  ngOnInit(): void {
  }
 
}
