import angular from 'angular';
import '@uirouter/angularjs';

import { RoutesModule } from '@routes/routes.module';
import { BootstrapRun } from './bootstrap.run';
import { BootstrapConfig } from './bootstrap.config';
import { BootstrapComponent } from './bootstrap.component';
import { SharedModule } from '@shared/shared.module';

export const BootstrapModule = angular
    .module('bootstrap.module', [
        'ui.router',
        RoutesModule,
        SharedModule,
    ])
    .run(BootstrapRun)
    .config(BootstrapConfig)
    .directive('appRoot', () => new BootstrapComponent())
    .name


