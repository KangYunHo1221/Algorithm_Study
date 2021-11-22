function solution(numbers) {
    var answer = 0;
    
    var oneToTen = [9,8,7,6,5,4,3,2,1,0];
    
    for(var i=0; i< oneToTen.length; i++){
        if  (numbers.indexOf(oneToTen[i]) < 0){
            console.log(oneToTen[i])
            answer += oneToTen[i]
        }
    }
    return answer;
}