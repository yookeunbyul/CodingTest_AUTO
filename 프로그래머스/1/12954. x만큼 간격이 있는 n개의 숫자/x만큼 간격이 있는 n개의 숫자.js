function solution(x, n) {
    //x와 n을 입력받아
    //x부터 시작해 x씩 증가하는 숫자를 n개 지나는 리스트를 리턴?
    
    const answer = [];
    
    for(let i=1; i<=n; i++){
        answer.push(x*i);
    }
    
    return answer;
}