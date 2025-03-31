//Building a shopping cart system where each cart item could be a product or a service.
// Using generics to allow the shopping cart to handle both types of items flexibly.


class CartItem<T> {
    constructor(
      public id: number,
      public name: string,
      public price: number,
      public data: T 
    ) {}
  
    // Display the item details
    displayItem(): void {
      console.log(`Item ID: ${this.id}`);
      console.log(`Name: ${this.name}`);
      console.log(`Price: Rs ${this.price}`);
      console.log(`Additional Data: `, this.data);
    }
  }
  
  // Product-specific data
  interface ProductData {
    weight: number; 
    category: string; 
  }
  
  // Service-specific data
  interface ServiceData {
    duration: number; 
    provider: string; 
  }
  
  const productItem = new CartItem<ProductData>(1, 'Laptop', 60000, {
    weight: 2.5,
    category: 'Electronics',
  });
  
  const productItem2 = new CartItem<ProductData>(2, 'Headphones', 8000, {
    weight: 0.3,
    category: 'Accessories',
  });
  
  
  const serviceItem = new CartItem<ServiceData>(3, 'Consulting Service', 12000, {
    duration: 60,
    provider: 'TechConsult',
  });
  
  const serviceItem2 = new CartItem<ServiceData>(4, 'Cleaning Service', 6000, {
    duration: 120,
    provider: 'CleanCo',
  });
  
  // Displaying all items
  productItem.displayItem();
  productItem2.displayItem();
  serviceItem.displayItem();
  serviceItem2.displayItem();
  