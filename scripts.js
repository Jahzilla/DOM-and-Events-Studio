// Write your JavaScript code here.
window.addEventListener("load", function(){
    console.log("Window is loaded.")
    let takeOff = document.getElementById("takeoff");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let rocketShip = document.getElementById("rocket");
    let upButton = document.getElementById("up");
    let downButton = document.getElementById("down");
    let rightButton = document.getElementById("right");
    let leftButton = document.getElementById("left");
    rocketShip.style.top = "0px";
    rocketShip.style.left = "220px";
    downButton.addEventListener("click", function(){
        let top = parseInt(rocketShip.style.top);
        top += 10;
        rocketShip.style.top = top + "px";
    })
    upButton.addEventListener("click", function(){
        let top = parseInt(rocketShip.style.top);
        top -= 10;
        rocketShip.style.top = top + "px";



    })
    leftButton.addEventListener("click", function(){
        let left = parseInt(rocketShip.style.left);
        left -= 10;
        rocketShip.style.left = left + "px";



    })
    rightButton.addEventListener("click", function(){
        let left = parseInt(rocketShip.style.left);
        left += 10;
        rocketShip.style.left = left + "px";



    })
    takeOff.addEventListener("click", function(){
    let readyForTakeOff = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(readyForTakeOff === true){
        let flightStatus = document.getElementById("flightStatus");
        flightStatus.innerHTML = "Shuttle in flight.";
        let shuttleBackground = document.getElementById("shuttleBackground");
        shuttleBackground.style.backgroundColor = "blue";
        shuttleHeight.innerHTML = 10000;
    }
});
    let land = document.getElementById("landing");
    land.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;


    })
    let abort = document.getElementById("missionAbort");
    abort.addEventListener("click",function(){
        let abortStatus = window.confirm("Confirm that you want to abort the mission.");
        if(abortStatus === true){
            flightStatus.innerHTML = "Mission aborted!";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;

        }
    
    })



});

// Remember to pay attention to page loading!