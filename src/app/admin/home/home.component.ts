import { Component, OnInit } from '@angular/core';
import { Sku, SkuService } from 'src/app/services/sku.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  skus: Sku[] = [];

  constructor(private skuService: SkuService) { }

  ngOnInit(): void {
    this.skuService.get_all().subscribe(res => this.skus = res);
  }

  skus_partitioned(): Sku[][] {
    let result: Sku[][] = [];
    for (let i = 0; i < this.skus.length; i += 4) {
         let row: Sku[] = [];
         for (let j = 0; j < 4; j++) {
             if(this.skus[i+j]) {
              row.push(this.skus[i + j]);
             }
         }
         result.push(row);
    }
    return result;
}

  purchase() {
    alert("Vásárlás");
  }

}
