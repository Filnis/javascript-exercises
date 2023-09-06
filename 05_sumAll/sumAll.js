const sumAll = function(arg1, arg2) {
    let uBound = arg1 > arg2 ? arg1 : arg2;
    let lBound = arg1 > arg2 ? arg2 : arg1;
    if(lBound < 0 || !Number.isInteger(arg1) || !Number.isInteger(arg2) ){
        return 'ERROR';
    }
    
    let sum = 0;
    for(let i = 0; i <= uBound - lBound; i++){
        sum += lBound + i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
