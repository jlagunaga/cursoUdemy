import { Component, OnInit } from '@angular/core';
import {Global} from '../../services/global';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Projects } from '../../models/projects';
import { Router,ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-edit-project',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers:[ProjectService,UploadService]
})
export class EditProjectComponent implements OnInit {
  public objProject: Projects;
  public save_project: Projects;
  public title:string;
  public status: string;
  public filesToUpload:Array<File>;
  public url:string;

  constructor(
    private _projectService:ProjectService,
    private _uploadService:UploadService,
    private _router: Router,
  	private _route: ActivatedRoute
  ) {
    this.title='Editar Proyecto';
    this.url=Global.url;
    
   }

  ngOnInit(): void {
    // recojemos el paramotro (id) que viene del Get
    this._route.params.subscribe(params => {
  		let id = params.id;
  		this.getProject(id);
    });
    
  }

  onSubmit(form){
		
		// Guardar datos básicos
		this._projectService.updateProject(this.objProject).subscribe(
			response => {
				if(response.projectUpdate){
					
					// Subir la imagen
					if(this.filesToUpload){
						this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.projectUpdate._id, [], this.filesToUpload, 'image')
						.then((result:any) => {
							this.save_project = result.objUpdate;
							this.status = 'success';
							form.reset();
						});
					}else{
						this.save_project = response.projectUpdate;
						this.status = 'success';
						form.reset();
					}
					
				}else{
					this.status = 'failed';
				}
			},
			error => {
				console.log(<any>error);
			}
		);
  }

  fileChangeEvent(fileInput: any){
		this.filesToUpload = <Array<File>>fileInput.target.files;
  }
  
  // se obtiene el objeto Json con el id
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


}// fin de clase Editar 
