import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron" align="center">
  <h1>Unsaved Changes Demo!</h1>
 </div>
  <div  align="center">
  <nav>
    <a routerLink="/page1" routerLinkActive="active">Page1</a>
    <a routerLink="/page2" routerLinkActive="active">Page2</a>
  </nav>
  <router-outlet></router-outlet>
  </div>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  editName='';
}
