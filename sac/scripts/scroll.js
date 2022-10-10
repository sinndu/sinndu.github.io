var scroll = document.getElementById("scroll");
var currentText = 0;

const text =
[
    "Check out Fright Night in the Drama Room!",
    "Apply for Grade 9 Rep Today!",
    "IM TOO LAZY TO THINK OF MORE THINGS TO WRITE",
    "STRESS TEST STRESS TEST STRESS TEST STRESS TEST STRESS TEST STRESS TEST STRESS TEST STRESS TEST STRESS TEST STRESS TEST STRESS TEST STRESS TEST",
    "ok i need to write code to make the text smaller if too much text but i dont want to now"
];

scrollChange();

setInterval(scrollChange, 10000);

function scrollChange()
{
    scroll.innerHTML = text[currentText];

    if(currentText == text.length-1)
    {
        currentText = 0;
    }
    else
    {
        currentText++;
    }
}