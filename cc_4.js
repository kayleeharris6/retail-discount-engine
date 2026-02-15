const products = [   
    { sku: '001', name: 'MacBook Pro', category: 'laptop', price: 1499.99, inventory: 10},
    { sku: '002', name: 'iPhone 12', category: 'phone', price: 799.99, inventory: 20 },
    { sku: '003', name: 'AirPods Pro', category: 'audio', price: 249.99, inventory: 5 },
    { sku: '004', name: 'iPad Pro', category: 'tablet', price: 999.99, inventory: 8 },
    { sku: '005', name: 'charger', category: 'wire', price: 10.00, inventory: 15 }
]

for (const p of products) {
    let discount = 0;

    switch (p.category) {
        case 'laptop':
            discount = 0.15;
            break;
        case 'phone':
            discount = 0.10;
            break;
        case 'audio':
            discount = 0.05;
            break;
        case 'charger':
            discount = 0.10;
            break;
        default:
         console.log("No discount");
    }
p.promoPrice = p.price * (1 - discount);
}

let customerType = "Student";

function applyCustomerDiscount(basePrice, customerType) {
 let additionalDiscount = 0;

    if (customerType === "Student") {
        additionalDiscount = 0.05;
    } else if (customerType === "Senior") {
        additionalDiscount = 0.07;
    } else {
        additionalDiscount = 0;
    }
    return basePrice * (1 - additionalDiscount);
}

for (let i=1; i<= 3; i++) {
    let total= 0;

    for (const p of products) {
        if (p.inventory > 0) {
            const finalPrice = applyCustomerDiscount(p.promoPrice, customerType);
            total += finalPrice;
            p.inventory--;
        }
console.log("Customer " + i + " total: $" + total.toFixed(2));
    }
}

console.log("product details: ", products);
for (let key in products[0]) {
    console.log(key + ": " + products[0][key]);
}   

console.log("products after inventory update: ", products);
for (const p of products) {
    for (const[key, value] of Object.entries(p)) {
        console.log(key + ": " + value);
    }
}