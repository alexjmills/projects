var slider = document.getElementById("myRange");
var output = document.getElementById("degrees");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

function waterIntake(){
  var myWeight = document.getElementById("weight_input").value;
  var myAge = document.getElementById("ageSelect").value;
  var dailyIntake = parseInt(((myWeight/2.2) * myAge) / 28.3);
  document.getElementById("weight").innerHTML = myWeight;
  if (myAge == 40){
    document.getElementById("age").innerHTML = "under 30";
  }
  else if (myAge == 35){
    document.getElementById("age").innerHTML = "30-55";
  }
  else {
    ocument.getElementById("age").innerHTML = "over 55";
  }
  document.getElementById("goal").innerHTML = dailyIntake;
  document.getElementById("goal2").innerHTML = dailyIntake;
}



const myTimeout = setTimeout(cleanStatus, 10000);

function cleanStatus() {
  document.getElementById("clean-status").innerHTML = "Dirty!"
  document.getElementById('clean-status').style.color="#eaa315";
}

function resetCleanStatus() {
  clearTimeout(myTimeout);
  document.getElementById("clean-status").innerHTML = "Clean"
  document.getElementById('clean-status').style.color="white";
  myTimeout = setTimeout(cleanStatus, 10000);
}