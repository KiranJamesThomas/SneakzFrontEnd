export class Brand {
  id!: number;
  brandName!: string;

  constructor(id: number, brandName: string, email: string) {
    this.id = id;
    this.brandName = brandName;
  }
}
