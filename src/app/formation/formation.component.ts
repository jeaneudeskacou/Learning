import { Component, OnInit, Input } from '@angular/core';
import { Formation } from '../cv/ElementCursus';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  @Input() data: Formation | undefined;
  type_activite: string = "cours";
  constructor() { }

  ngOnInit(): void {
  }

  getActivitySize(): boolean | undefined {
    if (this.data?.activites != undefined && this.data?.activites?.length > 0){
      return true;
    } else return false;
    
  }

  getTechnoSize(){
    if(this.data?.technologies != undefined && this.data.technologies.length > 0){
      return true; 
    } else return false;
  }
}
