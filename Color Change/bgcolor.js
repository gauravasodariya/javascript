//genrate random color
const randomColor=function(){
    const hex="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++)
    {
        color=color+Math.random()*16;
    }
}


