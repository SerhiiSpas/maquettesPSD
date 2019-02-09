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

