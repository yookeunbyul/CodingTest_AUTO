function solution(s){
    const strArr = s.split("").map(v => v.toLowerCase());
    
    let pCount = 0;
    let yCount = 0;
    
    strArr.forEach((v,i) => {
        if(v === "p"){
            pCount++;
        }else if(v === "y"){
            yCount++;
        }
    });
    
    if(pCount === 0 && yCount === 0) return true;
    
    return pCount === yCount;
}