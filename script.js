/*
const bigNumber = function (number){
    if (number >100){
        return true;
    } else {
        return false;
    }
};

console.log(bigNumber(150));
console.log(bigNumber(80));

// it produce something 

const bouncerBrenda = function(max, current, age){
    if (age <18){
    return "this is a club for adults";
    }
    if (current >=max){
        return "it's too busy now, come back later";
    } else {
        return "come in";
    }
};

console.log(bouncerBrenda(800, 200, 17)); */

const calculatingAverage = function(number1, number2, number3, number4, number5){
    const total = number1 + number2 + number3 + number4 + number5;
    const average = total / 5;
    return average;
};

console.log(calculatingAverage(1,2,3,4,5));