const updateClock = () =>{
    let now = new Date();
    let hours = now.getHours().toString().padStart(2  , "0");
    let minutes = now.getMinutes().toString().padStart(2  , "0");
    let seconds = now.getSeconds().toString().padStart(2  , "0");
    let period = hours >= 12 ? "Pm" : "Am"; 

    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2 , "0");

    const myHours = document.querySelector(".hours").textContent = hours;
    const myMinutes = document.querySelector(".minutes").textContent = minutes;
    const mySeconds = document.querySelector(".seconds").textContent = seconds;
    const myperiods = document.querySelector(".period").textContent = period;



    let body = document.body;
    if(now.getHours() >= 3 && now.getHours() < 17){
        body.style.backgroundColor = "  #03698f";
        body.style.color = "	#f5f8fa"
    }else{
        body.style.backgroundColor = "  #3e3e42";
        body.style.color = "    #fff"
    }

}

setInterval(updateClock , 1000);

updateClock()
