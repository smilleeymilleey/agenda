
let display = document.getElementById('currentDay');
let date = moment().format('MMMM Do YYYY, h:mm:ss a');
let currentTime = moment().hour();

displayDate();
function displayDate(){
display.textContent = date;

}

$(".description").each( function(){

    let time = $(this).data("time");
    console.log(time)
    console.log(currentTime)


    if (time < currentTime) {
        $(this).addClass("past"); 
    
        
    } else if (time > currentTime) {
        $(this).addClass("future");
        
    } else {
        $(this).addClass("present");

    }
});

// if (data-time < currentTime) {
   
// })