function solution(survey, choices) {
    const score = {
        1: 3,
        2: 2,
        3: 1,
        4: 0,
        5: 1,
        6: 2,
        7: 3
    }
    
    const personality = {
        'R': 0,
        'T': 0,
        'C': 0,
        'F': 0,
        'J': 0,
        'M': 0,
        'A': 0,
        'N': 0
    }
    
    for(let i=0; i<survey.length; i++){
        const [front,back] = survey[i].split('');
        
        if(choices[i] === 0){
            continue;
        }else if(choices[i] > 4){
            personality[back] += score[choices[i]];
        }else{
            personality[front] += score[choices[i]];
        }
    }
    
    const perArray = Object.entries(personality);
    
    let answer = "";
    const stack = [];
    
    for(let i=0; i<perArray.length; i+=2){
        stack.push(perArray.slice(i, i+2));
    }
    
    for(const item of stack){
        const [front,back] = item;
        
        if(front[1] > back[1]){
            answer += front[0];
        }else if(back[1] > front[1]){
            answer += back[0];
        }else{
            answer += front[0];
        }
    }
    
    return answer;
}