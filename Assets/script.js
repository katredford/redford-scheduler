// https://day.js.org/docs/en/display/format

const timeDisplay = function () {
    var todaysDate = moment()._d;
    var showTime = document.querySelector("#currentDay");

    showTime.textContent = todaysDate;
  

};

const displayTimeBlocks = function() {
    var currentTime = moment()._d;
    console.log(moment(currentTime).hour())//grabs current time hour
   
    const textAreas = document.querySelectorAll(".hour"); 
    console.log(textAreas[0]);
    
    const textAreahour = textAreas[0]
    const currentTimeHour = moment(currentTime).hour();

    for (let i = 0; i < textAreas.length; i++) {
        const hourEl = textAreas[i]
        var hourstring = hourEl.getAttribute("data-time")
        console.log(hourstring)
        hourEl.classList.add("past")
        const hour = parseInt(hourstring)

        let textBox = document.getElementsByClassName("textarea");
        textBox.innerText = "";
        
        if (hour > currentTimeHour) {
            console.log(hour + " is after current time.");
            const el = document.getElementById("textarea-" + hour);
            // textBox.classList.add(".past")
        } else if (hour < currentTimeHour) {
            const el = document.getElementById("textarea-" + hour);
            console.log(hour + " is before the current time.");
            console.log("mark")
            textBox.classList.add("past");
        } else {
            console.log(hour + " is the current hour.")
            // textBox.classList.add("past")
        }
    }
}


timeDisplay()
displayTimeBlocks()
