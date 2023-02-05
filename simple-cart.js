const shoppingCart = [
    { name: 'Panjabi', price: 2000, quantity: 4 },
    { name: 'Shu', price: 1200, quantity: 2 },
    { name: 'Shirt', price: 600, quantity: 6 },
    { name: 'Pant', price: 1000, quantity: 4 },
    { name: 'T-shirt', price: 400, quantity: 8 }
]

function totalCost(products){
    let totalSum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        // console.log(product);
        totalSum += product.price;
    }
    return totalSum;
}

const totalExpense = totalCost(shoppingCart);
console.log("Today total expense is: ", totalExpense);


// find total quantity
function totalQuantity(products){
    let quantitySum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        // console.log(product);
        quantitySum += product.quantity;


    }
    return quantitySum;
}

const sumOfQuantity = totalQuantity(shoppingCart);
console.log("Today total quantity is: ", sumOfQuantity);


// find final total cost
function totalQuantityCost(products){
    let totalCostOfShopping = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        const productTotal = product.price * product.quantity;
        // console.log(productTotal);
        totalCostOfShopping += productTotal;

    }
    return totalCostOfShopping;
}

const sumOfQuantityCost = totalQuantityCost(shoppingCart);
console.log("Today total quantity Cost is: ", sumOfQuantityCost);