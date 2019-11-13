const date = new Date();

const year = date.getFullYear();
const month = date.getMonth()+1;
const day = date.getDate();
// const year = date.getFullYear();
console.log('I am in clock2.js');
document.getElementById('clock').innerText=`${year}/${month}/${day}`;