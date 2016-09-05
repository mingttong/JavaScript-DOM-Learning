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

console.log('######################################################');

console.log(document.getElementById('test').previousElementSibling);
console.log(document.getElementById('D').nextElementSibling.childNodes[0].parentElement);
var test = document.getElementById('test');
console.log(test.compareDocumentPosition(test.childNodes[0]));

console.log('#######################################################');

var value;

// document自有属性
console.log(Object.keys(document).sort());

// document继承的和自有的属性
var documentPropertiesIncludeInherited = [];
for (value in document) {
    documentPropertiesIncludeInherited.push(value);
}
console.log(documentPropertiesIncludeInherited.sort().length);

//  document 继承属性
var documentPropertiesOnlyInherited = [];
for (value in document) {
    if (!document.hasOwnProperty(value)) {
        documentPropertiesOnlyInherited.push(value);
    }
}
console.log(documentPropertiesOnlyInherited.sort().length);

console.log('###################################################');

var d = document;
console.log('title = ' + d.title);
console.log('url = ' + d.URL);
console.log('referrer = ' + d.referrer);
console.log('lastModified = ' + d.lastModified);
console.log('compatibility mode = ' + d.compatMode);

console.log('########################################################');

console.log(document.childNodes);
console.log(document.doctype);

console.log('##########################################################');

console.log(document.implementation.hasFeature());
console.log(document.implementation.hasFeature('Core', '4.0'));
console.log(document.implementation.hasFeature('HTML', '1.0'));

console.log('##############################################################');
console.log('####焦点/激活节点的引用');

var txtarea = document.getElementsByTagName('textarea')[0];
txtarea.focus();

console.log(document.activeElement);

console.log('#############################################################');
console.log('####判断文档中任何节点得到焦点');

//setTimeout(function () {
//    console.log(document.hasFocus());
//}, 5000);

console.log('####################################################');
console.log('####使用ownerDocument从某一元素取得文档的引用');

console.log(document.body.ownerDocument);

console.log('####################################################');
console.log('打印出所有节点的构造函数');

var documentNodeList = document.body.childNodes;

var i;

for (i = 0; i < documentNodeList.length; i += 1) {
    if (documentNodeList[i].nodeType === 1) {
        console.log(documentNodeList[i].constructor);
    }
}

console.log('####################################################');
console.log('HTML*Element对象属性和方法');

var anchor = document.getElementsByTagName('a')[0];

// 元素自有属性
console.log('元素自有属性：' + Object.keys(anchor).sort());

// 元素自有与继承的属性
var documentPropertiesIncludeInherited = [];
for (i in Element) {
    documentPropertiesIncludeInherited.push(i);
}
console.log('元素自有与继承的属性：' + documentPropertiesIncludeInherited.sort());

// 元素继承的属性
var documentPropertiesOnlyInherited = [];
for (i in Element) {
    if (!anchor.hasOwnProperty(i)) {
        documentPropertiesOnlyInherited.push(i);
    }
}
console.log('元素继承的属性：' + documentPropertiesOnlyInherited.sort());

document.getElementsByTagName('body')[0].appendChild(document.createElement('div').appendChild(document.createTextNode('wocoanimalegebi')));

console.log(document.getElementsByTagName('p')[0].nodeName);

console.log('####################################################');
console.log('获取元素属性与值的列表/集合');

var atts = document.getElementsByTagName('a')[0].attributes;

for (i = 0; i < atts.length; i += 1) {
    console.log(atts[i].nodeName + '=' + atts[i].nodeValue);
}

//while (atts.length !== 0) {
//    console.log(atts.length);
//    anchor.removeAttribute(atts[0].nodeName);
//}

console.log('####################################################');
console.log('获取类属性值列表');

console.log(anchor.classList);

console.log(anchor.className);

console.log('####################################################');
console.log('变换某个类属性的值');

anchor.classList.toggle('Burinige');

console.log(anchor.classList);

console.log('####################################################');
console.log('选取/创建一个NodeList');

var ULNodeList = document.querySelectorAll('li');
console.log(ULNodeList);

var LI = document.getElementsByTagName('ul')[0].lastElementChild;
LI.firstChild.nodeValue = "wocao";

console.log(ULNodeList);

console.log('############################################');
console.log('预定义的元素节点选取/列表');

console.log('document.all: ' + document.styleSheets.constructor);

console.log("######");

console.log(document.querySelector('li').matches('li:first-child'));
