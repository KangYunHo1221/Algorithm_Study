function solution(absolutes, signs) {
    var answer = 0;

    for(let i=0; i < absolutes.length; i++){
        answer = (signs[i] === true) ? answer + absolutes[i] : answer-absolutes[i];
        console.log(answer);
    }
    return answer;
}

solution([4,7,12], [true,false,true])