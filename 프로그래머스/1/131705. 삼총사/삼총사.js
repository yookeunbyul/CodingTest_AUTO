function solution(number) {
    //for문 세개 돌려야 가능??
    let count = 0;
    
    for(let i=0; i<number.length; i++){
        for(let j=i+1; j<number.length; j++){
            for(let n=j+1; n<number.length; n++){
                if(number[i]+number[j]+number[n] === 0) count++;
            }
        }
    }
    
    return count;
}