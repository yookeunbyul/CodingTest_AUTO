function solution(t, p) {
    const pLength = p.length;
    
    const stack = [];
    
    for(let i=0; i<=t.length-pLength; i++){
        stack.push(t.slice(i, i+pLength));
    }
    
    return stack.filter(v => Number(v) <= Number(p)).length;
}