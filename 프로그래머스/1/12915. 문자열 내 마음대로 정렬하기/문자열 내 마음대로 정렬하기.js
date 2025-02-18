function solution(strings, n) {
    //n번째 글자를 기준으로 오름차순 정렬
    
    return strings.sort((a,b) => {
        if(a[n] === b[n]) return a > b ? 1 : -1;
        return a[n] > b[n] ? 1 : -1;
    })
}