import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';

const matArr = [MatButtonModule,MatCardModule,MatListModule,MatIconModule,MatDialogModule,MatSnackBarModule]

@NgModule({
    declarations : [],
    imports : [...matArr],
    exports : [...matArr]
})
export class MaterialModule{}