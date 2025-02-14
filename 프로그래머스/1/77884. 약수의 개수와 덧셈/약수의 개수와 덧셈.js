function solution(left, right) {
    //약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return
    let sum = 0;
    
    for(let i=left; i<=right; i++){
        const arr = [];
        
        for(let j=1; j<=i; j++){
            if(i % j === 0){
                arr.push(j);
            }
        }
        
        if(arr.length % 2 === 0){
            sum += i;
        }else{
            sum -= i;
        }
    }
    
    return sum;
}