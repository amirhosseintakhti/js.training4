const input = document.getElementById('input');
let lessons = 0 , sum = 0;
const output = document.getElementById('output');

function addNewScore () {
    sum += Number(input.value);
    lessons ++;
    const res = sum/lessons;
    output.innerHTML = res;
}