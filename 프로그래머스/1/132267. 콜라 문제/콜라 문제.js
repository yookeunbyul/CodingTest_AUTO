function solution(a, b, n) {
    //콜라를 받기 위해 마트에 주어야하는 빈 병 수 a
    //빈병 a개를 가져다주면 새 콜라 b개를 주고
    //지금 가지고 있는 빈병의 개수는 n개
    
    let bottle = 0;
    
    //빈병이 2개 미만이면 더이상 노 콜라
    while(1){
        if(n < a) break;
        bottle += Math.floor(n / a) * b; //우선 받는 새 콜라 수를 모아
        n = n - (Math.floor(n / a) * a) + (Math.floor(n / a) * b);
    }
        
        
    return bottle;
}