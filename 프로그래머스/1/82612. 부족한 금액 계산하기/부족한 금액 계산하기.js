function solution(price, money, count) {
    let sum = 0;
    
    for(let i=1; i<=count; i++){
        sum += price * i;
    }
    
    //금액이 부족하지 않으면 0을 return 하세요.
    if(money > sum) return 0;
    return sum - money;
}