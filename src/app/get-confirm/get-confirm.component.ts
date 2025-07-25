import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-confirm',
  templateUrl: './get-confirm.component.html',
  styleUrls: ['./get-confirm.component.scss']
})
export class GetConfirmComponent {

  constructor(private _matDialogRef: MatDialogRef<GetConfirmComponent>) { }
  onClose(flag: boolean) {
    this._matDialogRef.close(flag)
  }
}
