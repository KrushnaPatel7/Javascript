import { UserFactory } from "./UserFactory.js";

const Admin1 = UserFactory.createUser("Krushna", "Admin");
const Admin2 = UserFactory.createUser("Diya", "Admin");
const Member1 = UserFactory.createUser("Swati", "Member");
const Notuser1 = UserFactory.createUser("Raj", "Notuser");

console.log(
  `${Admin1.nameF}, ${Admin1.role} has following Permissions:`,
  Admin1.getPermissions()
);
console.log(
  `${Admin2.nameF}, ${Admin2.role} has following Permissions:`,
  Admin2.getPermissions()
);
console.log(
  `${Member1.nameF}, ${Member1.role} has following Permissions:`,
  Member1.getPermissions()
);
console.log(
  `${Notuser1.nameF}, ${Notuser1.role} has following Permissions:`,
  Notuser1.getPermissions()
);
