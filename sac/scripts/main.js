setInterval(reload, 3600000);

var videoScreen = document.getElementById("videoScreen");
var headerText = document.getElementById("headerText");

const files =
[
    ["css/videos/3.jpg", "img", "me and jeremy (small image)"],
    ["css/videos/2.png", "img", "CLUBS FAIR IS TODAY!"],
    ["css/videos/1.mp4", "video/mp4", "BIRTHDAY BASH HIGHLIGHTS"]
];

var current = 0;
var media;
change();


function change()
{
    if(media != null)
    {
        media.remove();
    }

    if(current == files.length-1)
    {
        current = 0;
    }
    else{
        current++;
    }

    if(files[current][1] != "img")
    {
        media = document.createElement('video');
        media.id = "video";
        media.autoplay = true;
        media.muted = true;
        videoScreen.appendChild(media);
        media.src = files[current][0];
        
        media.onloadedmetadata = function() 
        {
            setTimeout(change, media.duration*1000);
        };
    }

    else
    {
        media = document.createElement("img");
        media.id = "video";
        videoScreen.appendChild(media);
        media.src = files[current][0];
        
        setTimeout(change, 20000);
    }

    headerText.innerHTML = files[current][2];
}

function reload()
{
    document.location.reload();
}