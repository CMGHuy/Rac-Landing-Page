import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatDialogRef } from "@angular/material/dialog";
import { Clipboard } from '@angular/cdk/clipboard';
import { ClipboardService } from 'ngx-clipboard';
import { ClipboardModule } from 'ngx-clipboard';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css']
})

export class AlertDialogComponent implements OnInit {

  constructor(
    private clipboardService: ClipboardService,
    private clipboard: Clipboard,
    @Inject(MAT_DIALOG_DATA)
    public data:any,
    public dialogRef:
    MatDialogRef<AlertDialogComponent>) { }

  contentToClipboard: string = '';
  successImageSource: string = '../../assets/images/successfulUpload.png';
  failImageSource: string = '../../assets/images/failedUpload.png';
  dataKey: any;
  browser: any;
  copy : boolean;
  isCopied: boolean;

  ngOnInit() {
    const {detect} = require('detect-browser');
    const browserDetected = detect();
    this.browser = browserDetected.name;
    this.dataKey = this.data.dataKey;
    for (let line of this.dataKey)
    {
      this.contentToClipboard += line;
      this.contentToClipboard += "\n";
    }
  }

  copied(event){
    if (event.isSuccess){
      console.log("Copy successful");
      alert("Copy successful");
    }
    else{
      console.log("Copy failed" +
                  "This functionality is blocked by your browser.\n" +
                  "Please use a different browser or copy the error messages manually.");
      alert("Copy failed:\n" +
            "This functionality is blocked by your browser.\n" +
            "Please use a different browser or copy the error messages manually.");
    }
  }

  /*downloadFile(){
      //you can enter your own file name and extension
      this.writeContents(this.contentToClipboard, 'Sample File'+'.txt', 'text/plain');
  }

  writeContents(content, fileName, contentType) {
    var a = document.createElement('a');
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }*/
}
