/**
 * Created by lenovo on 2016/8/30.
 */
var paras = document.getElementsByTagName('p');
var i,
    title_text;
for (i = 0; i < paras.length; i += 1) {
    title_text = paras[i].getAttribute('title');
    if (title_text) {
        alert(title_text);
    }
}
