export interface ElementCursus {
    type: string;
    titre: string;
    pays: string;
    ville: string;
    structure: string;
    debut?: string;
    fin?: string;
    activites?: string[];
    technologies?: string[]; 
}
export interface ExperienceInterface extends ElementCursus{
       
}

export interface Formation extends ElementCursus{
    
}