import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const URL = 'http://localhost:3000/post';

@Component ({
  selector: 'app-create-assignment',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})

export class InstructorCreateAssignmentComponent {
  public uploader:FileUploader = new FileUploader({url:URL});

  constructor () {}
}
