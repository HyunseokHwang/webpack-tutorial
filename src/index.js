 //CommonJS 스펙 : 모듈 가져오기
//var _ = require('lodash');\
//es6방식의 모듈 가져오기
 import _ from 'lodash';
//named import하는 방법
import {area, circumference} from "./js/circle";

//default import 하는 방법 : {} 없이 이름을 바꿀 수 있다.
import a from './js/cube';

import '../style.css';
import '../hello.scss';

console.log(area(5), circumference(5));

console.log(cube(5));

function component() {
  console.log('webpack test');
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());