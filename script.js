
console.log("runniong thing!");
document.getElementById("cobottitle").style.opacity = 1;
document.getElementById("cobottitle").onload = function () {
  console.log("runniong thing!");
  document.getElementById("cobottitle").style.opacity = 1;
}


// Get the modal


// Get the button that opens the modal
var ros2_modal_btn = document.getElementById("ros2_btn")
;
var ros2_modal = 
document.getElementById("ros2_modal")
;

var arm_assembly_modal_btn = 
document.getElementById(  "arm_assembly_btn")
;
var arm_assembly_modal = 
document.getElementById("arm_assembly_modal")
;

var visual_recognition_modal_btn = document.getElementById("visual_recognition_btn");
var visual_recognition_modal = document.getElementById("visual_recognition_modal");


var emg_modal_btn = document.getElementById("emg_btn");
var emg_modal = document.getElementById("emg_modal");

var speech_recognition_modal_btn = document.getElementById("speech_recognition_btn");
var speech_recognition_modal = document.getElementById("speech_recognition_modal");



var arm_assembly_modal_span = document.getElementById("arm_assembly_modal_span");
var ros2_modal_span = document.getElementById("ros2_modal_span");
var speech_recognition_modal_span = document.getElementById("speech_recognition_modal_span");
var emg_modal_span = document.getElementById("emg_modal_span");
var visual_recognition_modal_span = document.getElementById("visual_recognition_modal_span");


arm_assembly_modal_span.onclick = function () { arm_assembly_modal.display = "none"; }
ros2_modal_span.onclick = function () { ros2_modal.display = "none"; }
speech_recognition_modal_span.onclick = function () { speech_recognition_modal.display = "none"; }
emg_modal_span.onclick = function () { emg_modal.display = "none"; }
visual_recognition_modal_span.onclick = function () { visual_recognition_modal.display = "none"; }

// When the user clicks the button, open the modal 

// When the user clicks on <span> (x), close the modal

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  switch(event.target)
  {
    case arm_assembly_modal:
      arm_assembly_modal.style.display = "none";
      break;
    case ros2_modal:
      ros2_modal.style.display = "none";
      break;
    case speech_recognition_modal:
      speech_recognition_modal.style.display = "none";
      break;
    case emg_modal:
      emg_modal.style.display = "none";
      break;
    case visual_recognition_modal:
      visual_recognition_modal.style.display = "none";
      break;

  }
}





ros2_modal_btn.onclick = function () { 
  ros2_modal.style.display = "block"; 
  ros2_modal.style.backgroundColor = "#000000AA"; 
  console.log("CONSOLE LOG"); 
}
arm_assembly_modal_btn.onclick = function () { 
  arm_assembly_modal.style.display = "block"; 
  arm_assembly_modal.style.backgroundColor = "#000000AA"; 
  console.log("CONSOLE LOG"); 
}
visual_recognition_modal_btn.onclick = function () { 
  visual_recognition_modal.style.display = "block"; 
  visual_recognition_modal.style.backgroundColor = "#000000AA"; 
  console.log("CONSOLE LOG"); 
}
emg_modal_btn.onclick = function () { 
  emg_modal.style.display = "block"; 
  emg_modal.style.backgroundColor = "#000000AA"; 
  console.log("CONSOLE LOG"); 
}
speech_recognition_modal_btn.onclick = function () { 
  speech_recognition_modal.style.display = "block"; 
  speech_recognition_modal.style.backgroundColor = "#000000AA"; 
  console.log("CONSOLE LOG"); 
}