var promptSync = require('prompt-sync')(); // Correct for CommonJS
// Generic CartItem class
var CartItem = /** @class */ (function () {
    function CartItem(id, name, price, data) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.data = data;
    }
    // Method to display the item details
    CartItem.prototype.displayItem = function () {
        console.log("Item ID: ".concat(this.id));
        console.log("Name: ".concat(this.name));
        console.log("Price: $".concat(this.price));
        console.log("Additional Data: ", this.data);
    };
    return CartItem;
}());
// Function to get user input for ProductData
function getProductData() {
    var weight = parseFloat(promptSync('Enter the product weight (in kg): ') || '0');
    var category = promptSync('Enter the product category: ') || 'General';
    return { weight: weight, category: category };
}
// Function to get user input for ServiceData
function getServiceData() {
    var duration = parseInt(promptSync('Enter the service duration (in minutes): ') || '0', 10);
    var provider = promptSync('Enter the service provider name: ') || 'Unknown';
    return { duration: duration, provider: provider };
}
// Function to create a CartItem based on user choice (Product or Service)
function createCartItem(type) {
    var id = parseInt(promptSync('Enter the item ID: ') || '0', 10);
    var name = promptSync('Enter the item name: ') || 'Unknown';
    var price = parseFloat(promptSync('Enter the item price: ') || '0');
    var data;
    if (type === 'product') {
        data = getProductData();
    }
    else {
        data = getServiceData();
    }
    return new CartItem(id, name, price, data);
}
// Main function to run the program
function run() {
    var type = promptSync('Do you want to create a product or a service? (Enter "product" or "service"): ').toLowerCase();
    if (type === 'product' || type === 'service') {
        var cartItem = createCartItem(type);
        cartItem.displayItem();
    }
    else {
        console.log('Invalid option. Please enter "product" or "service".');
        run();
    }
}
run();
