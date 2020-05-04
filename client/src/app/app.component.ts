import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  views = [{name: 'Enhetsöversikt', url: '/overview'},
    // {name: 'Patientöversikt', url: '/patient', active: false},
    {name: 'Teamöversikt', url: '/team'},
    {name: 'Inställningar', url: '/settings'}];

  title = 'VERA 20';

}
