import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron" align="center">
  <h1>Unsaved Changes Demo!</h1>
 </div>
  <div  align="center">
  <nav>
    <a routerLink="/page1" routerLinkActive="active">Name</a>
    <a routerLink="/page2" routerLinkActive="active">Email</a>
  </nav>
  <router-outlet></router-outlet>
  </div>
`
})
export class AppComponent {
  title = 'app';
  editName='';
}
