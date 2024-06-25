import { environment } from '@@environment/environment';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  async getData() {
    return await axios
      .get(`${environment.url_ecommerce}/products`, { headers: { Authorization: 'Basic Y2tfN2YwYWE0OTc4YjFlMDM2NmE0NmQxNjI3MWZlMjc1M2UwMDcyYzMxNzpjc18xYmVhZjNkMGE4MGU0YzY3NjQ1OTBhY2Y1NDU5OGEzNmM5OGM2OGUy' } })
      .then((data: any) => {
        console.log('## PRODUCTS RESULT ##')
        console.log(data)
        return data
      });
  }

  async getDataCategories() {
    return await axios
      .get(`${environment.url_ecommerce}/products/categories`, { headers: { Authorization: 'Basic Y2tfN2YwYWE0OTc4YjFlMDM2NmE0NmQxNjI3MWZlMjc1M2UwMDcyYzMxNzpjc18xYmVhZjNkMGE4MGU0YzY3NjQ1OTBhY2Y1NDU5OGEzNmM5OGM2OGUy' } })
      .then((data: any) => {
        console.log('## PRODUCTS CATEGORIES RESULT ##')
        console.log(data)
        return data
      });
  }

  async getDataProductCategories(category_id) {
    return await axios
      .get(`${environment.url_ecommerce}/products`, { params: { 'category': category_id }, headers: { Authorization: 'Basic Y2tfN2YwYWE0OTc4YjFlMDM2NmE0NmQxNjI3MWZlMjc1M2UwMDcyYzMxNzpjc18xYmVhZjNkMGE4MGU0YzY3NjQ1OTBhY2Y1NDU5OGEzNmM5OGM2OGUy' } })
      .then((data: any) => {
        console.log('## PRODUCTS CATEGORIES RESULT ##')
        console.log(data)
        return data
      });
  }

  async createProduct(data) {
    return await axios
      .post(`${environment.url_ecommerce}/products`, data, { headers: { Authorization: 'Basic Y2tfN2YwYWE0OTc4YjFlMDM2NmE0NmQxNjI3MWZlMjc1M2UwMDcyYzMxNzpjc18xYmVhZjNkMGE4MGU0YzY3NjQ1OTBhY2Y1NDU5OGEzNmM5OGM2OGUy' } })
      .then((data: any) => {
        console.log('## PRODUCTS CREATE RESULT ##')
        console.log(data)
        return data
      });
  }

}
