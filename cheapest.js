const phones = [
    { name: 'Samsung', camera: 16, storage: '128gb', price: 39000, color: 'silver' },
    { name: 'Walton', camera: 12, storage: '64gb', price: 23000, color: 'silver' },
    { name: 'Xiaomi', camera: 16, storage: '128gb', price: 29000, color: 'silver' },
    { name: 'Oppo', camera: 8, storage: '32gb', price: 18000, color: 'black' },
    { name: 'Realme', camera: 12, storage: '64gb', price: 24000, color: 'silver' },
]

function phoneCheapest(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        // console.log(phone);
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const lowBudgetPhone = phoneCheapest(phones);
console.log(lowBudgetPhone);