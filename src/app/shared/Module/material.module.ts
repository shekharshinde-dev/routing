import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

const matArr = [MatButtonModule,MatCardModule,MatListModule,MatIconModule,MatDialogModule,MatSnackBarModule,MatFormFieldModule,MatInputModule,MatSelectModule]

@NgModule({
    declarations : [],
    imports : [...matArr],
    exports : [...matArr]
})
export class MaterialModule{}