import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { TvSet } from './tvset.model';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Samsung TV sets';
  dataUrl = 'api/data.json';
  tvsets: TvSet[];

  constructor(private http: Http) {}

  ngOnInit() {
    this.http.get(this.dataUrl).subscribe(response => {
      this.tvsets = response.json();
    });
  }

}