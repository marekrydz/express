function counting()
{
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();

    let hour = date.getHours();
    if (hour<10) hour = "0"+hour;

    let minute = date.getMinutes();
    if (minute<10) minute = "0"+minute;

    let second = date.getSeconds();
    if (second<10) second = "0"+second;

    document.getElementById("clock").innerHTML =
        day+"/"+month+"/"+year+"  "+hour+":"+minute+":"+second;
    
}

setInterval('counting()'
,1000);