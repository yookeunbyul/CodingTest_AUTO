function solution(s) {
    //s가 의미하는 원래 숫자를 return
    
    const object = {
        0 : "zero",
        1 : "one",
        2 : "two",
        3 : "three",
        4 : "four",
        5 : "five",
        6 : "six",
        7 : "seven",
        8 : "eight",
        9 : "nine"
    }
    
    for(let i=0; i<10; i++){
        s = s.replaceAll(object[i], i);
    }
    return Number(s);
}