function time() {
    const date = new Date();
        const hours=date.getHours().toString().padStart(2,0);//First two characters padd them with zero
        const meridiem=hours>12 ? "PM":"AM";
        const minutes=date.getMinutes().toString().padStart(2,0);
        const seconds=date.getSeconds().toString().padStart(2,0);
        const timeString=`${hours}:${minutes}:${seconds} ${meridiem} `;
        document.getElementById("time").textContent=timeString;
}
setInterval(time,1000)


    
// setInterval(() => {
//         const date = new Date();
//         const hours=date.getHours().toString().padStart(2,0);//First two characters padd them with zero
//         const meridiem=hours>12 ? "PM":"AM";
//         const minutes=date.getMinutes().toString().padStart(2,0);
//         const seconds=date.getSeconds().toString().padStart(2,0);
//         const timeString=`${hours}:${minutes}:${seconds} ${meridiem} `;
//         document.getElementById("time").textContent=timeString;
// }, 1000);