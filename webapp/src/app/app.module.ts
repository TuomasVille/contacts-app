import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {ContactListItemComponent} from './contact/contact-list-item/contact-list-item.component';
import {ContactService} from './contact/service/contact.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToolbarComponent} from './ui/toolbar/toolbar/toolbar.component';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatSidenavModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AvatarModule} from 'ngx-avatar';
import {NgxPaginationModule} from 'ngx-pagination';
import {ContactDetailComponent} from './contact/contact-detail/contact-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ToolbarService} from './ui/toolbar/toolbar.service';
import {ContactLocalStorageService} from './contact/service/contact-local-storage.service';
import { ConfirmDialogComponent } from './ui/confirm-dialog/confirm-dialog.component';
import {ContactProvider} from './contact/interfaces/contact-provider';
import {ContactHttpService} from './contact/service/contact-http.service';
import {environment} from '../environments/environment';
import { ContactMapComponent } from './contact/contact-map/contact-map.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { ErrorDialogComponent } from './ui/error-dialog/error-dialog.component';

const appRoutes: Routes = [
  {path: 'contacts', component: ContactListComponent},
  {path: 'contacts/new', component: ContactDetailComponent},
  {path: 'contacts/edit/:id', component: ContactDetailComponent},
  {path: 'contacts/map', component: ContactMapComponent},
  {path: '', redirectTo: '/contacts', pathMatch: 'full'},
  {path: '**', redirectTo: '/contacts'}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ToolbarComponent,
    ContactDetailComponent,
    ConfirmDialogComponent,
    ContactMapComponent,
    SafeUrlPipe,
    ErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    AvatarModule,
    NgxPaginationModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers:
    [ContactService,
      ToolbarService,
      ContactLocalStorageService,
      ErrorDialogComponent,
      {provide: ContactProvider, useClass: environment.apiEnabled ? ContactHttpService : ContactLocalStorageService}
    ],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmDialogComponent,
    ErrorDialogComponent]
})
export class AppModule {
}
