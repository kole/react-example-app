import { observable, action } from 'mobx';

export default class answersStoreClass {
    @observable answers = [];

    constructor(RootStore) {
        this.RootStore = RootStore;
    }

    @action
    recordAnswer = ({ id, answer }) => {
        if (typeof id === 'undefined' || typeof answer === 'undefined') return;

        // if the array already contains an answer for the ID
        // update the answer at that index
        const existingAnswerID = this.answers.find(ans => ans.id === id);
        if (existingAnswerID) {
            const idx = this.answers.findIndex(obj => obj.id === existingAnswerID.id);
            return this.answers.splice(idx, 1, { id, answer });
        }

        return this.answers.push({ id, answer });
    }
}
