/* const repeatString = function(string, num) {
    let result=""
    for(let i=0; i<num; i++){
        result+=string
    }
    return result
};
 */
const repeatString = function(string, num) {
    
    if(num < 0){return 'ERROR'}

    if(num === 0 ){
        return ''
    } else {
        return string+repeatString(string, num-1)
    }
};


// Do not edit below this line
module.exports = repeatString;
