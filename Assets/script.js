// https://day.js.org/docs/en/display/format

let textBox = document.getElementsByClassName("textarea");


const timeDisplay = function () {
    var todaysDate = moment()._d;
    var showTime = document.querySelector("#currentDay");

    showTime.textContent = todaysDate;
  

};

const displayTimeBlocks = function() {
    var currentTime = moment()._d;
    console.log(moment(currentTime).hour())//grabs current time hour
   
    const textAreas = document.querySelectorAll(".hour"); 
    // console.log(textAreas[0]);
    
    const textAreahour = textAreas[0]
    const currentTimeHour = moment(currentTime).hour();

    for (let i = 0; i < textAreas.length; i++) {
        const hourEl = textAreas[i];
        var hourString = hourEl.getAttribute("data-time");
        // console.log(hourString)
       
        const hour = parseInt(hourString);

        // let textBox = document.getElementsByClassName("textarea");
        
        textBox.innerText = "";
        
        if (hour > currentTimeHour) {
            let textBox = document.getElementsByClassName("textarea");
            // console.log(hour + " is after current time.");
            const el = document.getElementById("textarea-" + hour);
           
            textBox[i].classList.add("future")
        } else if (hour < currentTimeHour) {
            const el = document.getElementById("textarea-" + hour);
            // console.log(hour + " is before the current time.");
            textBox[i].classList.add("past");
        } else {
            const el = document.getElementById("textarea-" + hour);
            // console.log(hour + " is the current hour.")
            textBox[i].classList.add("present");
        };
    };
};


let saveTasks = document.querySelectorAll("button")
// console.log(saveTasks)
saveTasks.forEach(btn => {
    btn.addEventListener("click", saveToStorage);
})

function saveToStorage(event) {
 console.log("we got clicked", event)
 
 const textAreas = document.querySelectorAll(".hour"); 
 const textAreahour = textAreas[0]
var textBox = document.getElementsByClassName("textarea", "data-time");
// const el = document.getElementById("textarea-" + hour);

for (let i = 0; i < textAreas.length; i++) {
    const hourEl = textAreas[i];
    var hourString = hourEl.getAttribute("data-time");

// getting this to work
 if(textBox[i]) {
     localStorage.setItem('hourString', JSON.stringify(textBox[i]));
     console.log(textBox.innerText)
 }

}
}

timeDisplay()
displayTimeBlocks()
