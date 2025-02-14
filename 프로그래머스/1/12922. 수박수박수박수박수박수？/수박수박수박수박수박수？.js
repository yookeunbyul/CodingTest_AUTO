function solution(n) {
    //홀수면 수, 짝수면 박
    let answer = "";
    
    for(let i=1; i<=n; i++){
        if(i % 2 === 1){
            answer += "수";
        }else{
            answer += "박";
        }
    }
    
    return answer;
}