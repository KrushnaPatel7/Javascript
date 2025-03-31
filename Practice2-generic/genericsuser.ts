const promptSync = require('prompt-sync')();  // Correct for CommonJS

// Interfaces for ProductData and ServiceData
interface ProductData {
  weight: number;
  category: string;
}

interface ServiceData {
  duration: number;
  provider: string;
}

// Generic CartItem class
class CartItem<T> {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public data: T
  ) {}

  // Method to display the item details
  displayItem(): void {
    console.log(`Item ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Price: $${this.price}`);
    console.log(`Additional Data: `, this.data);
  }
}

// Function to get user input for ProductData
function getProductData(): ProductData {
  const weight = parseFloat(promptSync('Enter the product weight (in kg): ') || '0');
  const category = promptSync('Enter the product category: ') || 'General';
  return { weight, category };
}

// Function to get user input for ServiceData
function getServiceData(): ServiceData {
  const duration = parseInt(promptSync('Enter the service duration (in minutes): ') || '0', 10);
  const provider = promptSync('Enter the service provider name: ') || 'Unknown';
  return { duration, provider };
}

// Function to create a CartItem based on user choice (Product or Service)
function createCartItem<T>(type: 'product' | 'service'): CartItem<T> {
  const id = parseInt(promptSync('Enter the item ID: ') || '0', 10);
  const name = promptSync('Enter the item name: ') || 'Unknown';
  const price = parseFloat(promptSync('Enter the item price: ') || '0');

  let data: T;
  if (type === 'product') {
    data = getProductData() as T;
  } else {
    data = getServiceData() as T;
  }

  return new CartItem<T>(id, name, price, data);
}

// Main function to run the program
function run() {
  const type = promptSync('Do you want to create a product or a service? (Enter "product" or "service"): ').toLowerCase();

  if (type === 'product' || type === 'service') {
    const cartItem = createCartItem(type as 'product' | 'service');
    cartItem.displayItem();
  } else {
    console.log('Invalid option. Please enter "product" or "service".');
    run();  
  }
}


run();

