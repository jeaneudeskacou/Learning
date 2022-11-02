import { Component, OnInit, Input } from '@angular/core';
import { ExperienceInterface } from '../cv/Experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input() data: ExperienceInterface | undefined;
  constructor() { 
  }

  ngOnInit(): void {
    console.log(this.data?.activites)
  }
 
}
