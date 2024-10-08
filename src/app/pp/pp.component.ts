import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../service/product.service';
import { Product } from '../model/Product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pp',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pp.component.html',
  styleUrl: './pp.component.css'
})
export class PpComponent {

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  product!: Product;

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(productId).subscribe(data => {
      this.product = data;
    });
  }
}
