function solution(s) {
    const stack = [];
    const answer = [];
    
    for(let i=0; i<s.length; i++){        
        if(stack.lastIndexOf(s[i]) === -1){
            stack.push(s[i]); //[b,a,n]
            answer.push(-1); //[-1,-1,-1]
        }else if(stack.includes(s[i])){
            answer.push(i-stack.lastIndexOf(s[i]));
            stack.push(s[i]); //[b,a,n,a]
        }
    }
    
    return answer;
}