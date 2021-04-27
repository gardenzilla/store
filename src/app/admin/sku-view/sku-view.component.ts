import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sku-view',
  templateUrl: './sku-view.component.html',
  styleUrls: ['./sku-view.component.scss']
})
export class SkuViewComponent implements OnInit {

  constructor() { }

  clicked: boolean = false;

  ngOnInit(): void {
  }

}
