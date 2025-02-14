function solution(s) {
    //대문자는 소문자보다 작은 것으로 간주합니다.
    
    
    return [...s].sort().reverse().join("");
}