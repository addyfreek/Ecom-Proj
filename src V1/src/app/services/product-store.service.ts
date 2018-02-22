import { Injectable } from '@angular/core';

import { Product } from './product';
import { Products } from './mock-products';

@Injectable()
export class ProductStoreService {

  productsList: Product[] = Products;

  getProducts() {
    return this.productsList;
  }

  getProduct(productId: number) {
    return this.productsList.find(product => product.productId === productId);
  }

  deleteProduct(productId: number) {
    this.productsList = this.productsList.filter(product => product.productId !== productId);
    return this.productsList;
  }
}
