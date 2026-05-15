"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isDeseriumNum = (num) => {
    let theNumber = num;
    let theNumber2 = num;
    let sum = 0;
    let isDeserium = false;
    let power = 0;
    while (theNumber > 0) {
        let digit = theNumber % 10;
        power += 1;
        theNumber = (theNumber - digit) / 10;
    }
    while (num > 0) {
        let digit = num % 10;
        sum += digit ** power;
        num = (num - digit) / 10;
        power--;
    }
    sum === theNumber2 ? isDeserium = true : isDeserium = false;
    return isDeserium;
};
console.log("________________is Deserium number________________");
console.log("the number", 135);
console.log(isDeseriumNum(135));
//# sourceMappingURL=deserium_number.js.map