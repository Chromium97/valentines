function yes(){
    document.getElementById("headerMsg").innerHTML = "Yippeeee!";
    document.getElementById("mainImg").src = "yippee.gif";
    document.getElementById('btnYes').style.visibility='hidden';
    document.getElementById('btnNo').style.visibility='hidden';
}

function no(){
    document.getElementById("headerMsg").innerHTML = "Bruh....";
    document.getElementById("mainImg").src = "bruh.gif";
    document.getElementById('btnYes').style.visibility='hidden';
    document.getElementById('btnNo').style.visibility='hidden';
    document.getElementById('container-hidden').style.visibility='visible';
}

function tryAgain(){
    document.getElementById("headerMsg").innerHTML = "I am no longer asking";
    document.getElementById("mainImg").src = "gun.jpg";
    document.getElementById('btnYes').style.visibility='visible';
    document.getElementById('btnYes').style.width='90%';
    document.getElementById('btnNo').style.visibility='hidden';
    document.getElementById('container-hidden').style.visibility='hidden';
}