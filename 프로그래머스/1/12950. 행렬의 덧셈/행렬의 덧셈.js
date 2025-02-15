function solution(arr1, arr2) {
    // [[1,2],[2,3]]
    // [[3,4],[5,6]]
    
    //0,0 0,1 1,0 1,1
    
    const answer = [];
    
    for(let i=0; i<arr1.length; i++){
        const stack = [];
        for(let j=0; j<arr1[0].length; j++){
            stack.push(arr1[i][j] + arr2[i][j]);
        }
        
        answer.push(stack);
    }
    
    
    return answer;
}