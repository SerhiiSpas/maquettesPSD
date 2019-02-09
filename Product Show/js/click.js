
/*Choos Quantity------------------------------------------------*/
function a(quantity) {
    n=parseInt(document.all.quantity.innerHTML);
    if(quantity===0)
    {
        document.all.quantity.innerHTML=n-1;
    }
    if(quantity===1)
    {
        document.all.quantity.innerHTML=n+1;
    }
}



/*clothes_catalog-----------------------------------------------*/
function changeBg1() {
    document.getElementById("thumb2").style.backgroundColor = "#f4f6f8";
    document.getElementById("thumb3").style.backgroundColor = "#f4f6f8";
    document.getElementById("thumb1").style.backgroundColor = "#ff5912";
}

function changeBg2() {
    document.getElementById("thumb1").style.backgroundColor = "#f4f6f8";
    document.getElementById("thumb3").style.backgroundColor = "#f4f6f8";
    document.getElementById("thumb2").style.backgroundColor = "#ff5912";
}
function changeBg3() {
    document.getElementById("thumb1").style.backgroundColor = "#f4f6f8";
    document.getElementById("thumb2").style.backgroundColor = "#f4f6f8";
    document.getElementById("thumb3").style.backgroundColor = "#ff5912";
}
