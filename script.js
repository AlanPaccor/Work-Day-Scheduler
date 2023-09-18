var saveBtn = $('.saveBtn');
var eightId = $('#hour8');
var nineId = $('#hour9');
var tenId = $('#hour10');
var elevenId = $('#hour11');
var twelveId = $('#hour12');
var oneId = $('#hour13');
var twoId = $('#hour14');
var threeId = $('#hour15');
var fourId = $('#hour16');
var fiveId = $('#hour17');
var sixId = $('#hour18');
var textarea = $(".form-control");

var eight = $('#hr8');
var nine = $('#hr9');
var ten = $('#hr10');
var eleven = $('#hr11');
var twelve = $('#hr12');
var one = $('#hr13');
var two = $('#hr14');
var three = $('#hr15');
var four = $('#hr16');
var five = $('#hr17');
var six = $('#hr18');

var timeArray = [eight, nine, ten, eleven, twelve, one, two, three, four, five, six];

var text;
var hourSpan;
var currentHour = moment().hour();

var currentDay = $('#currentDay');

function displayCurrentDay() {
  var timeInterval = setInterval(function () {
    var now = moment().format('dddd, MMMM Do, YYYY[at] hh:mm:ss A');
    currentDay.text(now);
  });
}

displayCurrentDay();

function colors() {
  for (let i = 0; i < timeArray.length; i++) {
    if (currentHour > timeArray[i].attr("data-time")) {
      timeArray[i].attr("class", "past form-control col-10 text");
    } else if (currentHour == timeArray[i].attr("data-time")) {
      timeArray[i].attr("class", "present form-control col-10 text");
    } else {
      timeArray[i].attr("class", "future form-control col-10 text");
    }
  }
}

function saveText(event) {
  event.preventDefault();
  var text = $(this).siblings(".text").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
}

saveBtn.on('click', saveText);

function refresh() {
  console.log("Current Hour " + currentHour);
  $("#hour9 .text").val(localStorage.getItem("hour9"));
  $("#hour10 .text").val(localStorage.getItem("hour10"));
  $("#hour11 .text").val(localStorage.getItem("hour11"));
  $("#hour12 .text").val(localStorage.getItem("hour12"));
  $("#hour13 .text").val(localStorage.getItem("hour13"));
  $("#hour14 .text").val(localStorage.getItem("hour14"));
  $("#hour15 .text").val(localStorage.getItem("hour15"));
  $("#hour16 .text").val(localStorage.getItem("hour16"));
  $("#hour17 .text").val(localStorage.getItem("hour17"));
}

$(document).ready(function () {
  refresh();
  colors();
});

$("#clearDay").on("click", function () {
  localStorage.clear();
  refresh();
});
