import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { left } from "@popperjs/core";


@Injectable({
    providedIn: 'root'
})

export class SnackBarService {

    constructor(private _snackBar: MatSnackBar) { }
    private readonly matConfig: MatSnackBarConfig = {
        duration: 3000,
        horizontalPosition: 'left',
        verticalPosition: 'top'
    }
    openSnackBar(msg: string) {
        this._snackBar.open(msg, 'close', this.matConfig)
    }
}