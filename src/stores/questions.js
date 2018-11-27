import { action, observable } from 'mobx';

import URL from '~/constants/urls';

export default class questionsStoreClass {
    @observable questions = [];     // array of questions from API
    @observable fetching = false;   // "fetching" flag so we can better control UI
    @observable error = false;      // holds errors received back from API

    constructor(RootStore) {
        this.RootStore = RootStore;
    }

    @action
    getNewQuestions(count = 10, difficulty = 'hard', type = 'boolean') {
        // validate args (multi-line for readability)
        if (typeof count !== 'number') return;
        if (typeof difficulty !== 'string') return;
        if (typeof type !== 'string') return;

        this.setFetchingFlag(true);

        // append args and sanitize API URL
        const url = encodeURI(`${URL.questionsAPI}?amount=${count}&difficulty=${difficulty}&type=${type}`);

        fetch(url)
            .then((res) => {
                const data = res.json()
                return data;
            })
            .then(data => {
                this.setQuestions(data.results);
                this.setFetchingFlag(false);
            })
            .catch((err) => {
                this.error = err;
                this.setFetchingFlag(false);
            })
    }

    @action
    setFetchingFlag = (bool) => {
        if (typeof bool !== 'boolean') return;
        this.fetching = bool;
    }

    @action
    setQuestions = (data) => {
        if (typeof data !== 'object' || !data[0] || !data[0].question) return;
        this.questions = data;
    }

    @action
    getQuestionAtIndex = (idx) => {
        return this.questions[idx];
    }
}
