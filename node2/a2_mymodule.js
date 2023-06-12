exports.factorial=(a)=>{
    var fact=1;
    for(var i=1;i<=a;i++){
        fact *=i;
    }
    return fact;
}
exports.primenumber=(a)=>{
    
    for(var i=2;i<a;i++){
        if(a%i==0){
            return 'not a prime number';
        }
    }
    return 'prime number'
}

exports.table=(n)=>{
    var ans="";
for(var i=1;i<=10;i++){
    ans += n+"*"+i+"="+n*i+"<br>";
}
return ans;
}
