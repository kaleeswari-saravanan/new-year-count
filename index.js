const days=document.getElementById('days');
const hours=document.getElementById('hours');
const min=document.getElementById('minutes');
const sec=document.getElementById('seconds');
const year=document.getElementById('year');
const countdown=document.getElementById('countdown');

const currentyear=new Date().getFullYear();
const newyear=currentyear+1;
let newyeartime=new Date(`December 01 ${currentyear} 00:00:00`)
console.log(newyeartime);


function update()
{
    let currentTime=new Date();
    let diff=newyeartime-currentTime;

    let d=Math.floor(diff/1000/60/60/24);
    let h=Math.floor(diff/1000/60/60)%24;
    let m=Math.floor(diff/1000/60)%60;
    let s=Math.floor(diff/1000)%60;

    days.innerHTML=d < 10 ? "0"+d :d;
    hours.innerHTML=h < 10 ? "0"+h :h;
    min.innerHTML=m < 10 ? "0"+m :m;
    sec.innerHTML=s<10? "0" +s :s;

}

setInterval(update,1);