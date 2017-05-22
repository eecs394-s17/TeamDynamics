import { Component } from '@angular/core';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload';

const URL = 'http://localhost:3000/post';

@Component ({
  selector: 'app-create-assignment',
  templateUrl: './create-assignment.component.html',
  styleUrls: ['./create-assignment.component.css']
})

export class CreateAssignmentComponent {
  public uploader:FileUploader = new FileUploader({url:URL})
  public hasBaseDropZoneOver:boolean = false;
    public hasAnotherDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
      this.hasBaseDropZoneOver = e;
   }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }



  constructor () {}

  fileupload(file) : void {
    console.log('file upload called');
  }

  fileread() {
    var filereader = new FileReader();
    console.log(this.uploader);
    //filereader.readAsDataURL(this.uploader);
  }

}
