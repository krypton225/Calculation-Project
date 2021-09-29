//Get the current date of the machine ..
const monthNames = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو",
    "يوليو", "أُغسطس", "سيبتمبر", "أُكتوبر", "نوفمبر", "ديسمبر"
];

var myDate = new Date(),
    myYear = myDate.getFullYear(),
    myMonth = myDate.getMonth() + 1,
    myDay = myDate.getDate(),
    myHour = myDate.getHours(),
    minutes = myDate.getMinutes(),
    seconds = myDate.getSeconds(),
    minutes = minutes < 10 ? '0' + minutes : minutes,
    ampm = myHour >= 12 ? 'pm' : 'am',
    myHour = myHour % 12,
    strTime = myHour + ':' + minutes + ":" + seconds + ' ' + ampm;

document.getElementsByClassName("time").innerHTML = strTime;

//======================================================================================================================================
//print the month of now..
var monthNow,
    elements = document.getElementsByClassName('currentMonth');

elements.innerHTML = myDate.getMonth();

for (monthNow = 0; monthNow < elements.length; monthNow += 1) {
    elements[monthNow].innerHTML = monthNames[myDate.getMonth()] + " - " + myDay;
}
//Print the time of now ..
var timeNow,
    myAllElements = document.getElementsByClassName('time');
for (timeNow = 0; timeNow < myAllElements.length; timeNow += 1) {
    myAllElements[timeNow].innerHTML = strTime;
}

//======================================================================================================================================
/*TO DELETE ONE ROW IN THE TABLE*/
$('.content-table tbody').on('click', '.myDeleteButton', function() {
    $(this).closest('tr').remove();
});

/*
function deleteRowNow() {
    var index,
        myTable = document.getElementById("myTable");

    for (var i = 1; i < myTable.rows.length; i++) {
        myTable.rows[i++].cells[0].onclick = function() {
            index = this.parentElement.rowIndex;
            myTable.deleteRow(index);
            console.log(index);
        }
    }
}*/

//======================================================================================================================================
//check if the two input have any inputs or not to make change of the current time of the current row.
/*var inputPriceOfMachine = document.getElementById("input1"),
    inputPriceOfPhone = document.getElementById("input2");

if (inputPriceOfMachine.value === "" || inputPriceOfPhone.value === "") {
    document.querySelector('.time').classList.toggle("hidden");
} else {
    myAllElements[timeNow].innerHTML = strTime;
}

(function validateForm() {
    var p_machine = document.forms["myForm"]["p_machine"].value;
    var p_phone = document.forms["myForm"]["p_phone"].value;

    if (p_machine == null || p_machine == "", p_phone == null || p_phone == "") {
        document.querySelector('.time').classList.add("hidden");
    } else {
        myAllElements[timeNow].innerHTML = strTime;
    }
})();*/

//======================================================================================================================================


//======================================================================================================================================
//Checkbox of delete of the name..
function clickCheckBox(box) {
    var $box = $(box);
    $box.prop('checked', !$box.prop('checked'));
}