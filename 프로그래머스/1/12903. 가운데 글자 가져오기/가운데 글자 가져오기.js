function solution(s) {
    const middle = parseInt(s.length / 2);
    
    if(s.length % 2 === 0){
        return s[middle-1] + s[middle];
    }else{
        return s[middle];
    }
}