import { Component, OnInit } from '@angular/core';
import { Projects  } from '../../models/projects';
import { ProjectService  } from '../../services/project.service';
import { Global  } from '../../services/global';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css'],
  providers:[ProjectService]
})
export class ProyectComponent implements OnInit {
public arrProject:Projects [];
public url:string;
  constructor(
    private _projectService:ProjectService
  ) { 
    this.url=Global.url;
  }

  ngOnInit(): void {

    this.getAllProject();
  }

  getAllProject(){
    this._projectService.getProjects().subscribe(
      response=>{
        this.arrProject=response.objAllProject;
      },
      error=>{
        console.log('(evento todos los PY)'+<any>error);
      }
    );
  }

}// fin de clase
