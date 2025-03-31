// Parent Class
class User {
  nameF;
  constructor(nameF) {
    this.nameF = nameF;
  }
  getPermissions() {
    throw new Error("This method should be implemented by subclasses");
  }
}

//Subclasses
class Admin extends User {
  constructor(nameF) {
    super(nameF);
    this.role = "Admin";
  }

  getPermissions() {
    return ["create", "read", "update", "delete"];
  }
}

class Member extends User {
  constructor(nameF) {
    super(nameF);
    this.role = "Member";
  }
  getPermissions() {
    return ["read", "comments"];
  }
}

class Notuser extends User {
  constructor(nameF) {
    super(nameF);
    this.role = "Notuser";
  }

  getPermissions() {
    return ["read"];
  }
}

export { User, Admin, Member, Notuser };
