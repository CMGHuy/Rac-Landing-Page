import { Component, OnInit,Output, Input, EventEmitter } from '@angular/core';
import { BackendService } from './backend.service';
import { MatDialog } from "@angular/material/dialog";
import { HttpResponse } from "@angular/common/http";
import { AlertDialogComponent } from "../alert-dialog/alert-dialog.component";
import { Router } from '@angular/router';
import ImportTypeConfiguration from '../../../../persistent/templatesXLSX/ImportTypeMapping.json';

@Component({
  selector: 'landing-page-root',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent implements OnInit {
  title = 'RaC-Landing-Page';
  fileNameDisplay:string = null;
  defaultLabelText:string = "Choose a file";
  wrongFileText = ['Invalid input Format, only CSV, XLSX, XLS is allowed!'];
  successfulText = ['File uploaded successfully! You will receive a confirmation email upon successful import.'];
  boxShadowStyle: string = '0 -6px 10px 0 #AED6F1  , 0 6px 10px 0 #AED6F1 ';
  fileUpload:any = null;
  uploadMessage:any = null;
  errorCode:any = null;
  fakeButtonOn:boolean = true;
  submitButtonOn:boolean = false;
  loaderOn:boolean = false;
  importName: string = "RIL";

  @Input() typeImport: string;
  @Input() companyTitel: string;
  @Input() token: string;
  @Input() component: string;
  @Input() importTypeFullName: string;
  @Output() componentChange = new EventEmitter<string>();

  constructor(private backendService: BackendService, private dialog: MatDialog, private router: Router) {

  }

  ngOnInit() {
    this.fileNameDisplay = this.defaultLabelText;
    this.showFullImportType();
  }

  showFullImportType(){
    const importTypeData = JSON.parse(JSON.stringify(ImportTypeConfiguration));
    for (let prop in importTypeData){
      if (this.typeImport == prop){
          this.importTypeFullName = importTypeData[prop];
          console.log(this.importTypeFullName);
          console.log(this.typeImport);
      }
    }
  }

  setComponentOff(){
    this.component = 'blockedPage';
    this.componentChange.emit(this.component);
    console.log(this.component);
  }

  verifyFile(event:any){
    let fileName = event.target.files[0].name;
    let allowedExtensions = /(\.xlsx|\.xls|\.xlt|\.csv)$/i;
    if (!allowedExtensions.exec(fileName))
    {
      fileName = '';
      this.fileNameDisplay = this.defaultLabelText;
      this.openDialog(this.wrongFileText,1);
      this.fakeButtonOn = true ;
      this.submitButtonOn = false;
    }
    else
    {
      this.fileNameDisplay = fileName;
      this.fileUpload = event.target.files.item(0);
      console.log(this.fileUpload);
      this.fakeButtonOn = false ;
      this.submitButtonOn = true;
    }
    event.target.value = null;
  }

  openDialog(inputData:any,inputErrorCode:any){
    this.dialog.open(AlertDialogComponent,
      {
        data:
          {
            errorCode: inputErrorCode,
            dataKey: inputData,
          }
      });
  }

  onSubmit(){
    const formData = new FormData();
    formData.append('csvfile', this.fileUpload);
    this.loaderOn = true;
    this.backendService.upload(formData,this.token).subscribe(
      (res) =>  {
        if (res instanceof  HttpResponse) {
          console.log(res);
          this.uploadMessage = res.body.errorMessages;
          this.errorCode = res.body.errorCode;
          if (this.uploadMessage && this.errorCode)
          {
            this.loaderOn = false;
            if ( res.body.errorMessages[0] == "BlockedByBo")
            {
              this.setComponentOff();
              // this.router.navigate(['./block-page'],{replaceUrl:true})
              //this.zone.run(() => { this.router.navigate(['./block-page'], { replaceUrl: true }); });
              console.log("navigate successful");
            }
            else{
              if (this.errorCode == "0"){
                this.uploadMessage = this.successfulText;
              }
              this.openDialog(this.uploadMessage,this.errorCode);
            }
          }
        }
      },
      (err) => console.log(err)
    )
  }
}
