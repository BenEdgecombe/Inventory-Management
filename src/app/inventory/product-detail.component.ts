import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { InventoryService } from './inventory.service';
import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = "Product Details"; 
  product!: IProduct;
  imageWidth: number = 250;
  imageMargin: number = 10;
  errorMessage: string = "";
  sub!: Subscription;
  products: IProduct[] = [];
  selectedProduct: IProduct[] = [];
  id:number = 0;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private inventoryService: InventoryService){ }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    //There must be a better way than this.
    this.sub = this.inventoryService.getProducts().subscribe({
      next: (products: IProduct[]) => {
        this.products = products; this.selectedProduct = this.products;
      },
      error: err => this.errorMessage = err});
  }

  onBack(): void {
    this.router.navigate(["/inventory"]);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
}

}
