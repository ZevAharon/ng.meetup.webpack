import angular from 'angular';
import { HomeModule } from './home/home.module';

import '../legacy/legacy.module';

export const RoutesModule = angular
    .module('ng.routes.module', [
        HomeModule,
        'legacy.module',
    ])
    .config(($stateProvider) => {
        'ngInject';
        $stateProvider
        .state('home', {
            url: '/home',
            component: 'home',
        });
    })
    .name
