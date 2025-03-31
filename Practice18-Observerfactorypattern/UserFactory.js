import { Admin, Member, Notuser } from "./factorypatternUser.js";

//Factory Class
class UserFactory {
  static createUser(nameF, role) {
    switch (role) {
      case "Admin":
        return new Admin(nameF);
      case "Member":
        return new Member(nameF);
      case "Notuser":
        return new Notuser(nameF);
      default:
        throw new Error("Invalid user role");
    }
  }
}

export { UserFactory };
