function solution(phone_number) {
    const rear = phone_number.slice(-4);
    const front = phone_number.slice(0, phone_number.length-4).length;
    
    return '*'.repeat(front) + rear;
}