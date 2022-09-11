const hourElement= document.getElementById("hour");
const minElement= document.getElementById("minutes");
const secElement= document.getElementById("seconds");
const ampmElement= document.getElementById("ampm");
/* to get hour from computer*/
function updateClock(){

    let h= new Date().getHours();
    let m= new Date().getMinutes();
    let s= new Date().getSeconds();
    let ampm= "AM";

    if(h>12){
        h=h-12;
        ampm="PM"
    }

    h = h<10 ? "0" + h : h;   /* Another way to write if statement */
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    hourElement.innerText=h;
    minElement.innerText=m;
    secElement.innerText=s;
    ampmElement.innerText=ampm;
    setTimeout(()=>{
        updateClock();

    },1000)
}

updateClock();
