export class DataService {
    constructor($http) {
        Object.assign(this, { $http });
    }

    getData() {
        return [
            { id: 1, name: 'Joe Smith' },
            { id: 2, name: 'Bob Johnson' },
            { id: 3, name: 'Kim Jackson' },
            { id: 4, name: 'Susan Creed' },
        ];
    }
}