import { Component, OnInit } from '@angular/core';
import { Projects } from '../../models/projects';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import { Router,ActivatedRoute,Params } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers:[ProjectService]
})
export class DetailsComponent implements OnInit {
  public objProject:Projects;
  public url:string;
  public confirm: boolean;
  
  constructor(
    private _projectService: ProjectService,
  	private _router: Router,
  	private _route: ActivatedRoute
  ) { 
    this.url = Global.url;
    this.confirm=false;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
  		let id = params.id;

  		this.getProject(id);
  	});
  }
  getProject(id){
  	this._projectService.getProject(id).subscribe(
  		response => {
  			this.objProject = response.objProject;
  		},
  		error => {
  			console.log(<any>error);
  		}
  	)
  }

  setConfirm(confirm){
    this.confirm = confirm;
  }

  deleteProject(id){
    this._projectService.deleteProject(id).subscribe(
  		response => {
  			if(response.projectDelete){
          console.log('Eliminado');
          this._router.navigate(['/Project']);
  			}
  		},
  		error => {
  			console.log(<any>error);
  		}
  	);

  }

}// fin de clase
