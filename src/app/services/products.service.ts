import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  urlProducts = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient){}

  getProducts(){
    return this.http.get(this.urlProducts);
  }
}
