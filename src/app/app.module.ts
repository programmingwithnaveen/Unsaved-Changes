import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogService } from './dialog.service';
import { Confirmation } from './confirmation.component';
import { CanDeactivateGuard } from './can-deactivate-guard.service';

import { Page2Component } from './page2.component';
import { Page1Component } from './page1.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: 'page1', component: Page1Component, canDeactivate: [CanDeactivateGuard] },
  { path: 'page2', component: Page2Component, canDeactivate: [CanDeactivateGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Confirmation
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DialogService, CanDeactivateGuard],
  bootstrap: [AppComponent],
  entryComponents: [Confirmation]
})
export class AppModule { }
