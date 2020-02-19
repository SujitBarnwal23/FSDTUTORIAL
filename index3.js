let a = document;
console.log(a);


// a= document.all //gives every elemet
// a= document.body //gives body of code
// a= document.forms // goves form object //indexing is allowed if more tha one form is present
// document.getElementById("first")
//document.getElementByClass("child1")



let element = document.getElementById("first")
// element.className
//element.childNode
//element.parentNode
element.style.color ='red';
element.innerText = 'sujit';
element.innerHTML = '<i>barnwal</i>';

let sel = document.querySelector('#third');
sel = document.querySelector('.red');
sel = document.querySelector('div');//indexing is allowed to select the number of items from html document.
//  document.getElementsByTagName('div')

let suj = document.createElement('li')
suj.classNamae ='sujit';
suj.id = 'barnwal';

suj.setAttribute('title','mytitle');
let div = document.querySelector('div')
div.appendChild(suj);


//document.createTextNode("hi")
// element.replaceWith(elemt2) replaces element with elemet2
// replaceChild ,removeChild,hasAttribute,