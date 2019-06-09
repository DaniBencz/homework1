'use strict';

const header = ['Name', 'Age', 'Gender'];
const content = [
  { name: 'asd', age: 2, gender: 'm' },
  { name: 'qwe', age: 3, gender: 'f' },
  { name: 'foo', age: 4, gender: 'f' },
];

let table = document.querySelector('table');

// could go in a for loop as well
let th1 = document.createElement('th');
th1.textContent = header[0];
let th2 = document.createElement('th');
th2.textContent = header[1];

let tr1 = document.createElement('tr');
tr1.appendChild(th1);
tr1.appendChild(th2);
table.appendChild(tr1);

for (let i = 0; i < content.length; i++) {
  let tr = document.createElement('tr');
  let tempObj = content[i];
  let tempArr = Object.values(tempObj);
  for (let j = 0; j < tempArr.length; j++) {
    let td = document.createElement('td');
    td.textContent = tempArr[j];
    tr.appendChild(td);
  }
  table.appendChild(tr);
};

/* for (let i = 0; i < content.length; i++) {
  let td1 = document.createElement('td');
  td1.textContent = content[i].name;
  let td2 = document.createElement('td');
  td2.textContent = content[i].age;
  let tr = document.createElement('tr');
  tr.appendChild(td1);
  tr.appendChild(td2);
  table.appendChild(tr);
}; */

function childClass() {
  const check = document.querySelector('input');
  const notroot = document.querySelector('#notroot');
  const span = notroot.children[0];
  //or just :
  //const span = document.querySelector('span');
  if (check.checked === true) {
    span.setAttribute("class", "childClass");
  } else {
    span.removeAttribute("class");
  }
}