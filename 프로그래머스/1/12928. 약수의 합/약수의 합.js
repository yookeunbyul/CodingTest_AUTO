function solution(n) {
    //n의 약수를 모두 더한 값
    let sum = 0;
    
    for(let i=1; i<=n; i++){
        if(n % i === 0){
            sum += i;
        }
    }
    
    return sum;
}