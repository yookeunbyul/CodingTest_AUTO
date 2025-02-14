function solution(n) {
    let answer = n;
    
    for(let i=1; i<=n; i++){
        if(n % i === 1 && answer > i){
            answer = i;
        }
    }
    
    return answer;
}