export default function (correctAnswers, userAnswers) {
    let count = 0;
    correctAnswers.forEach((answer, idx) => {
        // normalize answers since there are both strings and bools
        const correctAnswer = answer.toString().toLowerCase();
        const givenAnswer = userAnswers[idx].toString().toLowerCase();
        if(correctAnswer === givenAnswer) count++
    })
    return count;
}
