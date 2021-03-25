

displayDate();
function displayDate(){
let display = document.getElementById('currentDay');
let date = moment().format('MMMM Do YYYY, h:mm:ss a');
display.textContent = date;

}

let time = [9,10,11,12,1,2,3,4,5] 

if (time )