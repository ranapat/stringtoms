import { stringtoms } from '../../lib';

console.log();
console.log('--- stringtoms examples');

const string1 = '1s';
console.log(' - ' + string1 + ' = ' + stringtoms(string1));

const string2 = '1 s';
console.log(' - ' + string2 + ' = ' + stringtoms(string2));

const string3 = '1m1s';
console.log(' - ' + string3 + ' = ' + stringtoms(string3));
