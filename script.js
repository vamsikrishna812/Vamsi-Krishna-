function startVoice(){

const recognition = new webkitSpeechRecognition();
recognition.lang = "en-US";

recognition.onresult = function(event){

let speech = event.results[0][0].transcript;

document.getElementById("question").innerHTML =
"Question: " + speech;

document.getElementById("answer").innerHTML =
"Suggestion: Use proper fertilizer and water regularly.";

}

recognition.start();

}
