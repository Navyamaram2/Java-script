function updateclock(){
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2,'0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const timestring = `${hours}:${minutes}:${seconds}`;
    document.getElementById("display").textContent = timestring;

    
}
updateclock();
setInterval(updateclock, 1000);
