import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-confirm',
  templateUrl: './get-confirm.component.html',
  styleUrls: ['./get-confirm.component.scss']
})
export class GetConfirmComponent {
msg !: string ;
  constructor(private _matDialogRef: MatDialogRef<GetConfirmComponent>,@Inject(MAT_DIALOG_DATA) getMsg : string){ 
    this.msg = getMsg
  }
  onClose(flag: boolean) {
    this._matDialogRef.close(flag)
  }
}
