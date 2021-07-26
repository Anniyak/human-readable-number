module.exports = function toReadable (number) {
    if (number == 0) return "zero";
    let n=number+"";
    let answer=number>99?getUnit(+n[0])+ " hundred":"";
    n=number>99?(number-(n[0]*100))+"":number+"";
    answer+=
    +n>19 ? (number>99?" ":"")+getDozen(+n[0]) + (+n[1]>0? " "+getUnit(+n[1]):""): 
        +n>9 ? (number>99?" ":"")+getFirstDozen(+n[1]): 
            n[0]!=0 ? (number>9?" ":"")+getUnit(+n[0]):"";
    return answer;  
}

getUnit = function(d){
    switch(d){
        case 1: return "one";
        case 2: return "two";
        case 3: return "three";
        case 4: return "four";
        case 5: return "five";
        case 6: return "six";
        case 7: return "seven";
        case 8: return "eight";
        case 9: return "nine";
        default: return ""; 
    }
}
getDozen = function(d){
    switch(d){
        case 2: return "twenty";
        case 3: return "thirty";
        case 4: return "forty";
        case 5: return "fifty";
        case 6: return "sixty";
        case 7: return "seventy";
        case 8: return "eighty";
        case 9: return "ninety";
        default: return""; 
    }
}
getFirstDozen = function(d){
    switch(d){
        case 1: return"eleven";
        case 2: return "twelve";
        case 3: return "thirteen";
        case 4: return "fourteen";
        case 5: return "fifteen";
        case 6: return "sixteen";
        case 7: return "seventeen";
        case 8: return "eighteen";
        case 9: return "nineteen";
        default: return "ten"; 
    }
}
