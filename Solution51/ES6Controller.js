class ES6Controller {

    constructor(es6Service) {
        this.es6Service = es6Service;
    }

    search () {
        this.es6Service
            .fetch(this.term)
            .then(response => {
                this.items = response.data.items;
            });
    }
}
export { ES6Controller }