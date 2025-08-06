import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { NotExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouteReuseStrategy } from '@angular/router';
import { Product } from 'src/app/shared/model/product.model';
import { ProductService } from 'src/app/shared/services/product.service';
import { SnackBarService } from 'src/app/shared/services/snackbar.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {
  isEditMode: boolean = false;
  productForm !: FormGroup
  prodId !: string
  role !: string;
  updateBtnFlag  : boolean = false;

  constructor(private _activatedRoute: ActivatedRoute, private fb: FormBuilder, private _productServ: ProductService, private _uuidServ: UuidService, private _router: Router, private _snackBar: SnackBarService) { }
  ngOnInit(): void {
    this.createProdForm()
    this.getParam()

    this.role = this._activatedRoute.snapshot.queryParams['role']

    if(this.role && this.role === 'buyer'){
      this.productForm.disable()
      this.updateBtnFlag = true
    }

  }
  getParam() {
    this.prodId = this._activatedRoute.snapshot.params['id']
    if (this.prodId) {
      this.isEditMode = true
      this._productServ.fetchProductDetails(this.prodId).subscribe({
        next: (data: Product) => {
          this.productForm.patchValue(data)
        },
        error: (err) => console.log(err)
      })
    } else {
      this.isEditMode = false
    }
  }

  createProdForm() {
    this.productForm = this.fb.group({
      name: [null, [Validators.required]],
      imageUrl: [null, [Validators.required]],
      brand: [null, [Validators.required]],
      price: [null, [Validators.required]],
      discount: [null, [Validators.required]],
      rating: [null, [Validators.required]],
      stock: [null, [Validators.required]],
      status: [null, [Validators.required]]
    })
  }

  onProductAdd() {
    if (this.productForm.valid) {
      let productObj: Product = {
        ...this.productForm.value,
        id: this._uuidServ.uuid(),
      }
      this.productForm.reset()
      this._productServ.addNewProduct(productObj).subscribe({
        next: (data: Product) => {
          console.log(data)
          this._router.navigate(['/products'])
          this._snackBar.openSnackBar(`New Product ${data.name} is add SuccessFully !`)
        },
        error: (err) => console.log(err)
      })

    }

  }
  onUpdate() {
    if (this.isEditMode && this.productForm.valid) {
      let UPDATE_OBJ = {
        ...this.productForm.value,
        id: this.prodId
      }
      this._productServ.updateProduct(UPDATE_OBJ).subscribe({
        next: (data: Product) => {
          console.log(data)
          this._router.navigate(['/products'])
          this._snackBar.openSnackBar(`${data.name} Product Updated Succesfully!!`)
        }
      })
    }


  }

}
