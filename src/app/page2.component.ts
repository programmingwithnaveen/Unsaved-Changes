import {DialogService} from './dialog.service';
import {Component} from '@angular/core';

@Component({
  template: ` 

<div class="container">
<div class="jumbotron">
  <h1>Email Change </h1>      
  <p><label>Email: </label>
  <input [(ngModel)]="email" placeholder="Email"/></p>
</div>
</div>

  `
})
export class Page2Component {
  email: string;

  constructor(public dialogService: DialogService) {
  }

  canDeactivate(): Promise<boolean> | boolean {
    if (!this.email) return true;
    return this.dialogService.confirm('Are you sure you want to continue? Any unsaved changes will be lost.');
  }
}
