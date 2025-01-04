function solution(numbers) {
    //두개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 return
    const answer = [];
    
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            answer.push(numbers[i] + numbers[j]);
        }
    }
    
    return [...new Set(answer)].sort((a,b) => a-b);
}