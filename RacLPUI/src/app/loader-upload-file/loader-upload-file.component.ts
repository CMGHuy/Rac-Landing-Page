import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader-upload-file',
  templateUrl: './loader-upload-file.component.html',
  styleUrls: ['./loader-upload-file.component.css']
})
export class LoaderUploadFileComponent implements OnInit {
  @Input() loaderEnable: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
