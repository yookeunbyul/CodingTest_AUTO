function solution(array, commands) {
    //i~j까지 자르고 정렬하고 k번째에 있는 수를 배열에 담아 return
    
    const answer = [];
    
    for(const [i,j,k] of commands){
        const sliced = array.slice(i-1,j).sort((a,b)=>a-b);
        answer.push(sliced[k-1]);
    }
    
    return answer;
    
}