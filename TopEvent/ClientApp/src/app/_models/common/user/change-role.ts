import { Role } from "../../Role";

export class ChangeRole {
  public userId: string;
  public userEmail: string;
  public allRoles: Role[];
  public userRoles: string[];

  constructor()
  {
    this.allRoles = [];
    this.userRoles = [];
  }
}
