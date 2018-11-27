import { computed } from 'mobx';

export default class resultsStoreClass {
    constructor(RootStore) {
        this.RootStore = RootStore;
    }

    @computed get correctAnswerCount() {
        const { AnswersStore: { answers }, QuestionsStore: { questions }} = this.RootStore;
        if (questions.length === 0 || answers.length === 0) return 0;

        let count = 0;
        for (let i = 0; i < answers.length; i++) {
            // normalize answers since there are strings and bools
            const givenAnswer = answers[i].answer.toString().toLowerCase();
            const correctAnswer = questions[i].correct_answer.toLowerCase();
            if (givenAnswer === correctAnswer) count++;
        }
        return count;
    }
}
