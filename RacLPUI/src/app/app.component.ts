import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
	title = 'RacLPUI';
	companyTitel = document.getElementById("companyVariable").textContent;
	typeImport = document.getElementById("importTypeVariable").textContent;
	token = document.getElementById("token").textContent;
	selectedPage:string;

	//@Input() tokenValue: any;
  constructor()
  {
  }
	ngOnInit()
	{
   this.selectedPage = this.typeImport;
  }
}


