"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isNeonNum = (num) => {
    let poweredNumber = num * num;
    let sum = 0;
    let isNeon = false;
    while (poweredNumber > 0) {
        let digit = poweredNumber % 10;
        sum += digit;
        sum === num ? isNeon = true : isNeon = false;
        poweredNumber = (poweredNumber - digit) / 10;
    }
    return isNeon;
};
console.log("________________is neon number________________");
console.log("the number", 9);
console.log(isNeonNum(9));
//# sourceMappingURL=neon_number.js.map