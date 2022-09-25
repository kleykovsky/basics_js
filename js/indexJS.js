const myModule = require('./commonJs');
const myModuleInstance = new myModule();

myModuleInstance.hello();
myModuleInstance.goodbye();

import {one, two} from './commonJs'; // импортируем отдельные переменные
import * as data from './commonJs'; // импортируем все...
import sayHello from './commonJs'; //импортируем дефолтный экспорт

console.log(`${one} and {two}`);
data.sayHello();
sayHello();