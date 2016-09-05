/**
 * Created by lenovo on 2016/9/4.
 */

var divStyle = document.querySelector('div').style;
var div = document.querySelector('div');

// set
divStyle.backgroundColor = 'red';
divStyle.border = '1px solid black';

console.log(divStyle.cssText);

var str = [];
str = divStyle.cssText.split('; ');

console.log(str);

console.log('width = ' + window.getComputedStyle(div).width);
console.log('backgroundColor = ' + window.getComputedStyle(div).backgroundColor);
