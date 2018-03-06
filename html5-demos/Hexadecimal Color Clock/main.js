//display the current time
var d, h, m, s, color;

function displayTime() {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    
    //add zero to the left of the numbers
    if(h <= 9) h = '0' + h;
    if(m <= 9) m = '0' + m;
    if(s <= 9) s = '0' + s;
    
    color = '#' + h + m + s;
    //set background color
    document.body.style.background = color;
    
    //set time
    document.getElementById('hex').innerHTML = color;
    
    //retrigger the function every second
    setTimeout(displayTime, 1000);
    
}

//call function
displayTime();