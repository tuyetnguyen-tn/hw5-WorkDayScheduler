$(document).ready(function(){

    let dateTime = luxon.DateTime;
    let currentTime = dateTime.now();
    //let workHours = ["9 a.m.", "10 a.m.", "11 a.m.", "12 p.m.", "1 p.m.", "2 p.m.", "3 p.m.", "4 p.m.", "5 p.m."]
    console.log(dateTime)
    //Make current day display
    $("#currentDay").text(currentTime.toLocaleString(dateTime.DATETIME_FULL));
    
    $(".saveBtn").on("click", function(){
        var text = $(this).siblings('.description').val()
    
        
    })
    
    
    
    
    