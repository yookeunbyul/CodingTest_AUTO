function solution(s) {
    //짝수는 대문자로, 홀수는 소문자로 변경
    //단어(공백을 기준)별로 짝/홀수 인덱스를 판단
    return s.split(" ").map(v => [...v].map((vv,vi) => vi % 2 === 0 ? vv.toUpperCase() : vv.toLowerCase()).join("")).join(" ");
}