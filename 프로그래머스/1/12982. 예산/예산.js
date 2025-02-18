function solution(d, budget) {
    //최대한 많은 부서의 물품을 구매해 줄 수 있도록 하려고 합니다.
    //요청한대로 줘야된다.
    //최대 몇 개의 부서에 물품을 지원할 수 있는지 return
    
    //budget이 될 수 있는 값의 갯수가 최대여야한다?
    //그럼 작은 거부터 빼줘야겠네
    
    const sortedD = d.sort((a,b) => a-b);
    //1,2,3,4,5
    
    let count = 0;
    
    for(let i=0; i<d.length; i++){
        if(budget < sortedD[i]) break;
        budget -= sortedD[i];
        count++;
    }
    
    return count;
}