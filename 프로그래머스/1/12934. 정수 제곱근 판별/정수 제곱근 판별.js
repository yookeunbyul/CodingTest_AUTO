function solution(n) {
    //제곱이라면 => 루트를 사용?
    
    if(Math.sqrt(n) % 1 === 0){
        return (Math.sqrt(n)+1)**2;
    }else{
        return -1;
    }
}