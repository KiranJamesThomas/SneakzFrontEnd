import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../service/product.service';
import { Product } from '../model/Product';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-pp',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NgClass],
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

  quantity: number = 1;

  size!: number;

  addToCart(): void {
    console.log(this.quantity);
  }

  setQuantity(value: number) {
    this.size = value;
    console.log('size set to:', this.size);
  }

  isSelected(value: number): boolean {
    return this.size === value;
  }
}
