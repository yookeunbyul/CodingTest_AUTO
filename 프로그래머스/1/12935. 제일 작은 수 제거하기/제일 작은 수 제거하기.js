function solution(arr) {
    const min = Math.min(...arr);
    
    //true인 값을 필터링
    const answer = arr.filter(v => v !== min);
    
    return answer.length === 0 ? [-1] : answer;
}