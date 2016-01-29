import { ES6Controller } from './ES6Controller';
import { SearchService } from './SearchService';

angular
    .module('app', [])
    .controller('es6Controller', ES6Controller)
    .service('searchService', SearchService);