function solution(a, b) {
    //길이가 같은 두 1차원 정수 배열 a, b
    let sum = 0;
    
    for(let i=0; i<a.length; i++){
        const num = a[i]*b[i];
        
        sum += num;
    }
    
    return sum;
}