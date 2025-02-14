function solution(a, b) {
    //a와 b 사이에 속한 모든 정수의 합을 리턴
    
    let answer = 0;
    
    if(a<b){
        for(let i=a; i<=b; i++){
            answer += i;
        }
    
        return answer;
    }else{
        for(let i=b; i<=a; i++){
            answer += i;
        }
    
        return answer;
    }
    
    
}