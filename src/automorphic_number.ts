const isAutoMorphicNum = (num:number):boolean => {
    let theNumber:number = num * num
    return theNumber % 10 === num? true:false    
}

console.log("________________is AutoMorphic________________")
console.log(76)
console.log(isAutoMorphicNum(76))