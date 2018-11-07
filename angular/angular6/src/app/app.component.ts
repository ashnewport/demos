import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipes';

  ngOnInit() {
    const config = {
      apiKey: 'AIzaSyCxJZDkNl0aJGZ_jSmXOQtbNEXhitc4rHE',
      authDomain: 'udemy-ng-http-d080f.firebaseapp.com'
    };
    firebase.initializeApp(config);
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
