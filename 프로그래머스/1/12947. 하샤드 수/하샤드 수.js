function solution(x) {
    //x의 자릿수의 합으로 x가 나누어져야 합니다. 
    //나누어 떨어지면 true, 아니면 false
    
    const sum = String(x).split("").reduce((a,b) => a+Number(b), 0);
    
    return x % sum === 0;
}