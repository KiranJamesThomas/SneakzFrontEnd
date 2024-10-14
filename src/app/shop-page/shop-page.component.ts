import { Component } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../service/product.service';
import { CommonModule } from '@angular/common';
import { NgbCarousel, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { WishlistService } from '../service/wishlist.service';

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
  constructor(private productService: ProductService, private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    });

  }
  isInWishlist: boolean = false;


  toggleWishlist() {
    if (this.isInWishlist) {
      // Logic to remove the product from the wishlist
      this.wishlistService.removeProductFromWishlist(this.productId); // Replace productId with actual ID
      this.isInWishlist = false;
    } else {
      // Logic to add the product to the wishlist
      this.wishlistService.addProductToWishlist(this.productId); // Replace productId with actual ID
      this.isInWishlist = true;
    }
  }

}
