import {Injectable} from '@angular/core';
import {ErrorDialogComponent} from '../../ui/error-dialog/error-dialog.component';
import {MatDialog} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) {
  }

  showError(): void {
    this.dialog.open(ErrorDialogComponent, {
    });
  }
}
