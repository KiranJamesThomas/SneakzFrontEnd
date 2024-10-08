export class User {
  id!: number;
  uName!: string;
  password!: string;

  constructor(id: number, uName: string, password: string) {
    this.id = id;
    this.uName = uName;
    this.password = password;
  }
}
