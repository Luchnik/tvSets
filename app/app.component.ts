import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  title = 'Samsung TV sets';

  tvsets: any;
  dataUrl = 'api/data.json';
 
  constructor(private http: Http) {
    this.http.get(this.dataUrl).subscribe(response => {
      this.tvsets = response.json();
    });
  }

}