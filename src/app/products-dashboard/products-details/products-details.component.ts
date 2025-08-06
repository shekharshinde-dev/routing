import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { GetConfirmComponent } from 'src/app/get-confirm/get-confirm.component';
import { Product } from 'src/app/shared/model/product.model';
import { ProductService } from 'src/app/shared/services/product.service';
import { SnackBarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  prodId !: string;
  prodInfo!: Product;
  constructor(private _activatedRoute: ActivatedRoute, private _productServ: ProductService, private _matDialog: MatDialog, private _router: Router, private _snackBar: SnackBarService) { }

  ngOnInit(): void {
    this.getProductDetails()
  }

  getProductDetails() {
    // this.prodId = this._activatedRoute.snapshot.params['id'] 

    this._activatedRoute.params.subscribe(param => {
      this.prodId = param['id']
      if (this.prodId) {
        this._productServ.fetchProductDetails(this.prodId).subscribe({
          next: (data: Product) => {
            this.prodInfo = data
          },
          error: (err) => console.log(err)

        })
      }
    })


  }
  onRemove(id: string) {
    console.log(id);
    let matConfig: MatDialogConfig = new MatDialogConfig();
    matConfig.width = "700px";
    matConfig.maxWidth = "90%";
    matConfig.disableClose = true;
    matConfig.data = `Are You sure, You want to Remove ${this.prodInfo.name}`

    let matDialogRef = this._matDialog.open(GetConfirmComponent, matConfig)
    matDialogRef.afterClosed().subscribe(res => {
      if (res) {
        this._productServ.deleteProductId(id).subscribe({
          next: (data: string) => {
            this._router.navigate(['/products'])
            this._snackBar.openSnackBar(`${this.prodInfo.name} is product remove SuccessFully`)
          },
          error: (err) => console.log(err)

        })

      }
    })

  }

  onEditNavigate(){
    this._router.navigate(['edit'] ,{relativeTo : this._activatedRoute,queryParamsHandling : 'preserve'}

     )
  }
}
