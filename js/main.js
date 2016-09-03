/**
 * Created by lenovo on 2016/8/30.
 */
//function showPic (whichpic) {
//    var source = whichpic.getAttribute('href');
//    var placeholder = document.getElementById('placeholder');
//    placeholder.setAttribute('src', source);
//
//    var text = whichpic.getAttribute('title');
//    var description = document.getElementById('description');
//    description.firstChild.nodeValue = text;
//}
//
//function countBodyChildren () {
//    var body_element = document.getElementsByTagName('body')[0];
//    for (var i = 0; i < body_element.childNodes.length; i += 1) {
//        if (body_element.childNodes[i].nodeType === 1) {
//            console.log(body_element.childNodes[i]);
//        }
//    }
//}
//
//console.log(typeof null);

//window.onload = countBodyChildren;
//countBodyChildren();

function prepareGallery () {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById('imagegallery')) return false;

    var gallery = document.getElementById('imagegallery');
    var links = gallery.getElementsByTagName('a');

    for (var i = 0;  i < links.length; i += 1) {
        links[i].onclick = function () {
            return showPic(this) ? false : true;
        }
    }
}

function showPic (whichpic) {
    if (!document.getElementById('placeholder')) return false;
    var source = whichpic.getAttribute('href');
    var placeholder = document.getElementById('placeholder');
    if (placeholder.nodeName !== 'IMG') return false;
    placeholder.setAttribute('src', source);
    if (document.getElementById('description')) {
        var text = whichpic.getAttribute('title') ? whichpic.getAttribute('title') : "";
        var description = document.getElementById('description');
        if(description.firstChild.nodeType === 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}

window.onload = function () {
    prepareGallery();
};

var placeholder = document.createElement("img");
placeholder.setAttribute('id', 'placeholder');
placeholder.setAttribute('src', 'images/placeholder.gif');
placeholder.setAttribute('alt', 'my image gallery');
var description = document.createElement('p');
description.setAttribute('id', 'description');
var desctext = document.createTextNode('Choose an image');
description.appendChild(desctext);
var body = document.getElementsByTagName('body')[0];
body.appendChild(placeholder);
body.appendChild(description);

var gallery = document.getElementById('imagegallery');
gallery.parentNode.insertBefore(placeholder, gallery);
gallery.parentNode.insertBefore(description, gallery);

// 编写insertAfter()函数
function insertAfter (newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild === targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

insertAfter(placeholder, gallery);
insertAfter(description, placeholder);
