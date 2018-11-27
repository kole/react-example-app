import Questions from './questions';
import Answers from './answers';
import Results from './results';

export default class RootStoreClass {
    constructor() {
        this.QuestionsStore = new Questions(this);
        this.AnswersStore = new Answers(this);
        this.ResultsStore = new Results(this);
    }
}
