
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
        $(this).addClass("past"); //specifically for 9am
       
    }
})

// if (data-time < currentTime) {
   
// })