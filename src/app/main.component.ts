import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'qs-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {

  routes: Object[] = [{
      title: 'Feed Manager',
      route: '/feeds',
      icon: 'linear_scale',
    }, {
      title: 'Operations',
      route: '/',
      icon: 'dashboard',
    },
    {
      title: 'Administration',
      route: '/',
      icon: 'people',
    }
  ];


  constructor(private _router: Router) {}

  logout(): void {
    this._router.navigate(['/login']);
  }
}
