'use strict';

const header = ['Name', 'Age'];
const content = [{ name: 'asd', age: 2 }, { name: 'qwe', age: 3 }];

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
  let td1 = document.createElement('td');
  td1.textContent = content[i].name;
  let td2 = document.createElement('td');
  td2.textContent = content[i].age;
  let tr = document.createElement('tr');
  tr.appendChild(td1);
  tr.appendChild(td2);
  table.appendChild(tr);
};

/*
alternatively:
let innerHTML = "<tbody>";
innerHTML = innerHTML + "<tr><th>"+header[0]+"</th><th>"+header[1]+"</th></tr>";
for (let i = 0; i < content.length; i++){
	innerHTML = innerHTML + "<tr><td>"+content[i].name+"</td><td>"+content[i].age+"</td></tr>";
}
innerHTML = innerHTML + "</tbody>";
table.innerHTML = innerHTML;
*/
