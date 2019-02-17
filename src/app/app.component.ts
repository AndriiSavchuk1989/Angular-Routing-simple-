import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
                    <h1>Маршрутизация в Angular 6</h1>
    <nav>
      <a routerLink="" routerLinkActive="active">Главная</a>
      <a routerLink="/about" routerLinkActive="active">О сайте</a>
    </nav>
                    <router-outlet></router-outlet>
               </div>`
})
export class AppComponent {}
