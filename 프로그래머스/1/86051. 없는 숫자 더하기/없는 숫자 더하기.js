function solution(numbers) {
    //numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수
    const answer = [];
    
    for(let i=0; i<=9; i++){
        if(numbers.includes(i) === false){
            answer.push(i);
        }
    }
    
    return answer.reduce((a,b) => a+b);
}