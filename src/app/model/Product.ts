import { Brand } from "./Brand";

export class Product{
  id!: number;
  colour!: string;
  description!: string;
  name!: string;
  quantity!: number;
  size!: number;
  price!: number;
  brand!: Brand;
  image!: string[];


  constructor(id: number, colour: string, description: string, name: string, quantity: number,
    size: number, price:number , brand: Brand, image:string[]) {
    this.id = id;
    this.colour = colour;
    this.description = description;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.size = size;
    this.image = [];
  }
  

}
