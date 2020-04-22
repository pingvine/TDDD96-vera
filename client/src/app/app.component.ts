import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  views = ['Enhetsöversikt', 'Patientöversikt', 'Teamöversikt', 'Sammanställning'];

  title = 'VERA 20';

}
