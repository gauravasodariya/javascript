//genrate random color
const randomColor=function(){
    const hex="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++)
    {
        color=color+hex[Math.floor(Math.random()*16)];
    }
    return color;
};
let stopps;
const demo=function(){
    stopps=setInterval(startToChangeColor,1000);
}
const startToChangeColor=function()
{
    document.body.style.backgroundColor=randomColor();
};
const stopToChangeColor=function()
{
    clearInterval(stopps);
    stopps=null;
};
document.querySelector('#start').addEventListener('click',demo);
document.querySelector('#stop').addEventListener('click',stopToChangeColor);


