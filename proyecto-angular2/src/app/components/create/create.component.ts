import { Component, OnInit } from '@angular/core';
import {Global} from '../../services/global';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Projects } from '../../models/projects';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService,UploadService]
})
export class CreateComponent implements OnInit {
  public objProject: Projects;
  public save_project: Projects;
  public title:string;
  public status: string;
  public filesToUpload:Array<File>;
  public url:string;

  constructor(
    private _projectService:ProjectService,
    private _uploadService:UploadService
  ) {
    this.title='crear proyecto';
    this.objProject = new Projects('', '', '', '', '', 2020, '');
    
   }

  ngOnInit(): void {
  }

  onSubmit(form){
		
		// Guardar datos básicos
		this._projectService.saveProject(this.objProject).subscribe(
			response => {
				if(response.project){
					
					// Subir la imagen
					if(this.filesToUpload){
						this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image')
						.then((result:any) => {
							this.save_project = result.objUpdate;
							this.status = 'success';
							form.reset();
						});
					}else{
						this.save_project = response.project;
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

  
}// fin de clase
