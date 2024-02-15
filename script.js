// var speechRecognition = window.webkitSpeechRecognition;

// var recognition = new speechRecognition();

// var textbox = $("#textbox");

// var instructions = $("#instructions");

// var content = "";

// recognition.continuous = true;

// // recognition is started

// recognition.onstart = function () {
//   instructions.text("Voice Recognition is On");
// };

// recognition.onspeechend = function () {
//   instructions.text("No Activity");
// };

// recognition.onerror = function () {
//   instruction.text("Try Again");
// };

// recognition.onresult = function (event) {
//   var current = event.resultIndex;

//   var transcript = event.results[current][0].transcript;

//   content += transcript;

//   textbox.val(content);
// };

// $("#start-btn").click(function (event) {
//   recognition.start();
// });

// textbox.on("input", function () {
//   content = $(this).val();
// });

// Declares a variable 'speechRecognition' and assigns it the reference to the Web Speech API's SpeechRecognition object provided by the browser (prefixed with webkit for compatibility).
var speechRecognition = window.webkitSpeechRecognition;

// Creates a new instance of the SpeechRecognition object and assigns it to the 'recognition' variable.
var recognition = new speechRecognition();

// Selects an element in the HTML document with the id 'textbox' and assigns it to the 'textbox' variable using jQuery.
var textbox = $("#textbox");

// Selects an element in the HTML document with the id 'instructions' and assigns it to the 'instructions' variable using jQuery.
var instructions = $("#instructions");

// Initializes an empty string 'content' to store the recognized speech.
var content = "";

// Sets the 'continuous' property of the 'recognition' object to true, allowing continuous speech recognition.
recognition.continuous = true;

// Defines a function to execute when speech recognition starts.
recognition.onstart = function () {
  instructions.text("Voice Recognition is On");
};

// Defines a function to execute when speech input ends.
recognition.onspeechend = function () {
  instructions.text("No Activity");
};

// Defines a function to execute when an error occurs during speech recognition.
recognition.onerror = function () {
  instruction.text("Try Again");
};

// Defines a function to execute when speech is recognized.
recognition.onresult = function (event) {
  var current = event.resultIndex; // Gets the index of the current result.
  
  // Extracts the transcript (recognized text) from the speech recognition event.
  var transcript = event.results[current][0].transcript;

  // Appends the recognized transcript to the 'content' variable.
  content += transcript;

  // Sets the value of the 'textbox' element to the updated content.
  textbox.val(content);
};

// Defines a click event handler for an element with the id 'start-btn'. When clicked, it starts the speech recognition.
$("#start-btn").click(function (event) {
  recognition.start();
});

// Listens for input events on the 'textbox' element and updates the 'content' variable with its current value.
textbox.on("input", function () {
  content = $(this).val();
});
  