import { Component, OnInit } from '@angular/core';
import { ExperienceInterface } from './Experience';
import list_exp from './list_exp.json';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  cv_title: string = "INGENIEUR TELECOMS & RESEAUX";
  cv_description: string = `Le double diplôme d’ingénieur que j’ai récemment obtenu me permet d’avoir 
des aptitudes dans le développement logiciel mais également dans 
l’administration des infrastructures aussi bien informatiques que télécoms.
La compréhension de ces domaines m’accorde d’apporter une plus-value en 
tant qu’ingénieur DevOps`;

  nom_prenom: string = "Jean-Eudes KACOU";
  numero: string = "+33-6-28-59-07-76";
  mail: string = "koua.kacou@inphb.ci";
  connaissances: string[] = [
    "java", "python", "javascript", "typescript"
  ];
  langages: string[] = ["Français", "Anglais"];
  experiences: ExperienceInterface[] = list_exp.experiences;


  constructor() { }

  ngOnInit(): void {
  }

}
