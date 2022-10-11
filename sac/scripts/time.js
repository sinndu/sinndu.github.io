var hours;
var minutes;
time();

setInterval(time, 10000);

function time()
{
    var today = new Date();

    if(today.getHours() > 12)
    {
        hours = today.getHours() - 12;
    }
    else
    {
        hours = today.getHours();
    }

    if(today.getMinutes() < 10)
    {
        minutes = "0" + today.getMinutes();
    }
    else
    {
        minutes = today.getMinutes();
    }
    
    document.getElementById("time").innerHTML = hours + ":" + minutes;
}