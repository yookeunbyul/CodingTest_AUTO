function solution(arr)
{
    //연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다.
    
    const answer = [];
    
    for(let i=0; i<arr.length; i++){
        if(answer[answer.length-1] === arr[i]){
            continue;
        }else{
            answer.push(arr[i]);
        }
    }
    
    return answer;
}