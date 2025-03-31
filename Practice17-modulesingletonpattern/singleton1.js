class DatabaseConnection {
  constructor() {
    if (!DatabaseConnection.instance) {
      console.log("Creating new database connection...");
      DatabaseConnection.instance = this;
      this.connection = "Database connection established";
    }
    return DatabaseConnection.instance;
  }

  query(queryString) {
    console.log(`Executing query: ${queryString}`);
  }

  getConnection() {
    return this.connection;
  }
}

const db1 = new DatabaseConnection();
const db2 = new DatabaseConnection();

console.log(db1 === db2);
console.log(db1.getConnection());
db1.query("SELECT * FROM users");
console.log(db2.getConnection());
db2.query("SELECT * FROM orders");
