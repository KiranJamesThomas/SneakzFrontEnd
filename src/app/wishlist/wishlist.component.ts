import { Component } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../service/product.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbCarousel, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [RouterLink, CommonModule, NgbModule, NgbCarousel],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {

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
