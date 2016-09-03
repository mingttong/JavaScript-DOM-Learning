/**
 * Created by lenovo on 2016/9/3.
 */

document.getElementById('A').innerHTML = '<strong>Hi</strong>';
document.getElementById('B').outerHTML = '<div id="B" class="new">Whats <strong style="display: none;">Fuch</strong> Shaking</div>';
document.getElementById('C').textContent = 'dude';
document.getElementById('D').innerText = 'Keep it';
document.getElementById('E').outerText = 'real!';

console.log(document.body.innerHTML);

console.log('#######################################');

console.log(document.getElementById('B').innerText);

var B = document.getElementById('B');

B['onclick'] = function () {
    alert();
};

var cloneB = B.cloneNode(true);
cloneB.id = 'cloneb';

console.log(cloneB);

B.parentNode.appendChild(cloneB);

console.log(document.links.length);

console.log("#########################################");

var bodyNodeList = document.getElementsByTagName('body')[0].childNodes;

console.log(bodyNodeList);
console.log(document.links);

var arrNodeList = Array.prototype.slice.call(bodyNodeList);

console.log(arrNodeList);

console.log('bodyNodeList: ' + Array.isArray(bodyNodeList));
console.log('arrNodeList: ' + Array.isArray(arrNodeList));

var arr_temp = ['a', 'b', 'c'];
var arr_temp2 = [1, 2, 3];
console.log(arr_temp.slice.call(arr_temp2));

var arr = arrNodeList.slice.call(arr_temp);

console.log(arr);
