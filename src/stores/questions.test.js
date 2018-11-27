/* eslint-env jest */
import RootStore from '~/stores/RootStore';

describe("Questions Store", () => {
    it('sets the fetching flag', () => {
        const store = new RootStore();
        expect(store.QuestionsStore.fetching).toBeFalsy();
        store.QuestionsStore.setFetchingFlag(true);
        expect(store.QuestionsStore.fetching).toBeTruthy();
    });
    it('does not set the fetching flag', () => {
        const store = new RootStore();
        expect(store.QuestionsStore.fetching).toBeFalsy();
        store.QuestionsStore.setFetchingFlag("true");
        expect(store.QuestionsStore.fetching).toBeFalsy();
    });

    it('sets the questions observable', () => {
        const store = new RootStore();
        const data = [{question: 'Testing'}];
        expect(store.QuestionsStore.questions).toEqual([]);
        store.QuestionsStore.setQuestions(data);
        expect(store.QuestionsStore.questions).toEqual(data);
    });
    it('does not set the questions observable with wrong type', () => {
        const store = new RootStore();
        const data = 'some string';
        expect(store.QuestionsStore.questions).toEqual([]);
        store.QuestionsStore.setQuestions(data);
        expect(store.QuestionsStore.questions).toEqual([]);
    });
    it('does not set the questions observable with unexpected object structure', () => {
        const store = new RootStore();
        const data = [{invalidObjectKey: 'badValue'}];
        expect(store.QuestionsStore.questions).toEqual([]);
        store.QuestionsStore.setQuestions(data);
        expect(store.QuestionsStore.questions).toEqual([]);
    });

    it('returns the expected question', () => {
        const store = new RootStore();
        const data = [{question: 'Testing'}];
        store.QuestionsStore.setQuestions(data);
        const question = store.QuestionsStore.getQuestionAtIndex(0);
        expect(question).toEqual(data[0]);
    });
});
