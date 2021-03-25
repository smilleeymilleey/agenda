
let display = document.getElementById('currentDay');
let date = moment().format('MMMM Do YYYY, h:mm:ss a');
let currentTime = moment().hour();

displayDate();
function displayDate(){
display.textContent = date;

}

// change colors of blocks based on current time

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

$(".saveBtn").on("click", saveData);

let agendaObj = {}

function saveData() {
    $(".description").each( function(){

        let agendaItemInput= $(this).val()
        let agendaItemTime= $(this).attr("data-time")

        agendaObj[agendaItemTime] = agendaItemInput;

    })
    
    console.log(agendaObj)


}
