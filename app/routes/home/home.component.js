import template from './home.tmpl.html';
import styles from './home.scss';

export const HomeComponent = {
    bindings: {},
    template,
    styles,
    controller: class HomeComponent {
        constructor() {
            'ngInject';
            Object.assign(this, {
                
            });
        }

        $onInit() {
            // this.data = this.dataService.getData();
        }
    },
};