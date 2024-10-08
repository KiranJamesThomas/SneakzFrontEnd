import { Component } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../service/product.service';
import { CommonModule } from '@angular/common';
import { NgbCarousel, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shop-page',
  standalone: true,
  imports: [CommonModule, NgbModule, NgbCarousel, RouterLink],
  templateUrl: './shop-page.component.html',
  styleUrl: './shop-page.component.css'
})
export class ShopPageComponent {

  products!: Product[];

  productId!: number;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    });

  }

}
