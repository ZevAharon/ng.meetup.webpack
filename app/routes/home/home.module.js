import angular from 'angular';
import { HomeComponent } from './home.component';


export const HomeModule = angular
    .module('home.module', [])
    .component('home', HomeComponent)
    .name;

