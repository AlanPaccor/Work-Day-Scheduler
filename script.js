var saveButton = $('.saveButton')
var time8 =$('#time8')
var time9 =$('#time9')
var time10 =$('#time10')
var time11 =$('#time11')
var time12 =$('#time12')
var time1 =$('#time13')
var time2 =$('#time14')
var time3 =$('#time15')
var time4 =$('#time16')
var time5 =$('#time17')
var time6 =$('#time18')
var inputField = $(".inputField")

var hour8 =$('#hour8')
var hour9 =$('#hour9')
var hour10 =$('#hour10')
var hour11 =$('#hour11')
var hour12 =$('#hour12')
var hour1 =$('#hour13')
var hour2 =$('#hour14')
var hour3 =$('#hour15')
var hour4 =$('#hour16')
var hour5 =$('#hour17')
var hour6 =$('#hour18')

var timeSlots = [hour8, hour9, hour10, hour11, hour12, hour1, hour2, hour3, hour4, hour5, hour6]

var task;
var timePeriod;
var currentHour = moment().hour()

var todayDate = $('#todayDate')

function showCurrentDate () {
    var timeInterval = setInterval(function () {
        var currentDate = moment().format('dddd, MMMM Do, YYYY [at] hh:mm:ss A')
        todayDate.text(currentDate)
    })
} 

showCurrentDate()

function timeSlotColors() {
    for (let i=0; i < timeSlots.length; i++) {
        if (currentHour > timeSlots[i].attr("data-time")){
            timeSlots[i].attr("class", "past inputField col-10 text");
        } else if (currentHour == timeSlots[i].attr("data-time")) {
            timeSlots[i].attr("class", "present inputField col-10 text");
        } else {
            timeSlots[i].attr("class", "future inputField col-10 text");
        }
    }
}
      
function saveTask (event){
    event.preventDefault()
    {
        var task = $(this).siblings(".text").val()
        var time = $(this).parent().attr("id");
        console.log(task)
        console.log(time)
        localStorage.setItem(time, task)
    }
}

saveButton.on('click', saveTask)
    
function refresh () {
    console.log("Current Hour " + currentHour);
    $("#time9 .text").val(localStorage.getItem("time9"));
    $("#time10 .text").val(localStorage.getItem("time10"));
    $("#time11 .text").val(localStorage.getItem("time11"));
    $("#time12 .text").val(localStorage.getItem("time12"));
    $("#time13 .text").val(localStorage.getItem("time13"));
    $("#time14 .text").val(localStorage.getItem("time14"));
    $("#time15 .text").val(localStorage.getItem("time15"));
    $("#time16 .text").val(localStorage.getItem("time16"));
    $("#time17 .text").val(localStorage.getItem("time17"));
} 

$(document).ready (function (){
    refresh()
    timeSlotColors()
})

$("#clearTasks").on("click", function(){
    localStorage.clear();
    refresh()
}) 
