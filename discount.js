/*
1. if ticket numbers is less then 100, per ticket price: 100
2. if ticket numbers is more less then 100, but less then 200. First per ticket price: 100 and rest tickets will be 90 taka per ticket price
   first 100----100tk
   rest -----90tk
3. if you purchase more than 200 tickets
   first 100 -----> 100tk
   101-200 ------> 90tk
   200+ ----> 70tk

*/

function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if(ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;
    }
}



const totalPrice = ticketPrice(230);
console.log(totalPrice);