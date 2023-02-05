function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return "Can not a valid number. Please enter a number";
    }
    else{
        return num1 + num2;
    }
}

// const result = add("20", '29');
const result = add(20, 30);
console.log(result);