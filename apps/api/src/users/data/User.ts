export class User {
  public readonly id: string;
  public readonly name: string;
  public readonly email: string;
  public password: string;
  public thumbnail: string | undefined;
  public readonly createdAt: Date;
  public updatedAt?: Date;

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    thumbnail: string | undefined,
    createdAt: Date,
    updatedAt?: Date
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.thumbnail = thumbnail;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt
  }
}
