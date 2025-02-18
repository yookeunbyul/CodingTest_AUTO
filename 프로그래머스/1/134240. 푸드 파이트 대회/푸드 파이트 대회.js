function solution(food) {
    const stack = [];
    
    let answer = "";
    
    for(let i=1; i<food.length; i++){
        stack.push(Math.floor(food[i] / 2));
    }
    
    for(let j=0; j<stack.length; j++){
        for(n=1; n<=stack[j]; n++){
            answer+=j+1;
        }
    }
    
    const reversed = [...answer].reverse().join("");
    
    return `${answer}0${reversed}`;
}