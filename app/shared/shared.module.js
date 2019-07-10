import angular from 'angular';

import { DataService } from './services/data.service';

export const SharedModule = angular 
    .module('ng.shared.module', [])
    .service('dataService', DataService)
    .name;    