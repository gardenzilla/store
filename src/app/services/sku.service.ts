import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkuService {
  constructor(private http: HttpClient) { }
  get_all(): Observable<Sku[]> {
    return this.http.get<Sku[]>("/assets/skudb.json");
  }
}

export interface Sku {
  sku: number,
  sku_name: string,
  image_cover: string,
  images: string[],
  stock: number,
  price_net: number,
  price_gross: number,
  depreciated: boolean
}