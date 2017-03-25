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
 
  constructor(private http: Http) {
    this.http.get('api/data.json').subscribe(response => {
      this.tvsets = response.json();
      //console.log(this.tvsets);
    });
  }

}