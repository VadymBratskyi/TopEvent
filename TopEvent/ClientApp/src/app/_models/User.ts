import { Client } from "./Client";

export class User {

  public lockoutEnd: Date;
  public twoFactorEnabled: boolean;
  public phoneNumberConfirmed: boolean;
  public phoneNumber: string;
  public concurrencyStamp: string;
  public securityStamp: string;
  public passwordHash: string;
  public emailConfirmed: boolean;
  public normalizedEmail: string;
  public email: string;
  public normalizedUserName: string;
  public userName: string;
  public id: string;
  public lockoutEnabled: boolean;
  public accessFailedCount: number;

  public client: Client; 

  constructor(username: string) {
    this.email = username;
    this.userName = username;
  }

}
