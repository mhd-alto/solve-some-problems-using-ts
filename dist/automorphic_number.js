"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isAutoMorphicNum = (num) => {
    let theNumber = num * num;
    return theNumber % 10 === num ? true : false;
};
console.log("________________is AutoMorphic________________");
console.log(76);
console.log(isAutoMorphicNum(76));
//# sourceMappingURL=automorphic_number.js.map