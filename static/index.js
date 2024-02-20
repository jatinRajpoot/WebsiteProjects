// This function will add zero with no as string and return value like 01 and 02...09 if no is less than 10 than this will add 0 with this otherwise no will return as it is 

function addZero(x){
    let tempno;
    if(x<10){
        tempno="0"+x 
    }
    else{
        tempno=x
    }
    return tempno
}
let time;
let elem;
let realtime;
// This is interval which i used to calculate the time right now 
setInterval(() => {
    time= new Date()
    realtime=addZero(time.getHours())+":"+addZero(time.getMinutes())+":"+addZero(time.getSeconds())
    document.getElementById("timespan").innerText=realtime
    
},1000);
console.log(" iam executable after interval")
let audio = new Audio('audio.wav');
setInterval(() => {
    audio.play();
    Clock_time=new Date()
    Hour=Clock_time.getHours()
    Mint=Clock_time.getMinutes()
    Sec=Clock_time.getSeconds()
    Hhand_Angle=(Hour*30) + (Mint*0.5);
    Mhand_Angle=(Mint*6) + (Sec*0.1)
    SHand_Angle=(Sec*6)
    hour.style.transform=`rotate(${Hhand_Angle}deg)`
    mint.style.transform=`rotate(${Mhand_Angle}deg)`
    seconds.style.transform=`rotate(${SHand_Angle}deg)`
}, 1000);
