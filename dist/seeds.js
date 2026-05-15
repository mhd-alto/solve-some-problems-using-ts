"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DigitProduct = (num) => {
    let result = 1;
    while (num > 0) {
        let digit = num % 10;
        if (digit === 0) {
            return 0;
        }
        result *= digit;
        num = (num - digit) / 10;
    }
    return result;
};
const seedRoots = (n) => {
    let res = [];
    for (let i = 1; i <= n / 2; i++) {
        if (i * DigitProduct(i) === n) {
            res.push(i);
        }
    }
    if (res.length === 0) {
        res.push(-1);
    }
    return res.join(" ");
};
console.log("________________seed number________________");
console.log("the number", 11);
console.log(seedRoots(11));
//# sourceMappingURL=seeds.js.map