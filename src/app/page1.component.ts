import {DialogService} from './dialog.service';
import {Component} from '@angular/core';

@Component({
  template: `
  <div class="container">
<div class="jumbotron">
  <h1>Name Change  </h1>      
  <p><label>Name: </label>
  <input [(ngModel)]="name" placeholder="name"/></p>
</div>
</div>
<div>

</div>
<p>

  `
})
export class Page1Component {
  name: string;

  constructor(public dialogService: DialogService) {
  }

  canDeactivate(): Promise<boolean> | boolean {
    if (!this.name) return true;
    return this.dialogService.confirm('Are you sure you want to continue? Any unsaved changes will be lost.');
  }
}
