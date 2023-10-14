const input = document.getElementById('input');
let lessons = 0 , sum = 0;
const output = document.getElementById('output');
input.addEventListener("keypress" , function(event){
    if(event.key === "Enter"){
        addNewScore();
    }
});

function addNewScore () {
    sum += Number(input.value);
    lessons ++;
    const res = sum/lessons;
    output.innerHTML = res;
}