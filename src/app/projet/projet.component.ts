import { Component, OnInit, Input } from '@angular/core';
import { Projet } from '../cv/ElementCursus';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
  @Input() data: Projet | undefined;
  type_activite: string = "activités"
  constructor() { }

  ngOnInit(): void {
  }

  getActivitySize(){
    if(this.data?.activites != undefined && this.data.activites.length > 0){
      return true;
    } else return false;
  }

  getTechnoSize(){
    if(this.data?.technologies != undefined && this.data.technologies.length > 0){
      return true; 
    } else return false;
  }
}
