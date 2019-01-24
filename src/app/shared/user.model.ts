export class User {
  public constructor(
    public name: string,
    public email: string,
    public password: string,
    public password_confirmation: string,
    public id?: number
  ) {

  }
}
