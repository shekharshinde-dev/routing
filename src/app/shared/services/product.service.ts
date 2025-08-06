import { Injectable } from "@angular/core";
import { Product } from "../model/product.model";
import { Observable, of } from "rxjs";
import { PRODUCTS_META_DATA } from "../const/product-data";


@Injectable({
    providedIn : 'root'
})
export class ProductService{
    
    fetchProductData():Observable<Product[]>{
        return of(PRODUCTS_META_DATA)
    }

    fetchProductDetails(id:string) : Observable<Product>{
        let prodIbj : Product = PRODUCTS_META_DATA.find(prod => prod.id === id)!
        return of(prodIbj) 
    }
    
    addNewProduct(newProduct:Product) : Observable<Product>{
        PRODUCTS_META_DATA.push(newProduct)
        return of(newProduct)
    }
    updateProduct(updateObj:Product) : Observable<Product>{
        let getIndex = PRODUCTS_META_DATA.findIndex(product => product.id === updateObj.id)
        PRODUCTS_META_DATA[getIndex] = updateObj

        return of(updateObj)
        
    }
    deleteProductId(id:string):Observable<string>{
        let getIndex = PRODUCTS_META_DATA.findIndex(product => product.id === id)
        PRODUCTS_META_DATA.splice(getIndex,1)
        return of(id)
    }
}