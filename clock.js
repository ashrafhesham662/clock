const updateClock = () =>{
    let now = new Date();
    let hours = now.getHours().toString().padStart( 2, "0");
    let minutes = now.getMinutes().toString().padStart( 2,"0");
    let seconds = now.getSeconds().toString().padStart(2 , "0");
    let periods = hours >= 12 ? "Pm" : "Am"; 
    hours = hours % 12 || 12;
    document.querySelector(".hours").textContent = hours
    document.querySelector(".minutes").textContent = minutes
    document.querySelector(".seconds").textContent = seconds
    document.querySelector(".period").textContent = periods
    
    let body = document.body;
    if(now.getHours() > 6 || now.getHours() < 18){
        body.style.backgroundColor = "#123";
        body.style.color = "#fff"
    }else{
        body.style.backgroundColor = "white"
        body.style.color = "#123"
    }
    
}

setInterval(updateClock , 1000);
updateClock()