/* eslint-env jest */
import RootStore from '~/stores/RootStore';

describe("Answers Store", () => {
    it('records an answer', () => {
        const store = new RootStore();
        const data = { id: 1, answer: true };
        expect(store.AnswersStore.answers).toEqual([]);
        store.AnswersStore.recordAnswer(data);
        expect(store.AnswersStore.answers).toEqual([data]);
    });

    it('does not record an answer', () => {
        const store = new RootStore();
        const data = "true";
        expect(store.AnswersStore.answers).toEqual([]);
        store.AnswersStore.recordAnswer(data);
        expect(store.AnswersStore.answers).toEqual([]);
    });

    it('updates an existing answer', () => {
        const store = new RootStore();
        const data = [
            { id: 1, answer: true },
            { id: 2, answer: true },
            { id: 3, answer: true }
        ];

        // set initial data
        expect(store.AnswersStore.answers).toEqual([]);
        data.forEach(answer => store.AnswersStore.recordAnswer(answer));
        expect(store.AnswersStore.answers).toEqual(data);

        // change answer on existing array element
        const newAnswer = { id: 2, answer: false };
        store.AnswersStore.recordAnswer(newAnswer)
        expect(store.AnswersStore.answers[1]).toEqual({ id: 2, answer: false });
    });
});
