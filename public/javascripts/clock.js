function counting()
{
    let dzisiaj = new Date();

    let dzien = dzisiaj.getDate();
    let miesiac = dzisiaj.getMonth()+1;
    let rok = dzisiaj.getFullYear();

    let godzina = dzisiaj.getHours();
    if (godzina<10) godzina = "0"+godzina;

    let minuta = dzisiaj.getMinutes();
    if (minuta<10) minuta = "0"+minuta;

    let sekunda = dzisiaj.getSeconds();
    if (sekunda<10) sekunda = "0"+sekunda;

    document.getElementById("clock").innerHTML =
        dzien+"/"+miesiac+"/"+rok+"  "+godzina+":"+minuta+":"+sekunda;
    
}

setInterval('counting()'
,1000);