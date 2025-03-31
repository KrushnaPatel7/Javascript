//Building a shopping cart system where each cart item could be a product or a service.
// Using generics to allow the shopping cart to handle both types of items flexibly.
// Define a generic type for a shopping cart item
var CartItem = /** @class */ (function () {
    function CartItem(id, name, price, data // This will store either product or service-specific data
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.data = data;
    }
    // Display the item details
    CartItem.prototype.displayItem = function () {
        console.log("Item ID: ".concat(this.id));
        console.log("Name: ".concat(this.name));
        console.log("Price: Rs ".concat(this.price));
        console.log("Additional Data: ", this.data);
    };
    return CartItem;
}());
// Creating product items
var productItem = new CartItem(1, 'Laptop', 60000, {
    weight: 2.5,
    category: 'Electronics',
});
var productItem2 = new CartItem(2, 'Headphones', 8000, {
    weight: 0.3,
    category: 'Accessories',
});
// Creating service items
var serviceItem = new CartItem(3, 'Consulting Service', 12000, {
    duration: 60,
    provider: 'TechConsult',
});
var serviceItem2 = new CartItem(4, 'Cleaning Service', 6000, {
    duration: 120,
    provider: 'CleanCo',
});
// Displaying all items
productItem.displayItem();
productItem2.displayItem();
serviceItem.displayItem();
serviceItem2.displayItem();
