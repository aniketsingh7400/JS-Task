function rentalCarCost(d) {
    let rent = d * 40;
    if (d >= 7)
        return rent - 50;
    else if (d >= 3)
        return rent -20;
    else
        return rent;
}

console.log(rentalCarCost(2));
console.log(rentalCarCost(4));
console.log(rentalCarCost(8));