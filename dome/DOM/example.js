function insertParagraph(text) {
  var str = '<p>';
  str += text;
  str += '</p>';
  document.write(str);
}
window.onload = function() {
  var para = document.createElement('p');
  var testdiv = document.getElementById('testdiv');
  testdiv.appendChild(para);
  var text = document.createTextNode('Hello,World!');
  para.appendChild(text);
}
/*
window.onload = function() {
  var testdiv = document.getElementById('testdiv');
  testdiv.innerHTML = '<p>I inserted <em>this</em> contest.</p>'   //使用innerHTML元素
}
*/