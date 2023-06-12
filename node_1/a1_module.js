exports.add=(a,b)=>{
    return a+b;
}
exports.subtract=(a,b)=>{
    return a-b;
}
exports.multiply=(a,b)=>{
    return a*b;
}
exports.divide=(a,b)=>{
    return a/b;
}
exports.square=(a)=>{
    return a*a;
}
exports.sum=(...a)=>{
    var sum=0;
    for(var i=0;i<a.length;i++){
        sum+=a[i];
    }
return sum;
}
