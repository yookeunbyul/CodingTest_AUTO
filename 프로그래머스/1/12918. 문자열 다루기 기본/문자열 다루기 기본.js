function solution(s) {
    //문자열 길이가 4 아니면 6
    //숫자로만 구성돼있나? 그러면 true를 리턴..?
    
    //문자열이면 true가 포함됨
    const tfArr = [...s].map(v => isNaN(v));
    
    return tfArr.every(v => v === false) && (tfArr.length === 4 || tfArr.length === 6) ? true : false;
}