function solution(answers) {
    var answer = [];
    var firstPersonsPattern = [1,2,3,4,5];
    var secondPersonsPattern = [2,1,2,3,2,4,2,5];
    var thirdPersonsPattern = [3,3,1,1,2,2,4,4,5,5];
    var count = [0,0,0];

    for(var i=0; i < answers.length; i++){
        var newi = i % firstPersonsPattern.length;
        if (answers[i] === firstPersonsPattern[newi]){
            count[0] += 1;
        }
        
        newi = i % secondPersonsPattern.length;
        if (answers[i] === secondPersonsPattern[newi]){
            count[1] += 1;
        }

        newi = i % thirdPersonsPattern.length;
        if (answers[i] === thirdPersonsPattern[newi]){
            count[2] += 1;
        }
    }

    var maxAnswer = Math.max(...count);
    if (maxAnswer === count[0]){
        answer.push(1);
    }
    if (maxAnswer === count[1]){
        answer.push(2);
    }
    if (maxAnswer === count[2]){
        answer.push(3);
    }
    return answer;
}

solution([1,2,3,4,5])
solution([1,3,2,4,2])
